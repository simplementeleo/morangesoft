<template>
    <div>
        <div class="d-flex flex-column align-center">
            <h1 class="">{{ section }}</h1>
            <Guion color="#3f51cd" shadow="#3f52cda4" class="mt-6"/>
        </div>
    </div>
</template>
<script>
import Guion from '@/components/Guion'
export default {
    props: ['section'],
    components: {
        Guion
    }
}
</script>
<style lang="scss" scoped>
    h1 {
        color: #3f51cd;
    }
</style>