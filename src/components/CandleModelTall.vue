<template>
    <primitive :object="scene" :scale="10" :position="[0, -0.5, 0]" :visible="isVisible"/>
  </template>
  
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { useLoader } from '@tresjs/core'
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
  import { userSettingsStore, menuSettingsStore, materialsStore } from '@/stores/store'; 

  const userSettings = userSettingsStore().userStore
  const menuSettings = menuSettingsStore()
  const materialStore = materialsStore()

  let candlePath = "./src/models/Candle_tall.gltf"
  const { scene } = await useLoader(GLTFLoader, candlePath)

    const apple = await useTexture({ map: "https://raw.githubusercontent.com/Cables97/product-configurator/main/src/models/textures/apple.png", })
    const maple = await useTexture({ map: "https://raw.githubusercontent.com/Cables97/product-configurator/main/src/models/textures/maple.png", })
    const pumpkin = await useTexture({ map: "https://raw.githubusercontent.com/Cables97/product-configurator/main/src/models/textures/pumpkin.png", })
    const pine = await useTexture({ map: "https://raw.githubusercontent.com/Cables97/product-configurator/main/src/models/textures/pine.png", })
    const cookie = await useTexture({ map: "https://raw.githubusercontent.com/Cables97/product-configurator/main/src/models/textures/cookie.png", })


    apple.map.flipY = false;
    maple.map.flipY = false;
    pumpkin.map.flipY = false;
    pine.map.flipY = false;
    cookie.map.flipY = false;

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

    default:
      null
    break;

  }

  //scentStyle - Label
  switch(userSettings.scents.id){
    case "apple":
      scene.getObjectByName("container").material = apple.map
    break;
    case "maple":
      scene.getObjectByName("container").material = maple.map
    break;
    case "pumpkin":
      scene.getObjectByName("container").material = pumpkin.map
    break;
    case "pine":
      scene.getObjectByName("container").material = pine.map
    break;
    case "cookie":
      scene.getObjectByName("container").material = cookie.map
    break;






  }
  


});



  const isVisible = computed(() => {
  return ((userSettings.candles.id) == "tall") ? true : false
  })

  </script>