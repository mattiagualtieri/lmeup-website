<template>
  <div class="image-container">
    <a :href="link">
      <button>Vai al drive</button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.image-container {
  height: 200px;
  background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url("../assets/20230906-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  padding: auto;
}

button {
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

button:hover {
  font-size: 18px;
}
</style>
  