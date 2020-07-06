<template>
    <div>
        <div class="circle" 
        :style="'width:'+width+
        ';height:'+height+
        ';border-color: '+borderColor+
        ';top: '+top+
        ';bottom: '+bottom+
        ';left: '+left+
        ';right: '+right+
        ';z-index:'+zIndex"></div>
    </div>
</template>
<script>
export default {
    props: ['width','height','borderColor','top','bottom','left','right','zIndex']
}
</script>
<style lang="scss" scoped>
    .circle {
        border-radius: 50%;
        border: 3px dashed;
        position: absolute;
    }
</style>
