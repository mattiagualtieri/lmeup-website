<template>
    <nav>
      <div class="logo">
        <router-link to="/" @click="closeMenu">
          <img src="../assets/logo.png" alt="Home" />
        </router-link>
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" size="lg" style="color: #ffffff;" />
      </div>
      <div class="sidenav" :class="{ open: isMenuOpen }" ref="sidenav">
        <span class="close-button" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-xmark" size="xl" style="color: #ffffff;" />
        </span>
        <ul>
          <li>
            <router-link to="/" @click="closeMenu">Home</router-link>
          </li>
          <li>
            <router-link to="/eventi" @click="closeMenu">Eventi</router-link>
          </li>
          <li>
            <router-link to="/brand" @click="closeMenu">Brand</router-link>
          </li>
          <li>
            <router-link to="/faq" @click="closeMenu">FAQs</router-link>
          </li>
          <li>
            <router-link to="/about" @click="closeMenu">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleMenu(event) {
      this.isMenuOpen = !this.isMenuOpen;
      event.stopPropagation(); // Stop the click event from propagating
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutside(event) {
      if (
        this.$refs.sidenav &&
        !this.$refs.sidenav.contains(event.target) &&
        this.isMenuOpen
      ) {
        this.closeMenu();
      }
    },
  },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

nav {
  background-color: #0b4b03;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
}
  
.logo {
  margin: auto;
}

.logo img {
  width: 60px;
}
  
.menu-toggle {
  display: block;
  position: absolute;
  right: 20px;
  cursor: pointer;
}
  
.sidenav {
  position: fixed;
  top: 0;
  right: -500px;
  width: 40vw;
  height: 100%;
  background-color: #083803;
  transition: right 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
  
.sidenav.open {
  right: 0;
}
  
ul {
  list-style-type: none;
  margin-top: 32px;
  padding: 0;
}
  
li {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  margin-bottom: 12px;
}
  
a {
  text-decoration: none;
  color: white;
  padding: 5px;
}
  
a:hover {
  color: rgb(204, 204, 204);
}
  
.close-button {
  margin-top: 10px;
  cursor: pointer;
  margin-right: 0;
  margin-left: auto;
}
  
.close-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
