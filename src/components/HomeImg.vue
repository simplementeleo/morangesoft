<template>
    <div>
        <div class="HomeImg">
            <img class="imgHome" src="../assets/img/bg.jpg" />
            <div style="height: 150px; overflow: hidden;  display: inline-block;width:100%;"><svg viewBox="0 0 500 150"
                    preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M-0.28,71.33 C174.66,-53.00 338.31,241.08 501.97,64.43 L500.00,0.00 L0.00,0.00 Z"
                        style="stroke: none; fill: #4536e7;"></path>
                </svg></div>
        </div>
    </div>
</template>

<style lang="scss">
    .HomeImg {
        display: flex;
        flex-direction: column;
    }

    img.imgHome {
        z-index: 0;
        margin: 0;
        object-fit: cover;
    }
</style>