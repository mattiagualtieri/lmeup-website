<template>
  <div class="content">
    <p class="title">
      <h1>Benvenuto nel nostro sito <br> 
        <span class="highlight">#LEMILLEEUNAPOLLI</span>
      </h1>
    </p>
    <p class="subtitle">
      <h2><span>&#8987;</span> Prossimo evento: {{ nextEvent }}</h2>
    </p>
    <RouterLink to="/eventi">
      <button class="subtitle-button">Scopri di più</button>
    </RouterLink>
    <p class="subtitle">
      <h2><span>&#9989;</span> Posti disponibili</h2>
    </p>
    <RouterLink to="/">
      <button class="subtitle-button">Prenota qui</button>
    </RouterLink>
    <p class="subtitle">
      <h2><span>&#128085;</span> Scopri il nostro brand</h2>
    </p>
    <RouterLink to="/">
      <button class="subtitle-button" style="margin-bottom: 300px;">Scopri</button>
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextEvent: '21/07/2023'
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
}

.title {
  font-size: 24px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin: auto;
}

.highlight {
  color: #0b4b03;
}

.subtitle {
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  margin-top: 48px;
}

.subtitle-button {
  background-color: white; 
  border: 2px solid #0b4b03;
  border-radius: 12px;
  color: #0b4b03;
  font-family: 'Poppins', sans-serif;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  transition-duration: 0.4s;
  cursor: pointer;
}

.subtitle-button:hover {
  background-color: #0b4b03; 
  color: white;
}


@media (max-width: 768px) {
  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 14px;
  }
  .subtitle-button {
    background-color: white; 
    border: 2px solid #0b4b03;
    border-radius: 12px;
    color: #0b4b03;
    font-family: 'Poppins', sans-serif;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    transition-duration: 0.4s;
    cursor: pointer;
  }
}
</style>