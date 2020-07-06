<template>
    <div>
        <v-container>
            <div class="HomeTitle mt-10">
                <v-row align="center"> 
                    <v-col md="6" sm="12">
                        <h1 data-aos="flip-up" class="py-10">MorangeSoft</h1>
                        <p data-aos="flip-down">¿Tienes alguna idea en mente y puedes imaginar lo increíble que sería? Nosotros lo podemos crear.</p>
                        <v-btn data-aos="fade-up-left" class="btnGo px-14 mt-6" outlined shaped dense x-large>
                            vamos!
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<style lang="scss">
    .HomeTitle {
        z-index: 1;
        position: absolute;
        
        h1 {
            font-size: 5em;
            color: #3f51cd;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        p{
            font-size: 2em;
            color: grey;
        }
        .btnGo {
            border-radius: 100px;
            border: 2px solid #3f51cd;
            background: transparent;
            color: #3f51cd !important;
        }
    }
</style>