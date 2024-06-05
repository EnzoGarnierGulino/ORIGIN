<template>
    <div class="label">
        <p>ORIGIN Records songs are also avariable here: </p>
        <img class="socialmediabutton" src="https://1000logos.net/wp-content/uploads/2017/05/New-YouTube-logo.jpg"
             alt="ORIGIN Records Youtube!"
             @click="redirect"> 
        <img class="socialmediabutton" src="https://th.bing.com/th/id/R.24223c92569a035c382c2b658e9789a0?rik=SsJgrmXtdiNaEw&pid=ImgRaw&r=0"
             alt="ORIGIN Records Instagram!"
             @click="redirect2">
        <img class="socialmediabutton" src="https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png"
             alt="ORIGIN Records Spotify Playlist!"
             @click="redirect3">


    </div>
</template>

<script>

    export default {
        name: "InfoLabel",
        data() {
         
            return {

            }
        },
        computed: {
            corner() {
                return {
                    width: this.cornerSize,
                    height: this.cornerSize
                }
            }
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.youtube.com/@origin_records';
            },
            redirect2() {
                window.location.href = 'https://www.instagram.com/origin.records/';
            },
            redirect3() {
                window.location.href = 'https://open.spotify.com/playlist/6gxr6s1C9YImDsoJgiVGxC';
            }
        }
        
    }

</script>

<style scoped>

    @keyframes ease-in-out {
        from {
            opacity: 0;
        }
        to {
            opacity: 5;
        }
    }

    .label {
        display: flex;
        align-items: center;
        font-size: 20px;
        border: solid 5px;
        font-family: Arial;
        animation: ease-in-out;
        color: dimgrey;
        padding: 15px;
        position: relative;
    }

    .border-container {
        position: relative;
        border: 2px solid #000;
        padding: 20px;
        width: 300px;
        height: 200px;
    }

    .corner {
        position: absolute;
    }

    .left1 {
        color: firebrick;
        top: -10px;
        left: -10px;
    }

    .right1 {
        color: firebrick;
        top: -10px;
        right: -10px;
    }

    .left2 {
        color: firebrick;
        bottom: -10px;
        left: -10px;
    }

    .right2 {
        color: firebrick;
        bottom: -10px;
        right: -10px;
    }

    .socialmediabutton {
        margin: 0 10px;
        animation: ease-in;
        cursor: pointer;
        width: 70px;
        height: 70px;
    }

    .img-normal {
        width: 75px;
        height: 75px;
        margin: 30px;
        border: solid 6px;
    }

    .spec-text {
        font-family: 'Franklin Gothic';
        float: right;
    }

</style>
