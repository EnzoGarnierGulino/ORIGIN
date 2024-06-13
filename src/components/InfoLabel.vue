<template>
    <div class="label">
        <p>ORIGIN Records songs are also avariable here: </p>
        <img class="socialmediabutton" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
             alt="ORIGIN Records YouTube"
             @click="redirect"> 
        <img class="socialmediabutton" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
             alt="ORIGIN Records Instagram"
             @click="redirect2">
        <img class="socialmediabutton" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/640px-Spotify_logo_without_text.svg.png"
             alt="ORIGIN Records Spotify playlist"
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
