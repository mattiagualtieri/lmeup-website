<template>
    <div>
        <SectionTitleComponent title="Who we are"/>
        <div class="images">
            <div class="image-container"><img src="../assets/about2.jpg" class="fadable"></div>
            <div class="image-container"><img src="../assets/about1.jpg" class="fadable"></div>
        </div>
        <SectionTitleComponent title="Why we do that"/>
        <div class="images">
            <div class="text-container fadable">
                <p>
                    Il nostro scopo principale è stato, sin dal primo evento organizzato nell'estate 2020, quello di far divertire le persone.
                    <br>
                    Tutto l'anno, lavoriamo al meglio insieme all'aiuto della Polisportiva Cognentese e a tutta la comunità di Cognento, per poter far vivere a chi partecipa alle nostre iniziative un'esperienza unica.
                </p>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'AboutView',
    components: {
      SectionTitleComponent,
      FooterComponent
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

.text-container {
    text-align: left;
    padding-left: 32px;
    padding-right: 32px;
}

p {
    font-size: 24px;
}

@media (max-width: 850px) {
    .images {
        display: block;
    }

    .image-container {
        width: 100%;
        margin-bottom: 48px;
    }
}

</style>