<template>
    <div>
        <SectionTitleComponent title="Dov'è LMEUP?" class="fadable"/>
        <div class="images">
            <div class="text-container fadable">
                <p>
                    Gli eventi LMEUP sono organizzati presso la Polisportiva Cognentese, in Via Tonini 5.
                </p>
            </div>
        </div>
        <SectionTitleComponent title="Quando sono i prossimi eventi?" class="fadable"/>
        <div class="images">
            <div class="text-container fadable">
                <p>
                    Puoi trovare maggiori informazioni sulla home del nostro sito. Oppure resta aggiornato seguendoci su Instagram.
                </p>
            </div>
        </div>
        <SectionTitleComponent title="Qui Nico mi servono altre domande" class="fadable"/>
        <div class="images">
            <div class="text-container fadable">
                <p>
                    Altre rispose
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
    name: 'QuestionsView',
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

.text-container {
    text-align: left;
    padding-left: 32px;
    padding-right: 32px;
}

p {
    font-size: 20px;
}

@media (max-width: 850px) {
    .images {
        display: block;
    }
}

</style>