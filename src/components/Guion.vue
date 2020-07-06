<template>
    <div>
        <div class="guionSeparador" :style="'background:' + color +';box-shadow: 1px 1px 10px '+ shadow "></div>
    </div>
</template>
<style lang="scss" scoped>
    div .guionSeparador {
        width: 40px;
        height: 4px;
        border-radius: 5px;
    }
</style>
<script>
export default {
    props: ['color','shadow']
}
</script>

