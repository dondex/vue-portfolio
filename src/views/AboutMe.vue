<template>
 <v-container>
  <v-row>
    <v-col cols="12">
      <h1  class="white--text text-center mt-15 text-uppercase">About Me</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" class="padd">
      <div class="first" id="project">
        <v-row>
          <v-col cols="12">
            <div class="child bgColor1">
              <v-icon color="#03A9F4" x-large class="ml-3">
                palette
              </v-icon>
              <h3 class="white--text ml-3 mt-4">Ui Design</h3>
              <p class="grey--text ml-3 mt-6">Use to build interfaces in software or computerized<br/> devices, focusing on looks or style. Designers aim<br/> to create interfaces which users find easy to use and<br/> pleasurable.</p>
              <v-btn color="#03A9F4" dark text>know more
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </div>
            <div class="child bgColor2">
              <v-icon x-large class="ml-3" dark>shopping_bag</v-icon>
              <h3 class="white--text ml-3 mt-4">Product Design</h3>
              <p class="white--text ml-3 mt-6">The process of imagining, creating, and<br/> iterating products that solve users’  problems<br/> or address specific needs in a given market.</p>
              <v-btn dark text>
                know more
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </div>
            <div class="child bgColor1">
              <v-icon color="#03A9F4" x-large class="ml-3">
                people
              </v-icon>
              <h3 class="white--text ml-3 mt-4">Website Cloning</h3>
              <p class="grey--text ml-3 mt-6">process of creating a replica of your existing website<br/> design or content to create a new website with ease.<br/>lets developers and designers createblueprints, test<br/> compatibility</p>
              <v-btn color="#03A9F4" dark text>know more
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </div>
          <div class="mt-5">
            <div class="child bgColor2">
              <v-icon x-large dark class="ml-3">
                developer_mode
              </v-icon>
              <h3 class="white--text ml-3 mt-4">Web Development</h3>
              <p class="white--text ml-3 mt-6">tasks associated with creating, building,<br/> and maintaining websites and web applications<br/> that run online on a browser.</p>
              <v-btn  dark text>know more
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </div>
            <div class="child bgColor1">
              <v-icon color="#03A9F4" x-large class="ml-3" dark>groups</v-icon>
              <h3 class="white--text ml-3 mt-4">Team Collaboration</h3>
              <p class="grey--text ml-3 mt-6">Team collaboration occurs when team members<br/> work together to achieve the same business goals.</p>
              <v-btn color="#03A9F4" dark text>
                know more
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </div>
            <div class="child bgColor2">
              <v-icon dark x-large class="ml-3">
                moving
              </v-icon>
              <h3 class="white--text ml-3 mt-4">Search Engine Optimization</h3>
              <p class="white--text ml-3 mt-6">he process of maximizing the number of visitors<br/> to a particular website by ensuring that the site<br/> appears high on the list of results returned by<br/> a search engine.</p>
              <v-btn dark text>know more
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </div>
          </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
 </v-container>
</template>

<script>
export default {
  
}
</script>

<style>
  .topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #01579B;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>

