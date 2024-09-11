<template>

    <button class="option-button" 
        v-if="propCheck(item, 'icon')" 
        :class="{ grad : propCheck(item, 'grad') , 'active' : item.id === userSettings[menuSettings.currentPage.id].id}" 
        :style="{ 'background-color' : backgroundColorSetter(item)}"
        @click="setCurrentChoice(item)">
        <div class="popup"><p>{{ item.name }} <span :class="{ 'decrease' : item.cost < userSettings[menuSettings.currentPage.id].cost, 'increase' : item.cost > userSettings[menuSettings.currentPage.id].cost }">{{item.cost - userSettings[menuSettings.currentPage.id].cost  }}</span></p></div>
        <img src="https://raw.githubusercontent.com/Cables97/product-configurator/863812e44040bc2fb02e8bdbcfc55d9e423c759e/src/components/icons/pumpkin.svg">
    </button>    

    <button class="option-circle" 
        v-if="!propCheck(item, 'icon')" 
        :class="{ grad : propCheck(item, 'grad') , 'active' : item.id === userSettings[menuSettings.currentPage.id].id }" 
        :style="{ 'background-color' : backgroundColorSetter(item) }"
        @click="setCurrentChoice(item)"
    >
        <div class="popup"><p>{{ item.name }} {{item.cost -  userSettings[menuSettings.currentPage.id].cost  }}</p></div>
    </button>

</template>

<script setup>
import { computed, ref } from 'vue';

import { userSettingsStore, menuSettingsStore } from '@/stores/store'; 

const userSettings = userSettingsStore().userStore
const menuSettings = menuSettingsStore()
const candleType = ref(userSettings.candles.id);

   defineProps(['item'])


function backgroundColorSetter(item){
    return ('color' in item) ?  item.color : null
}

function propCheck(item, property){
    if(property in item){
        return true
    }else{
        return false
    }
}


function setCurrentChoice(item){
    console.log(item.name + " clicked")
    userSettings[menuSettings.currentPage.id] = item
}




</script>

<style lang="scss">

.option-button{
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    background: #34363c;
    border:2px solid #5c5f67;

    transition: all 0.33s;
    aspect-ratio: 1;

    &.active{
        background: #4a4D56;
        border:2px solid #5c5f67;

        &::after{
            content:"\2713";
            font-size: 24px;
            color:white;
            line-height: 40px;;
            height:40px;
            width:40px;
            background-color: rgba($color: #000000, $alpha: 0.5);
            box-shadow: 0 0 5px 0px rgba($color: #000000, $alpha: 0.4);
            border-radius: 50%;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
    }
    &:hover{
        background: #5c5f67;
        border:2px solid #5c5f67;
        cursor: pointer;
        .popup{
            opacity:100%
        }
    }
    &:focus{
        border:2px solid white;
    }
}

.grad{
    &::after{
        content: "";
        position: absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        border-radius: 50%;
        z-index: 5;
        opacity: 50%;
        background: conic-gradient(rgb(38, 38, 38), rgb(217, 217, 217));
    }
}

.option-button,
.option-circle{
    .popup{
        @include hover-popup();
    }
}

.option-circle{
    position: relative;
    height: 72px;
    width: 72px;
    border-radius: 50%;
    background-color: #34363c;
    border:2px solid #5c5f67;
    transition: all 0.33s;
    aspect-ratio: 1;
    position: relative;


    &.active{
        background-color: #4a4D56;
        border:2px solid #5c5f67;
         border:2px solid white
    }
      

    &:hover{
        background-color: #4a4D56;
        //border:2px solid #5c5f67;
        cursor: pointer;
        .popup{
            opacity:100%
        }
    }


    &:focus{
        border:2px solid white;
    }  
}
</style>