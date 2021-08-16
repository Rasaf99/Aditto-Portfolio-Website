<template>

<!--  🌙 ☀️ The above codes are related to Dark & Light Mode -->
<div :class="{dark:toggle}">

  <div class="bg-s-t1a1 text-l1-a1 font-mono bg-cover  bg-fixed bg-left" style="background-image:url('https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')">

<!-- End: 🌙 ☀️  -->



<!-- ⤵️ ⤵️ The following codes are related to Footer (To keep the footer at the bottom) -->


<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything but dark,light mode <div> ) --->
  
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


  export default {
  components: {ThemeSwitcher, Footer },



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


