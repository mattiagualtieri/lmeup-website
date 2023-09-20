<template>
    <div>
        <SectionTitleComponent title="Who we are"/>
        <div class="images">
            <div class="image-container"><img src="../assets/about2.jpg"></div>
            <div class="image-container"><img src="../assets/about1.jpg"></div>
        </div>
    </div>
</template>

<script>
import SectionTitleComponent from '../components/SectionTitleComponent.vue'

export default {
    name: 'AboutView',
    components: {
      SectionTitleComponent
    },
    mounted() {
      const elements = document.querySelectorAll(".fadable");
  
      function fadeInElements() {
          elements.forEach(element => {
              if (isElementInViewport(element)) {
                  element.classList.add("fade-in");
              }
          });
      }
  
      function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  
      // Initial check in case some elements are already in the viewport when the page loads
      fadeInElements();
  
      // Add event listener to check for elements when scrolling
      window.addEventListener("scroll", fadeInElements);
    }
  }
  </script>

<style>

.images {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container {
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: auto;
}

img {
    border-radius: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 85%;
    height: auto;
}

</style>