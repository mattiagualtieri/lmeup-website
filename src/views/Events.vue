<script setup>
import EventLink from '../components/EventLink.vue'
</script>

<template>
  <div class="content">
    <p class="section-title">
      Prossimo evento
    </p>
    <a href="https://goo.gl/maps/bh6Vci1nh3TRn36a8" class="location">
      <h2><span>&#128205;</span> Pol. Cognentese, Via Umberto Tonini 5, Modena</h2>
    </a>
    <p class="subtitle">
      21/07/2023
    </p>
    <EventLink style="margin-bottom: 48px;"></EventLink>

    <hr>

    <p class="section-title" style="margin-bottom: 48px;">
      Eventi passati
    </p>
    <!--09/06/2023-->
    <p class="subtitle">
      09/06/2023
    </p>
    <div class="image-container-link-1">
      <a class="link" href="https://drive.google.com/drive/folders/1qzwqzbePEwxHWZ41J0hNqYhg6E8bcRps">
        <button class="link-button">Vai alle foto</button>
      </a>
    </div>
    <!--16/09/2022-->
    <p class="subtitle">
      16/09/2022
    </p>
    <div class="image-container-link-2">
      <a class="link" href="https://drive.google.com/drive/mobile/folders/12sxRduh5OjLwIjWOqJ7mAPbHxOjRWVNv?fbclid=PAAaYO7Kz4428ToNFCJZr-4U29Z5CLufY9XXOd9aWLdv-swiYDgO1sPcWgUlc">
        <button class="link-button">Vai alle foto</button>
      </a>
    </div>
    <!--24/06/2022-->
    <p class="subtitle">
      24/06/2022
    </p>
    <div class="image-container-link-3">
      <a class="link" href="link">
        <button class="link-button">Vai alle foto</button>
      </a>
    </div>
  </div>
</template>

<script>

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
  font-size: 32px;
  font-weight: bold;
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
  font-size: 32px;
  font-weight: bold;
  color: #0b4b03;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  margin-top: 12px;
  margin-bottom: 18px;
}

hr {
  color: #0b4b03;
  background-color: #0b4b03;
  height: 2px;
  border: none;
}

.image-container-link-1 {
  height: 200px;
  background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url("../assets/20230609.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  align-items: center;
  margin-bottom: 48px;
}
.image-container-link-2 {
  height: 200px;
  background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url("../assets/20220916.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
}

.image-container-link-3 {
  height: 200px;
  background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url("../assets/20220624.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
}

.link {
  padding: auto;
}

.link-button {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: #0b4b03; 
  border: 2px solid #0b4b03;
  border-radius: 12px;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  transition-duration: 0.4s;
  cursor: pointer;

}

.link-button:hover {
  font-size: 18px;
}

@media (max-width: 768px) {
  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 24px;
  }
}
</style>