<template>
    <div>
        <v-container class="container">
            <SectionTitle section="¿Quienes somos?" data-aos="fade-up-right" />
            <v-row align="center" justify="center">
                <v-col sm="12">
                    <ImageBorder data-aos="fade-up-right" zIndex="1" srcImg="somos.png" borderColor="rgba(33, 18, 139, 0.71)" shadow="#4b49aaa8"
                        class="mt-8">
                        <CircleGuion width="150px" height="150px" borderColor="#4b49aa87" top="-30%" right="-15%"
                            z-index="0" />
                        <CircleGuion width="50vh" height="50vh" borderColor="#ff00005c" left="-15%" top="50%"
                            z-index="0" />
                    </ImageBorder>
                </v-col>
                <v-col sm="6">
                    <div class="d-flex flex-column justify-center">
                        <Descripcion class="text-center" data-aos="fade-up-left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officiis quos vero neque
                            quas. Consequatur voluptatibus ut consectetur harum fugiat earum. Rerum non, quo porro animi
                            dolore minus? Nostrum, ducimus.
                        </Descripcion>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    import SectionTitle from '@/components/SectionTitle'
    import Guion from '@/components/Guion'
    import ImageBorder from '@/components/ImageBorder'
    import CircleGuion from '@/components/CircleGuion'
    import Descripcion from '@/components/Descripcion'
    export default {
        components: {
            SectionTitle,
            Guion,
            ImageBorder,
            CircleGuion,
            Descripcion
        }
    }
</script>