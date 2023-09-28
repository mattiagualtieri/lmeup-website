<template>
    <div class="video">
        <video muted="" autoplay="" loop="" playsinline="" controls="" poster="">
            <source src="../assets/video.mp4" type="video/mp4">
        </video>
    </div>
</template>
  
<script>
    export default {
        name: 'VideoComponent'
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
  