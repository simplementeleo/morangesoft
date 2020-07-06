<template>
    <div>
        <div class="mainBorder">
            <v-img v-bind:src="getImg()" class="somosImg" :style="'box-shadow: 1px 1px 20px' + shadow +';z-index: '+zIndex">
            </v-img>
            <div class="border" :style="'border-color:'+borderColor"></div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['borderColor','srcImg','shadow','zIndex'],
    methods: {
        getImg(){
            var images = require.context("../assets/img/", false);
            return images("./" + this.srcImg);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../scss/Somos';
</style>