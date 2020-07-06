<template>
    <div>
         <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-131.78,-55.97 C231.66,196.67 256.49,177.92 574.21,-16.48 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #0e225e;"></path></svg></div>
        <footer class="">
           
            <v-container>
                <v-row>
                    <v-col md="4" sm="12">
                        <h2 class="py-5 white--text">MorangeSoft</h2>
                        <p class="white--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
                            velit.</p>
                    </v-col>
                    <v-col md="4" sm="12">
                        <h2 class="py-5 white--text">Productos</h2>
                        <v-btn v-for="product in products" :key="product.url" :href="product.url" rounded shaped target="_blank" class="ma-2" outlined :color="product.color">
                            <v-icon left>{{product.icon}}</v-icon> {{product.name}}
                        </v-btn>
                    </v-col>
                    <v-col md="4" sm="12">
                        <h2 class="py-5 white--text">Contáctanos</h2>
                        <p class="white--text py-2" v-for="contact in contacts" :key="contact.content">
                            <v-icon color="white">{{contact.icon}}</v-icon> 
                            {{contact.content}}
                        </p>
                        <h4 class="py-5 white--text">Síguenos en</h4>
                        <v-btn v-for="social in socials" :href="social.url" class="mx-1" :key="social.icon" fab x-small>
                            <v-icon :color="social.color">{{social.icon}}</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-card flat tile color="#0e225e" class="mt-5 d-flex justify-center align-items-center">
                <span class="pa-3 grey--text">&copy; MorangeSoft {{date}} - Todos los derechos reservados</span>
            </v-card>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
    footer {
        // position: absolute;
        width: 100%;
        bottom: 0;
        background: #0e225e;

        a {
            text-decoration: none;
        }
    }
</style>
<script>
export default {
    data(){
        return {
            products: [
                {url: 'https://www.sacomicita.com', name: 'SacoMiCita', icon: 'mdi-hospital', color: 'blue'},
                {url: 'https://www.pagatucompra.com', name: 'PagaTuCompra', icon: 'mdi-cart-outline', color: 'orange'},
                {url: '#', name: 'Más productos', icon: 'mdi-plus', color: 'white'},
            ],
            contacts: [
                {content: 'correo@correo.com', icon: 'mdi-mail'},
                {content: '+ 00 - 000 - 0000', icon: 'mdi-phone'}
            ],
            socials: [
                {url: '#', color: '#385695', icon: 'mdi-facebook'},
                {url: '#', color: '#00acee', icon: 'mdi-twitter'},
                {url: '#', color: '#ff0000', icon: 'mdi-youtube'},
                {url: '#', color: '#005782', icon: 'mdi-linkedin'},
                {url: '#', color: '#e70f78', icon: 'mdi-instagram'},
            ],
            date:  new Date().getFullYear()
        }
    }
}
</script>