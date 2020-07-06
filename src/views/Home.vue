<template>
  <div>

    <HomeTitle id="h" />
    <HomeImg />
    <Somos id="q" />
    <Services id="s" />
    <Products id="p" />
    <Footer />

  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeTitle from '@/components/HomeTitle.vue'
  import HomeImg from '@/components/HomeImg.vue'
  import Somos from '@/components/Somos.vue'
  import Services from '@/components/Services.vue'
  import Products from '@/components/Products.vue'
  import Footer from '@/components/Footer.vue'


  export default {
    name: 'Home',
    components: {
      HomeTitle,
      HomeImg,
      Somos,
      Services,
      Products,
      Footer
    }
  }
</script>