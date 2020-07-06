<template>
    <div>
        <div class="box" 
        :style="'width:'+width+
        ';height:'+height+
        ';background: '+color+
        ';top: '+top+
        ';bottom: '+bottom+
        ';left: '+left+
        ';right: '+right+
        ';z-index:'+zIndex+
        ';box-shadow: 1px 1px 15px '+shadow"></div>
    </div>
</template>
<script>
export default {
    props: ['width','height','color','top','bottom','left','right','zIndex','shadow']
}
</script>
<style lang="scss" scoped>
    .box {
        position: absolute;
    }
</style>
