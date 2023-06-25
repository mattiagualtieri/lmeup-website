<script setup>
import PhotosLink from '../components/PhotosLink.vue'
import EventLink from '../components/EventLink.vue'
</script>

<template>
  <div class="content">
    <p class="section-title">
      <h2>Prossimo evento</h2>
    </p>
    <a href="https://goo.gl/maps/bh6Vci1nh3TRn36a8" class="location">
      <h2><span>&#128205;</span> Pol. Cognentese, Via Umberto Tonini 5, Modena</h2>
    </a>
    <p class="subtitle">
      <h2>21/07/2023</h2>
    </p>
    <EventLink style="margin-bottom: 48px;"></EventLink>

    <hr>

    <p class="section-title">
      <h2>Eventi passati</h2>
    </p>
    <p class="subtitle">
      <h2>09/06/2023</h2>
    </p>
    <PhotosLink :link="photosLink" :title="photosTitle" style="margin-bottom: 32px;"></PhotosLink>
    <p class="subtitle">
      <h2>16/09/2022</h2>
    </p>
    <PhotosLink :link="photosLink" :title="photosTitle" style="margin-bottom: 32px;"></PhotosLink>
    <p class="subtitle">
      <h2>24/06/2022</h2>
    </p>
    <PhotosLink :link="photosLink" :title="photosTitle" style="margin-bottom: 132px;"></PhotosLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photosTitle: 'Vai alle foto',
      photosLink: 'https://drive.google.com/drive/folders/1qzwqzbePEwxHWZ41J0hNqYhg6E8bcRps'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
/*Emoji reference: https://www.w3schools.com/charsets/ref_emoji.asp*/

.content {
  align-items: center;
  text-align: center;
  padding-left: 28px;
  padding-right: 28px;
}

.section-title {
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  margin-top: 42px;
  margin-bottom: 12px;
}

.location {
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  margin-top: 12px;
  text-decoration: none;
  color: #212121;
}

.location:visited {
  text-decoration: none;
  color: #212121;
}

.subtitle {
  font-size: 24px;
  color: #0b4b03;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  margin-top: 12px;
}

hr {
  color: #0b4b03;
  background-color: #0b4b03;
  height: 2px;
  border: none;
}

@media (max-width: 768px) {
  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 14px;
  }
}
</style>