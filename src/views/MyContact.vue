<template>
  <v-container class="mt-15">
    <v-row>
      <v-col cols="12">
        <div class="contact-bg">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="12" sm="12" md="7">
                  <h1 class="white--text">Let's work together on<br/>your next project</h1>
                  <p class="grey--text">Feel free to call or message me in my facebook page and reply to you as soon as possible.</p>
                </v-col>
                <v-col cols="12" sm="12" md="5">
                    <a class="a-link" target="_blank"  href="https://www.facebook.com/dondex.chavez.52"><v-btn tile color="#01579B" dark class="mt-16">Contact</v-btn></a>
                    <v-spacer></v-spacer>
                    <v-btn tile color="black" outlined dark class="mt-5 white--text">Download CV</v-btn>
                </v-col>
              </v-row>
            </div>
        </div>
        <v-toolbar class="topTolbar" color="#111111" dark flat>
          <div class="contact-style">
            <a class="a-link" target="_blank" href="https://www.facebook.com/dondex.chavez.52"><v-btn><v-icon class="text--white" small>fa-brands fa-facebook-f</v-icon></v-btn></a>
            <a class="a-link" target="_blank" href="https://www.linkedin.com/in/dexter-john-chavez-a19bb5232/"><v-btn><v-icon class="text--white" small>fa-brands fa-linkedin-in</v-icon></v-btn></a>
            <a class="a-link" target="_blank" href="https://github.com/dondex"><v-btn><v-icon class="text--white" small>fa-brands fa-github</v-icon></v-btn></a>
          </div>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
    
}
</script>

<style scoped>
  .contact-style{
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
  }
  .contact-bg {
    width: 100%;
    height: 400px;
    background-image: url('../assets/contact-img.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
    padding: 2rem 2rem;
  }
  .a-link{
    text-decoration: none;
  }
</style>
