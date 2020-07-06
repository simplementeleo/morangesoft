<template>

    <div>

        <v-app-bar app color="white" dark hide-on-scroll elevate-on-scroll  class="black--text">
            
            <v-toolbar-title>MorangeSoft</v-toolbar-title>

            <v-spacer></v-spacer>
            <!-- v-for="item in items" :key="item.link" :to="{name: `${item.name}`}" -->
            <v-btn class="hidden-nav" v-for="item in items" :key="item.link" shaped :href="item.url" :color="item.name == 'Productos' ? '#3f51cd': 'transparent'" :class="item.name == 'Productos' ? 'item': 'item-nav'" elevation="''">
                {{item.name}}
            </v-btn>
            <v-app-bar-nav-icon color="black" class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>

            
        </v-app-bar>

        <!--  -->
        <v-navigation-drawer color="#14315e" :floating="true" right v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group active-class="deep-purple--text text--accent-4">
                   

                    <v-list-item  v-for="item in items" :key="item.link">
                        <v-list-item-title class="white--text text-center">{{ item.name }}</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>


<script>
    export default {
        data: () => ({
            drawer: false,
            items: [{
                    link: '/',
                    name: 'Inicio',
                    url: '#h'
                },
                {
                    link: '/f',
                    name: '¿Quienes somos?',
                    url: '#q'
                },
                {
                    link: '/serv',
                    name: 'Servicios',
                    url: '#s'
                },
                {
                    link: '/fa',
                    name: 'Productos',
                    url: '#p'
                },
                {
                    link: '/ffa',
                    name: 'Contáctanos'
                }
            ]
        }),
    }
</script>

<style lang="scss" scoped>
    .item-nav {
        color: #3f51cd !important;
    }
    .item {
        color: white !important;
        border-radius: 100px;
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 959px){
        .hidden-nav{
            display: none;
        }
    }
</style>