import { createApp } from 'vue'
import App from './App.vue'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faBars, faXmark, faInstagram)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
