import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three';
import { useLoader } from '@tresjs/core'
import { TextureLoader } from 'three'
import { useTexture } from '@tresjs/core'



export const materialsStore = defineStore('materialsStore', () =>{

  const matGlass = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    thickness: 0.01,
  })

  const matMetal = new THREE.MeshPhysicalMaterial({
    roughness: 0.215,
    metalness: 1,
    specularColor: "#F7F9FB",
    color: "#E8E9EA",
  })

  const matWax = new THREE.MeshPhongMaterial({
    color: "#ddd",
  })

  const matLabel = new THREE.MeshPhongMaterial({
    color: "#ddd",
  })


  return {matGlass, matMetal, matWax, matLabel}
})



export const menuOptionsStore = defineStore('optionsMenu', () => {

  const menu = {

    candles : {
      id:"candles",
      name: "Candles",
      options:{
        name: "Candle Style",
        list:[
          { id:"small",  name:"Small Candle", icon:".img", cost: 10 },
          { id:"wide", name:"Wide Candle", icon:".img", cost: 20,  },
          { id:"tall", name:"Tall Candle", icon:".img", cost: 30 },
        ],
      },
    },

    wicks : {
      id:"wicks",
      name: "Wick Style",
      options:{
        name: "Wick Style",
        list:[
          { id: "single", name: "Single", icon: ".img", cost: 0 },
          { id: "triple", name: "Triple", icon: ".img", cost: 5 },
          { id: "wood",  name: "Wood", icon: ".img", cost: 10 },
        ],
      },
    },

    scents : {
      id:"scents",
      name: "Scents",
      options:{
        name: "Basic Scents",
        list:[
          { id:"apple", name:"Apple Orchard Bloom", icon:".img", cost:0 },
        ],
      },

      options2:{
        name: "Premium Scents",
        list:[
          { id:"pumpkin", name:"Pumpkin Spice Swirl", icon:".img", cost:0  },

        ],
      }
    },

    containers : {
      id:"containers",
      name: "Containers",
      options:{
        name: "Container Materials",
        list:[
          { id:"glass", name:"Glass Container", icon:".img",  cost:0  },
          { id:"metal", name:"Metal Container", icon:".img",  cost:0  },
          { id:"wood", name:"Wooden Container", icon:".img",  cost:0  },
        ],
      },
    },

    waxes : {
      id:"waxes",
      name: "Wax Color",
      options:{
        name: "Matte Wax",
        list:[
          { id:"white",  name:"White",  cost:0, color: "#FFFFFF"   },
          { id:"red",  name:"Red",  cost:0, color: "#F00"   },
          { id:"green", name:"Green",  cost:0, color: "#0F0"   },
          { id:"blue", name:"Blue",  cost:0, color: "#00F"   },
        ],
      },
    },

  }
    // ["apple", "wood", "pine", "vanilla", "coffee", "pumpkin", "maple"],
    // containers: ["glass", "metal", "wood"],
    // waxColors: [0xDD8A8A, 0xF4DE83, 0XCCE0AC, 0xF0A8D0, 0xF8EDE3]
  return { menu }
})

export const menuSettingsStore = defineStore('menuSettings', () =>{
  const currentPage = {}

  return {currentPage}

})

export const userSettingsStore = defineStore('userSettings', () =>{

  const userStore = ref({
    candles : { id:"wide", name:"Wide Candle", icon:".img", cost: 20 },
    wicks: { id: "single", name: "Single", icon: ".img", cost: 0 },
    scents: { id:"apple", name:"Apple Orchard Bloom", icon:".img", cost: 10 },
    containers: { id:"glass", name:"Glass Container", icon:".img", cost: 10  },
    waxes: { id:"white",  name:"White", icon:".img", cost: 10, color: "#FFFFFF"  },
  })

  return {userStore}
})