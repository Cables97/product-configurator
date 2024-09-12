# product-Configurator
 TresJs + Vue based 3D product configurator inspired by [XboxGameLabs](https://xboxdesignlab.xbox.com/)
 
## Table of Contents
- [Installation](#installation)
- [Demo](#demo)
- [Usage](#usage)
- [Author](#authors)
- [License](#license)

## Description

The majority of this project is a framework that allows for users to create web-based product configurators, with a small example project....Candles!

## Installation

First, clone this repository:

```
# Clone this repository
git clone https://github.com/mfts/papermark.git

# Install dependencies
npm install

# Run the app
npm run dev

# Open localhost
```

## Demo

![Progress Demo](https://raw.githubusercontent.com/Cables97/product-configurator/main/public/images/progress_09122024.gif)

## Usage

Almost all info and layout is based on Objects in the Store. 

Adding Sections => All sections are defined by their menu object. To add a section, you simply need to copy one of the menu Objects replace the info with the approproate value. 

```
export const menuOptionsStore = defineStore('optionsMenu', () => {
  const menu = {
    candles : {    
      id:"candles",                                                 //id is the same as the object name. This is what controls navigation
      name: "Candles",                                  
      img: "/images/icons/sizes.svg" ,                              // 48px x 48px for best fit
      options1:{                                                    //Every section can have multiple sub-sections. 
        name: "Candle Style",                                       //Subsection Name
        list:[
          { id:"small",  name:"Small Candle", icon:"...", cost: 10 },   //These are the difference choices that someone might have in each section. 
          { id:"wide", name:"Wide Candle", icon:...", cost: 20,  },
          { id:"tall", name:"Tall Candle", icon:...", cost: 30 },
        ],
      },
        options2:{...                                      
      },
    },
    wicks : { ... }      
    } 
    ....
  return { menu }
})
```

Adding Models => Adding models requires a bit of work. Every model is different, and has different uses so there's no straight forward way to add them to a scene.
Thankfully Tres.Js has a very useful wrapper for Three.Js's model loader.
```
import { useLoader, useTexture } from '@tresjs/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { userSettingsStore } from '@/stores/store'; 

    const userSettings = userSettingsStore().userStore

    let modelPath = "./src/models/Candle_small.gltf"
    const { scene } = await useLoader(GLTFLoader, candlePath)

    watch(userSettings, () =>{
        ..reactive-ness can be declared here.  
    });
```

## Authors
Caleb -Cables- Universe  -  2024

## Disclaimer
This project is currenly being developed.

## License
This project is licensed under the [MIT License](LICENSE).
