<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

@font-face {
  font-family: 'Big John';
  src: url('~@/assets/fonts/BIG JOHN.otf');
}

@font-face {
  font-family: 'Slim Joe';
  src: url('~@/assets/fonts/Slim Joe.otf');
}

</style>
