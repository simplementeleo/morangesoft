<template>
    <div class="mt-7">
        <SectionTitle class="mt-5 mb-2" section="Servicios" data-aos="zoom-in-down"/>
        <v-container class="container">

            <v-row justify="center" align="center">
                <v-col md="6" sm="12">
                    <ImageBorder data-aos="zoom-in-up" zIndex="1" srcImg="servicio-1.png" borderColor="rgba(55, 65, 216, 0.76)"
                        shadow="#4b49aa87" class="mt-8">
                        <CircleGuion width="50vh" height="50vh" borderColor="rgba(255, 68, 226, 0.14)" top="-40%"
                            right="-150%" z-index="0" />
                        <CircleGuion width="150px" height="150px" borderColor="#4b49aa87" top="40%" left="-15%"
                            z-index="0" />
                        <Box width="60%" height="70%" color="rgba(213, 214, 232, 0.34)" top="40%" left="-7%" zIndex="0"
                            shadow="rgba(213, 214, 232, 1)" />
                    </ImageBorder>
                </v-col>
                <v-col sm="6">
                    <Descripcion>
                       

                        <vue-typed-js :strings="['Web', 'Móviles', 'de Escritorio', 'Personalizadas']" :loop="true" :fadeOut="true">
                            
                            <h1 data-aos="zoom-in">Desarrollo de aplicaciones <br> <span class="typing"></span></h1>
                        </vue-typed-js>
                        <Guion color="#3f51cd" shadow="#3f52cda4" class="my-6" />
                        <p data-aos="fade-up-left">Páginas web de alto impacto, priorizando la usabilidad y experiencia del usuario. Adaptables a
                        cualquier dispositivo.</p>
                    </Descripcion>
                </v-col>
            </v-row>

            <v-row justify="center" align="center" class="mt-12">
                <v-col sm="6">
                    <Descripcion>
                        <h1 data-aos="zoom-in">Marketing Digital</h1>
                        <Guion data-aos="fade" color="rgba(63, 237, 255, 1)" shadow="rgba(63, 237, 255, 0.76)" class="my-6" />
                        <p data-aos="fade-down-right">
                            Hacer realidad tus ideas, desde lo más simple a lo más complejo. Desarrollo software a medida.
                        Sistemas web y aplicaciones móviles totalmente escalables para empresas y startups desde cero.
                        </p>
                    </Descripcion>
                </v-col>
                <v-col md="6" sm="12">
                    <ImageBorder data-aos="flip-up" data-aos-delay="500" zIndex="1" srcImg="servicio-2.png" borderColor="rgba(63, 237, 255, 0.76)"
                        shadow="#4b49aa87" class="mt-10">
                        <CircleGuion width="15vh" height="15vh" borderColor="rgba(117, 232, 113, 0.41)" top="20%"
                            left="-140%" z-index="0" />
                        <CircleGuion width="30vh" height="30vh" borderColor="#4b49aa87" top="60%" right="0%"
                            z-index="0" />
                        <Box width="60%" height="70%" color="rgba(213, 214, 232, 0.34)" top="40%" left="-7%" zIndex="0"
                            shadow="rgba(213, 214, 232, 1)" />
                    </ImageBorder>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script>
    import SectionTitle from '@/components/SectionTitle';
    import ImageBorder from '@/components/ImageBorder';
    import CircleGuion from '@/components/CircleGuion';
    import Box from '@/components/Box';
    import Descripcion from '@/components/Descripcion';
    import Guion from '@/components/Guion'
    export default {
        components: {
            SectionTitle,
            ImageBorder,
            CircleGuion,
            Box,
            Descripcion,
            Guion
        }
    }
</script>