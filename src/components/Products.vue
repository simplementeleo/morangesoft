<template>
    <div>
        <SectionTitle class="mt-12" section="Productos" data-aos="fade" />
        <v-container class="container">
            <v-row justify="center" align="center">
                <v-col md="6" sm="12">
                    <ImageBorder data-aos="fade-up-left" zIndex="1" srcImg="producto-1.png" borderColor="rgba(55, 65, 216, 0.76)"
                        shadow="#4b49aa87" class="mt-8">
                        <CircleGuion width="60vh" height="60vh" borderColor="rgba(255, 68, 226, 0.14)" top="20%"
                            left="-50%" z-index="0" />
                        <CircleGuion width="150px" height="150px" borderColor="#4b49aa87" top="70%" right="-150%"
                            z-index="0" />
                    </ImageBorder>
                </v-col>
                <v-col sm="6">
                    <Descripcion>
                        <h1 data-aos="slide-right">Saco mi cita</h1>
                        <Guion color="#3f51cd" shadow="#3f52cda4" class="my-6" />
                        <p data-aos="fade-down-right"> Servicio de telemedicina para clínicas y pacientes en general. Interconectamos médicos,
                            clínicas y pacientes de diferentes partes del mundo.</p>
                        <v-btn href="https://www.sacomicita.com" target="_blank" data-aos="fade-up-left" class="mt-5" outlined color="#3f51cd" large>
                            Más información
                        </v-btn>
                    </Descripcion>

                </v-col>
            </v-row>

            <v-row justify="center" align="center" class="mt-12">
                <v-col sm="6">
                    <Descripcion>
                        <h1 data-aos="slide-right">Paga tu compra</h1>
                        <Guion color="rgba(228, 10, 163, 0.95)" shadow="#3f52cda4" class="my-6" />
                        <p data-aos="fade">Es una iniciativa que brinda herramientas publicitarias a pequeñas y medianas empresas que de otra manera no podrian acceder a estos servicios. Interconectamos negocios con clientes de diferentes partes del mundo.</p>
                        <v-btn href="https://www.pagatucompra.com" target="_blank" data-aos="fade-down-left" class="mt-5" outlined color="rgba(228, 10, 163, 0.95)" large>
                            Más información
                        </v-btn>
                    </Descripcion>
                </v-col>
                <v-col md="6" sm="12">
                    <ImageBorder data-aos="fade-down-right" zIndex="1" srcImg="producto-2.png" borderColor="rgba(77, 62, 9, 0.95)"
                        shadow="#4b49aa87" class="mt-8">
                        <CircleGuion width="40vh" height="40vh" borderColor="rgba(255, 217, 68, 0.24)" top="20%"
                            right="-70%" z-index="0" />

                    </ImageBorder>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>
<script>
    import SectionTitle from '@/components/SectionTitle'
    import ImageBorder from '@/components/ImageBorder'
    import CircleGuion from '@/components/CircleGuion'
    import Descripcion from '@/components/Descripcion'
    import Guion from '@/components/Guion'
    export default {
        components: {
            SectionTitle,
            ImageBorder,
            CircleGuion,
            Descripcion,
            Guion
        }
    }
</script>