<template>
    <VideoComponent/>
    <SectionTitleComponent title="Upcoming events"/>
    <ComingSoonComponent/>
    <SectionTitleComponent title="Past events"/>
    <EventComponent title="September LMEUP" date="08/09/2023" location="Modena, Via Tonini 5" banner_path="banner1" />
    <EventComponent title="July LMEUP" date="21/07/2023" location="Modena, Via Tonini 5" banner_path="banner2" />
    <EventComponent title="June LMEUP" date="09/06/2023" location="Modena, Via Tonini 5" banner_path="banner3" />
    <SeeAllButtonComponent/>
    <FooterComponent/>
</template>
  
<script>
import VideoComponent from '../components/VideoComponent.vue'
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
import ComingSoonComponent from '../components/ComingSoonComponent.vue'
import EventComponent from '../components/EventComponent.vue'
import SeeAllButtonComponent from '../components/SeeAllButtonComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    VideoComponent,
    SectionTitleComponent,
    ComingSoonComponent,
    EventComponent,
    SeeAllButtonComponent,
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

.fadable {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fadable.fade-in {
  opacity: 1;
  transform: translateY(0);
}

</style>
