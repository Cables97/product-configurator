<template>
  <primitive :object="scene" :scale="10" :visible="isVisible"/>
</template>


<script setup>

import { ref, computed, watch } from 'vue'
import * as THREE from 'three';
import { useLoader } from '@tresjs/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { userSettingsStore, menuSettingsStore, materialsStore } from '@/stores/store'; 
import { TextureLoader } from 'three'
import { useTexture } from '@tresjs/core'


const userSettings = userSettingsStore().userStore
const menuSettings = menuSettingsStore()
const materialStore = materialsStore()




let candlePath = "./src/models/Candle_wide.gltf"
const { scene } = await useLoader(GLTFLoader, candlePath)

const pbrTexture = await useTexture({
  map: "https://raw.githubusercontent.com/Cables97/product-configurator/main/src/models/textures/apple.png",
})
scene.getObjectByName('wrap').material = materialStore.matLabel

watch(userSettings, () =>{
  console.log("watch " + userSettings.waxes.color)

  //wickStyle
  switch(userSettings.wicks.id){
    case "single":
      scene.getObjectByName("singleWick").visible = true
      scene.getObjectByName("tripleWick").visible = false
      scene.getObjectByName("woodWick").visible = false
    break;
    case "triple":
      scene.getObjectByName("singleWick").visible = false
      scene.getObjectByName("tripleWick").visible = true
      scene.getObjectByName("woodWick").visible = false
    break;

    case "wood":
      scene.getObjectByName("singleWick").visible = false
      scene.getObjectByName("tripleWick").visible = false
      scene.getObjectByName("woodWick").visible = true
    break;

    default:
      null
    break;
    }

  //waxColor
  scene.getObjectByName("wax").material = materialStore.matWax
  scene.getObjectByName("wax").material.color.set(userSettings.waxes.color) 

  //containerStyle
  switch(userSettings.containers.id){
    case "glass":
      scene.getObjectByName("container").material = materialStore.matGlass
    break;

    case "metal":
      scene.getObjectByName("container").material = materialStore.matMetal
    break;

    default:
      null
    break;

  }

  //scentStyle - Label

  scene.getObjectByName('wrap').material.map = pbrTexture.map
  // console.log(userSettings.scents.id , labelStore[userSettings.scents.id])
  // console.log(scene.getObjectByName('wrap').material)


});
//const apple = await useLoader(TextureLoader, '.src/models/textures/apple.png',)


const isVisible = computed(() => {
  return ((userSettings.candles.id) == "wide") ? true : false
})


//default Settings
userSettings.candles = { id:"wide", name:"Wide Candle", icon:".img", cost: 20,  }
userSettings.wicks = { id: "single", name: "Single", icon: ".img", cost: 0 },
userSettings.scents = { id:"apple", name:"Apple Orchard Bloom", icon:".img", cost:0 },
userSettings.containers = { id:"glass", name:"Glass Container", icon:".img",  cost:0  },
userSettings.waxes = { id:"white",  name:"White",  cost:0, color: "#FFFFFF"   }





</script>