<style>

</style>
<template>
    <div>
        <div class="catorage-selector" @click.self="selector = !selector">
            <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
            >
                <div v-if="selector">

                    <p>全部分类</p>
                    <p>要产品</p>
                    <p>要渠道</p>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        name:'service',
        data(){
            return{
                selector:false

            }
        }
    }
</script>
