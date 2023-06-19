<template>
    <nav>
      <div class="logo">
        <img src="../assets/logo.png" alt="Home" />
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <font-awesome-icon icon="fa-solid fa-bars" size="lg" style="color: #ffffff;" />


      </div>
      <div class="sidenav" :class="{ open: isMenuOpen }" ref="sidenav">
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
            <router-link to="/about" @click="closeMenu">About</router-link>
          </li>
        </ul>
        <button class="close-button" @click="closeMenu">Close</button>
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
  nav {
    background-color: #0b4b03;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .logo {
    margin-right: 20px;
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
    right: -300px;
    width: 250px;
    height: 100%;
    background-color: #083803;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  
  .sidenav.open {
    right: 0; /* Adjust the value as needed */
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    padding: 5px;
  }
  
  a:hover {
    background-color: #f2f2f2;
    color: #333;
  }
  
  .close-button {
    background-color: #f2f2f2;
    color: #333;
    border: none;
    padding: 5px 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #333;
    color: #fff;
  }
  
  @media (max-width: 768px) {
   
    .logo {
    margin-right: 10px;
  }

  .menu-toggle {
    display: block;
  }

  .sidenav {
    padding: 10px;
  }
}
</style>
