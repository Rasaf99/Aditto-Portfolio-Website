<template>

<!--  🌙 ☀️ The above codes are related to Dark & Light Mode -->
<div :class="{dark:toggle} ">

  <div class="bg-s-t1a1 text-l1-a1 font-mono bg-cover  bg-fixed bg-center " style="background-image:url('https://raw.githubusercontent.com/Rasafff/Aditto-Portfolio-Website/main/assets/image/background.jpg')">

<!-- End: 🌙 ☀️  -->



<!-- ⤵️ ⤵️ The following codes are related to Footer (To keep the footer at the bottom) -->


<div class="flex flex-col min-h-screen "> <!-- Wraper (Everything but dark,light mode <div> ) --->
  
    <div> <!-- Wraper (Everything but footer & dark,light mode <div>)  -->

    
<!-- End: ⤴️ ⤴️   -->






      

       


        <div >

            <ThemeSwitcher   @switch='themeSwitch()'/>

        </div>

   




    <Nuxt/>
     
 



     

<!-- ⤵️ ⤵️  The following codes are related to footer -->

    </div> <!-- End: Wraper (Everything but footer & dark,light mode) -->

    <!-- Footer -->
    <footer class="mt-auto">

      <Footer />

    </footer>

  </div> <!-- End: Wraper (Everything but dark,light mode) -->
 
<!-- End: ⤴️ ⤴️ -->



<!--  🌙 ☀️ The following codes are related to Dark & Light Mode -->
  </div>

</div> 

<!-- End: 🌙 ☀️  -->


</template>


<script>


import ThemeSwitcher from '../components/ThemeSwitcher.vue'
import Footer from '../components/Footer.vue'

// // AOS
// import aosMixin from '~/mixins/aos'

  export default {
  components: {ThemeSwitcher, Footer },

// // AOS
//   name: 'PageIndex',
//   mixins: [aosMixin],
 

 data() {
    return {
      toggle:true

    
    }
  },


  methods: {
      themeSwitch() {
          this.toggle = !this.toggle
        
      }
  }



  

  }




</script>


