<template>
  <v-container>
    <v-row class="my-10">
      <v-col cols="12" offset-md="4" id="portfolio">
        <h1 class="white--text text-uppercase">featured projects</h1>
        <p class="grey--text">My latest projects and practices</p>
        <v-btn tile color="#01579B" dark>View All</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" sm="6" md="4" lg="3" >
        <v-card class="pa-2 pb-12 pt-5 card-animate" max-width="400" height="400" outlined tile color="#1E1E1E">
          <v-img contain :src="project.image" />
          <v-card-title class="white--text">{{ project.title }}</v-card-title>
          <v-chip-group class="white--text mb-5" dark>
            <v-chip small v-for="(value, id) in project.category" :key="id">
              {{ value.language }}
            </v-chip>
          </v-chip-group>
          <v-card-actions>
            <a target="_blank" class="link-style" :href="project.link"><v-btn class="" color="#01579B" dark>Source Code<v-icon small right>arrow_right_alt</v-icon></v-btn></a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
   data() {
    return {
      projects: [
        { 
          image: require("../assets/portfolio/vue-portfolio.png"),
          title: 'Vuejs Portfolio',
          link: 'https://github.com/dondex/vue-portfolio',
          category: [
            {
            'id': 1,
            'language': 'HTML',
            },
            {
            'id': 2,
            'language': 'CSS',
            },
            {
            'id': 3,
            'language': 'VueJs',
            },
            {
            'id': 4,
            'language': 'Vuetify',
            },
        ]},
        { 
          image: require("../assets/portfolio/blog-laravel.png"),
          title: 'Laravel Blog',
          link: 'https://github.com/dondex/laravel-portfolio',
          category: [
            {
            'id': 1,
            'language': 'HTML',
            },
            {
            'id': 2,
            'language': 'CSS',
            },
            {
            'id': 3,
            'language': 'Bootstrap',
            },
            {
            'id': 4,
            'language': 'PHP',
            },
            {
            'id': 5,
            'language': 'MySQL',
            },
            {
            'id': 6,
            'language': 'Laravel',
            },
        ]},
        { 
          image: require("../assets/portfolio/wp-icc.png"),
          title: 'ICC Website',
          link: 'http://icceduc.byethost14.com/',
          category: [
            {
            'id': 1,
            'language': 'Wordpress',
            },
            {
            'id': 2,
            'language': 'Elementor',
            },
        ]},
        { 
          image: require("../assets/portfolio/v-shop.png"),
          title: 'VueJs Ecommerce',
          link: 'https://github.com/dondex/vue-ecommerce',
          category: [
            {
            'id': 1,
            'language': 'HTML',
            },
            {
            'id': 2,
            'language': 'CSS',
            },
            {
            'id': 3,
            'language': 'VueJs',
            },
            {
            'id': 4,
            'language': 'Vuetify',
            },
        ]}, 
        { 
          image: require("../assets/portfolio/filter-product.png"),
          title: 'Filter Product',
          link: 'https://dondex.github.io/filter-product/',
          category: [
            {
            'id': 1,
            'language': 'HTML',
            },
            {
            'id': 2,
            'language': 'CSS',
            },
            {
            'id': 3,
            'language': 'Isotope Plugin',
            },
            {
            'id': 4,
            'language': 'Bootstrap',
            },
        ]}, 
        { 
          image: require("../assets/portfolio/real-estate.png"),
          title: 'Real Estate Template',
          link: 'https://dondex.github.io/real-estate-template/',
          category: [
            {
            'id': 1,
            'language': 'HTML',
            },
            {
            'id': 2,
            'language': 'CSS',
            },
            {
            'id': 3,
            'language': 'Bootstrap',
            },
        ]}, 
      ]
    }
   }
}
</script>

<style scoped>
  .chips {
    background: #3cd1c2;
  }
  .card-animate:hover {
    box-shadow: rgba(214, 214, 216, 0.849) 0px 4px 10px, rgba(214, 214, 216, 0.849) 0px 8px 15px, rgba(214, 214, 216, 0.849) 0px 10px 30px;
    transition: all 0.5s ease;
  }
  .link-style {
     text-decoration: none;
  }
</style>
