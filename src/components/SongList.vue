<template>
    <div class="song-list">
        <SearchBar :searchQuery="searchQuery" @update:searchQuery="updateSearchQuery" />
        <InfoLabel>
            
        </InfoLabel>
        <div v-if="filteredSongs.length > 0">
            <Song v-for="song in filteredSongs" :key="song.track.id" :duration="song.track.duration_ms"
                  :name="song.track.name" :artists="song.track.artists" :coverart="song.track.album.images[0].url"></Song>
        </div>
        <div v-else class="loading-container">
            <div class="loading-spinner"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Song from "@/components/Song.vue";
    import SearchBar from "@/components/SearchBar.vue";
    import InfoLabel from "@/components/InfoLabel.vue";

    export default {
        name: 'SongList',
        components: { Song, SearchBar, InfoLabel },
        data() {
            return {
                token: null,
                songsData: [],
                searchQuery: ''
            }
        },
        mounted() {
            this.initializeSpotify();
        },
        methods: {
            initializeSpotify() {
                if (!localStorage.getItem('spotifyToken') || !localStorage.getItem('tokenCreationTime')) {
                    this.getAccessToken();
                } else {
                    this.token = localStorage.getItem('spotifyToken');
                    const tokenCreationTime = localStorage.getItem('tokenCreationTime');
                    const currentTime = new Date().getTime() / 1000;
                    if (currentTime - tokenCreationTime > 3600) {
                        this.getAccessToken();
                    } else {
                        this.getSongs();
                    }
                }
            },
            getAccessToken() {
                let clientId = "d1d9de4848224f658c4c60c52724456a";
                let clientSecret = "57a178e09ba1495198719aabb20a8299";
                const authString = `${clientId}:${clientSecret}`;
                const encodedAuthString = btoa(authString);

                axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
                    grant_type: 'client_credentials'
                }), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic ${encodedAuthString}`
                    }
                })
                    .then(response => {
                        this.token = response.data.access_token;
                        localStorage.setItem('spotifyToken', this.token);
                        localStorage.setItem('tokenCreationTime', new Date().getTime() / 1000);
                        this.getSongs();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            getSongs() {
                const endpoint = 'https://api.spotify.com/v1/playlists/6gxr6s1C9YImDsoJgiVGxC/tracks';

                axios.get(endpoint, {
                    params: {
                        fields: 'items(track(id, name, artists(name), album(images(url)), duration_ms))'
                    },
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        this.songsData = response.data.items;
                        console.log(this.songsData);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            updateSearchQuery(newQuery) {
                this.searchQuery = newQuery;
            }
        },
        computed: {
            filteredSongs() {
                return this.songsData.filter(song => {
                    return song.track.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }
        }
    }
</script>

<style>
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading-spinner {
        border: 4px solid #ccc;
        border-top: 4px solid #181818;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
