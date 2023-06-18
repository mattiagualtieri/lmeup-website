<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">    
    <nav>
    <div class="logo">
        <RouterLink to="/">
            <img src="../assets/logo.png" alt="LMEUP">
        </RouterLink>
    </div>
    <ul class="links">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><span class="sep">|</span></li>
        <li><RouterLink to="/eventi" class="link">Eventi</RouterLink></li>
        <li><span class="sep">|</span></li>
        <li><RouterLink to="/brand" class="link">Brand</RouterLink></li>
        <li><span class="sep">|</span></li>
        <li><RouterLink to="/about" class="link">About</RouterLink></li>
    </ul>
    <span class="hamburger" @click="drawerVisible=true">
        <span class="material-icons md-18">menu</span>
    </span>
  </nav>
  <div class="sidenav"
        :style="{
            width: drawerVisible? '40vw' : '0',
            paddingLeft: drawerVisible? '10px' : '0',
        }"
    >
        <span class="close-button" @click="drawerVisible=false">
            <span class="material-icons">close</span>
        </span>
        <ul class="sidenav-links">
            <li><RouterLink to="/" class="link">Home</RouterLink></li>
            <li><RouterLink to="/eventi" class="link">Eventi</RouterLink></li>
            <li><RouterLink to="/brand" class="link">Brand</RouterLink></li>
            <li><RouterLink to="/about" class="link">About</RouterLink></li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      drawerVisible: false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

nav {
    background-color: #0b4b03;
    padding: 5px 0px;
    display: flex;
    align-items: center;
    width: auto;
    position: sticky;
    top: 0;
    left: 0;
}

nav .logo {
    flex: 1;
}

nav .logo img {
    width: 70px;
    margin-left: 20px;
}

.links {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 30px;
}

nav .link {
    color: white;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
}

nav .link:hover {
    color: rgb(213, 213, 213);
}

.links li {
    color: white;
    padding: 15px 10px;
    font-size: 18px;
}

.sep {
    color: #073102;
}

.hamburger {
    display: none;
    margin-right: 30px;
    color: white;
}

.sidenav {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  overflow: hidden;
  height: 100vh;
  padding-left: 0;
  background: #0b4b03;
  z-index: 200;
  transition: all 0.2s;
}

.close-button {
    color: white;
}

.sidenav-links {
    align-items: center;
    list-style: none;
    margin-top: 60px;
}

.sidenav-links li {
    margin-top: 10px;
}

.sidenav .link {
    color: white;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    font-size: 24px;
}

@media screen and (max-width: 700px) {
    .links {
        display: none;
    }
    .hamburger {
        display: flex;
    }
}

</style>