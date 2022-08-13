<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" class="mt-13">
        <v-img src="../assets/hero-img1.svg" contain max-height="500" class="my-16 "></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" class="top">
        <div class="bgColor1 px-5 py-10">
            <h3 class="light-blue--text text-darken-4">Hello I'm Dex</h3>
            <h1 class="white--text mt-2">Full Stack Web Developer</h1>
            <p class="grey--text mt-2">A Computer Science Student at Imus Computer College (ICC) <br/> with knowledge developing Frontend by using HTML, CSS, JS,<br/> Bootstrap, Wordpress, VueJs and Backend Development using<br/> Xampp, MySQL, PHP, Laravel. </p>
            <v-btn tile color="#01579B" dark class="mt-2">Hire Me</v-btn>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center d-flex justify-center social-media-icons">
          <a class="a-link" target="_blank" href="https://www.facebook.com/dondex.chavez.52"><v-icon large class="white--text mx-5">fa-brands fa-facebook</v-icon></a>
          <a class="a-link" target="_blank" href=""><v-icon large class="white--text mx-5">fa-brands fa-github</v-icon></a>
          <a class="a-link" target="_blank" href=""><v-icon large class="white--text mx-5">fa-brands fa-linkedin</v-icon></a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {

}
</script>

<style scoped>
  .top {
    margin-top: 200px;
  }
  .social-media-icons{
    cursor: pointer;
  }
  .a-link{
    text-decoration: none;
  }
  
</style>
