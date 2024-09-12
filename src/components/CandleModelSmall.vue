<template>
    <primitive :object="scene" :scale="10" v-if="(userSettings.candles.id) == 'small'"/>
  </template>
  
  
  <script setup>

import { ref, computed, watch } from 'vue'
import { useLoader } from '@tresjs/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { userSettingsStore, menuSettingsStore, materialsStore } from '@/stores/store'; 
import { useTexture } from '@tresjs/core'

    const userSettings = userSettingsStore().userStore
    const menuSettings = menuSettingsStore()
    const materialStore = materialsStore()

    let candlePath = "./src/models/Candle_small.gltf"
    const { scene } = await useLoader(GLTFLoader, candlePath)

    const apple = await useTexture({ map: "/images/labels/apple.png", color: "black"})
    const maple = await useTexture({ map: "/images/labels/maple.png", })
    const pumpkin = await useTexture({ map: "/images/labels/pumpkin.png", })
    const pine = await useTexture({ map: "/images/labels/pine.png", })
    const cookie = await useTexture({ map: "/images/labels/cookie.png", })

    const woodTexture = await useTexture({ map: "/images/labels/texWood.jpg" })



    apple.map.flipY = false;
    maple.map.flipY = false;
    pumpkin.map.flipY = false;
    pine.map.flipY = false;
    cookie.map.flipY = false;
    scene.getObjectByName("wrap").material = materialStore.matLabel
    scene.getObjectByName("wrap").material.map = apple.map

    watch(userSettings, () =>{
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
        case "wood":
          scene.getObjectByName("container").material = materialStore.matWood
          scene.getObjectByName("container").material.map = woodTexture.map
        break;

        default:
          null
        break;

      }
      //console.log(scene.getObjectByName("wrap"))
      console.log(userSettings.scents.id)
      //scentStyle - Label
      switch(userSettings.scents.id){
        case "apple":
          scene.getObjectByName("wrap").material.map = apple.map
        break;
        case "maple":
          scene.getObjectByName("wrap").material.map = maple.map
        break;
        case "pumpkin":
          scene.getObjectByName("wrap").material.map = pumpkin.map
        break;
        case "pine":
          scene.getObjectByName("wrap").material.map = pine.map
        break;
        case "cookie":
          scene.getObjectByName("wrap").material.map = cookie.map
        break;
        default:
          null
        break;
      }
    });



    const isVisible = computed(() => {
    return ((userSettings.candles.id) == "small") ? true : false
    })



  
  
  
  
</script>