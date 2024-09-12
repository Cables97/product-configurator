<script setup>
    import * as THREE from 'three';
    import { ref } from 'vue'

    import CandleModelWide from './CandleModelWide.vue';
    import CandleModelSmall from './CandleModelSmall.vue';
    import CandleModelTall from './CandleModelTall.vue';

    import { userSettingsStore, menuSettingsStore } from '@/stores/store'; 
    import { TresCanvas } from '@tresjs/core'
    import { MeshWobbleMaterial, OrbitControls, Environment, useProgress  } from '@tresjs/cientos'
    import { computed } from 'vue';

    const { hasFinishLoading, progress, items } = await useProgress()
    const userSettings = userSettingsStore().userStore
    const menuSettings = menuSettingsStore()


    menuSettings.isLoading = ref(hasFinishLoading)

    
    
</script>

<template>
    <div class="display-box-wrapper">

        <Transition name="display-box-transition">
            <div v-show="!hasFinishLoading" class="display-box-loading">
                <div>
                    Loading... {{ progress }} %
                </div>
            </div>
        </Transition>

        
        <TresCanvas  @created="onCreated">
            <TresPerspectiveCamera />
            <OrbitControls :target="[0,1,0]" :enablePan="false" :minDistance="2" :maxDistance="4"/>

            <Suspense><Environment preset="city" /></Suspense>
    
            <Suspense> <CandleModelSmall/> </Suspense>
            <Suspense> <CandleModelWide/> </Suspense>
            <Suspense> <CandleModelTall/> </Suspense>

            <TresAmbientLight :intensity="1.5" />

        </TresCanvas>
        

    </div>
</template>



<style lang="scss">
    .display-box-transition-enter-active,
    .display-box-transition-leave-active {
    transition: opacity 0.5s ease;
    }

    .display-box-transition-enter-from,
    .display-box-transition-leave-to {
    opacity: 0;
    }
    .display-box-loading{
        position: absolute;
        bottom:10%;
        left:10%;
        //transform: translate(-50%,-50%);
        height:400px;
        width:400px;
                z-index:99;
        div{
            position: absolute;
            bottom:0%;
            left:0%;
            //transform: translate(-50%,-50%);
            @include text-Inter(24px, 400);
        }
    }


    .display-box-wrapper{
        position: relative;
        height:100%;
        width:100%;
    }

</style>