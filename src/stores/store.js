import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as THREE from 'three';



export const materialsStore = defineStore('materialsStore', () =>{


  const matLabel = new THREE.MeshPhysicalMaterial({
    roughness: 1,
    metalness:0,
  })


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

  const matWood = new THREE.MeshPhysicalMaterial({
    roughness: 0.215,
    metalness: 0
  })

  const matWax = new THREE.MeshPhongMaterial({
    color: "#ddd",
  })

  return {matGlass, matMetal, matWax, matWood, matLabel}
})

export const menuOptionsStore = defineStore('optionsMenu', () => {

  const menu = {

    candles : {
      id:"candles",
      name: "Candles",
      img: "/images/icons/sizes.svg" ,
      options:{
        name: "Candle Style",
        list:[
          { id:"small",  name:"Small Candle", icon:"/images/icons/sizesSmall.svg", cost: 10 },
          { id:"wide", name:"Wide Candle", icon:"/images/icons/sizesWide.svg", cost: 20,  },
          { id:"tall", name:"Tall Candle", icon:"/images/icons/sizesTall.svg", cost: 30 },
        ],
      },
    },

    wicks : {
      id:"wicks",
      name: "Wick Style",
      img: "/images/icons/wicks.svg" ,
      options:{
        name: "Wick Style",
        list:[
          { id: "single", name: "Single Wick", icon: "/images/icons/wicks.svg", cost: 0 },
          { id: "triple", name: "Triple Wick", icon: "/images/icons/wicksTriple.svg", cost: 5 },
          { id: "wood",  name: "Wood Wick", icon: "/images/icons/wicksWood.svg", cost: 10 },
        ],
      },
    },

    scents : {
      id:"scents",
      name: "Scents",
      img: "/images/icons/scents.svg" ,
      options:{
        name: "Basic Scents",
        list:[
          { id:"apple", name:"Apple Orchard Bloom", cost:0 , icon:"/images/icons/apple.svg"},
          { id:"pine", name:"Christmas Cookies", cost:0 , icon:"/images/icons/pine.svg"},
          { id:"cookie", name:"Vanilla Sugar Cookies", cost:0 , icon:"/images/icons/cookie.svg"},
        ],
      },

      options2:{
        name: "Premium Scents",
        list:[
          { id:"pumpkin", name:"Pumpkin Spice Swirl", cost:5, icon:"/images/icons/pumpkin.svg"  },
          { id:"maple", name:"Maple Cinnamon", cost:5, icon:"/images/icons/maple.svg"  },
        ],
      }
    },

    containers : {
      id:"containers",
      name: "Containers",
      img: "/images/icons/container.svg" ,
      options:{
        name: "Container Materials",
        list:[
          { id:"glass", name:"Glass Container", icon:"/images/icons/glassMaterial.png",  cost:0  },
          { id:"metal", name:"Metal Container", icon:"/images/icons/metalMaterial.png",  cost:0  },
          { id:"wood", name:"Wooden Container", icon:"/images/icons/woodMaterial.png",  cost:0  },
        ],
      },
    },

    waxes : {
      id:"waxes",
      name: "Wax Color",
      img: "/images/icons/colorSwatches.svg" ,
      options:{
        name: "Matte Wax",
        list:[
          { id:"white",  name:"White",  cost:0, color: "#f8ede3"   },
          { id:"red",  name:"Red",  cost:0, color: "#DD8A8A"   },
          { id:"green", name:"Green",  cost:0, color: "#cce0ac"   },
          { id:"blue", name:"Blue",  cost:0, color: "#00F"   },
          { id:"yellow", name:"Yellow",  cost:0, color: "#f4de83"   },
          { id:"pink", name:"Pink",  cost:0, color: "#F0A8D0"   },
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
  let isLoading 
  let isCartOpen = ref(false)

  return {currentPage, isLoading, isCartOpen}

})

export const userSettingsStore = defineStore('userSettings', () =>{


  const defaultStore = ref({
    candles : { id:"wide", name:"Wide Candle", icon:".img", cost: 20 },
    wicks: { id: "single", name: "Single", icon: ".img", cost: 0 },
    scents: { id:"apple", name:"Apple Orchard Bloom", icon:".img", cost: 10 },
    containers: { id:"glass", name:"Glass Container", icon:".img", cost: 10  },
    waxes: { id:"white",  name:"White", icon:".img", cost: 10, color: "#f8ede3"  },
  })


  const userStore = ref({
    candles : { id:"wide", name:"Wide Candle", icon:".img", cost: 20 },
    wicks: { id: "single", name: "Single", icon: ".img", cost: 0 },
    scents: { id:"apple", name:"Apple Orchard Bloom", icon:".img", cost: 10 },
    containers: { id:"glass", name:"Glass Container", icon:".img", cost: 10  },
    waxes: { id:"white",  name:"White", icon:".img", cost: 10, color: "#FFFFFF"  },
  })

  const cart = ref([
  ])

  return {userStore, cart}
})