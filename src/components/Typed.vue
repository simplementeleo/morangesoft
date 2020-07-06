<template>
    <div>
       
    </div>
</template>
<script>
Vue.use(VueTypedJs)
    export default {
        props: ['strings','element'],
        methods: {
            typed() {
                var options = {
                    strings: this.strings,
                    typeSpeed: 50,
                    loop: true
                };

                var typed = new Typed(this.element, options);
            }
        }
    }
</script>