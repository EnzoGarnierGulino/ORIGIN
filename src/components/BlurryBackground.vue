
<template>
    <div class="blurry-background" :style="backgroundStyle">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlurryBackground',
        props: {
            imageSrc: {
                type: String,
                required: true
            }
        },
        computed: {
            backgroundStyle() {
                return {
                    backgroundImage: `url(${this.imageSrc})`
                };
            }
        }
    }
</script>

<style scoped>
    .blurry-background {
        position: relative;
        width: 100%;
        height: 100vh; 
        overflow: hidden;
    }

        .blurry-background::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: inherit; 
            background-size: cover;
            background-position: center;
            filter: blur(10px);
            z-index: -1; 
        }

    .content {
        position: relative;
        z-index: 1;
        color: white;
        text-align: center;
        padding: 20px;
    }
</style>
