<template>
    <SectionTitleComponent title="WhatsApp"/>
    <MobileNumberComponent contact="Giuseppe" number="3470077578" />
    <MobileNumberComponent contact="Mei" number="3458276427" />
    <SectionTitleComponent title="Instagram"/>
    <InstagramContactComponent contact="@lemilleeunapolli_"/>
</template>

<script>
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
import MobileNumberComponent from '../components/MobileNumberComponent.vue'
import InstagramContactComponent from '../components/InstagramContactComponent.vue'

export default {
  name: 'ContactsView',
  components: {
    SectionTitleComponent,
    MobileNumberComponent,
    InstagramContactComponent
  }
}
</script>