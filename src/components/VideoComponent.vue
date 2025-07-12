<template>
    <div class="video">
        <video muted autoplay loop playsinline controls poster="">
            <source :src="videoSrc" type="video/mp4">
        </video>
    </div>
</template>
  
<script>
export default {
    name: 'VideoComponent',
    data() {
        return {
            videoSrc: ''
        }
    },
    methods: {
        updateVideoSrc() {
            if (window.innerWidth <= 850) {
                this.videoSrc = require('../assets/video2.mp4');
            } else {
                this.videoSrc = require('../assets/video.mp4');
            }
        }
    },
    mounted() {
        this.updateVideoSrc();
        window.addEventListener('resize', this.updateVideoSrc);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateVideoSrc);
    }
}
</script>
  
<style scoped>

.video {
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    margin-bottom: 64px;
}

video {
    border-radius: inherit;
    width: 80%;
}
  
@media screen and (max-width: 850px) {    
    video {
        width: 90%;
    }
}

</style>
