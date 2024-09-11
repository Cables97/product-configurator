<script setup>
    import * as THREE from 'three';
    import { ref } from 'vue'

    import CandleModelWide from './CandleModelWide.vue';
    import CandleModelSmall from './CandleModelSmall.vue';
    import CandleModelTall from './CandleModelTall.vue';

    import { userSettingsStore, menuSettingsStore } from '@/stores/store'; 
    import { TresCanvas } from '@tresjs/core'
    import { MeshWobbleMaterial, OrbitControls, Environment  } from '@tresjs/cientos'

    const userSettings = userSettingsStore().userStore
    const menuSettings = menuSettingsStore()
    const candleType = userSettings.candles.id;
    const wickStyle = userSettings.wicks.id;
    const scentType  = userSettings.scents.id;
    const containerType = userSettings.containers.id;
    const waxColor = userSettings.waxes.color;


    


</script>

<template>
    <div class="display-box-wrapper">
        <TresCanvas >
            <TresPerspectiveCamera />
            <OrbitControls :target="[0,1,0]" :enableZoom="false" :enablePan="false"/>

            <Suspense>
                <Environment preset="city" />
            </Suspense>
                
            <Suspense>
                <CandleModelSmall />
            </Suspense>

            <Suspense>
                <CandleModelWide/>
            </Suspense>

            <Suspense>
                <CandleModelTall />
            </Suspense>



            <TresAmbientLight :intensity="1.5" />


            
        </TresCanvas>
    </div>
</template>



<style lang="scss">

    .display-box-wrapper{
        height:100%;
        width:100%;
    }

</style>