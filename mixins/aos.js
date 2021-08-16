import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({

        delay:200,
        duration:1200,
        once:true


     })
  }
}