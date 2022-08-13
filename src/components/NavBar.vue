<template>
    <nav>
        <v-toolbar flat app class="">
            <v-icon class="black--text mr-3" @click="drawer = !drawer">menu</v-icon>
            <v-toolbar-title class="text-uppercase black--text">
                <span class="font-weight-light light-blue--text">Port</span>
                <span>Folio</span>
            </v-toolbar-title>
            
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="" color="#181818">
            <v-layout column align-center>
                <v-flex class="mt-15">
                    <v-avatar size="100">
                        <img src="../assets/Cv-pic.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-2 webdev">
                        Web Developer
                    </p>
                </v-flex>
            </v-layout>
            <v-list class="">
                <v-list-item class="my-2" v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text pr-10">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home', route: '/'},
                { icon: 'person', text: 'About Me', route: '/about'},
                { icon: 'devices', text: 'Skills', route: '/skills'},
                { icon: 'folder', text: 'Portfolio', route: '/portfolio'},
                { icon: 'phone', text: 'Contact', route: '/contact'},
            ]
            
        }
    }
}
</script>

<style>
    .webdev {
        border-bottom: 1px solid #fff;
    }
</style>