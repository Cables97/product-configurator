<template>

    <div class="selection-menu">

        <div class="menu-nav">
            <div v-for="item in menuNavOptions">
                <NavBox :data-name="item" @click="changeMenuPage(item)" :class="{ 'active' : item == menuSettings.currentPage.id }"/>
            </div>


        </div>

        <div class="menu-options">

            <h1 class="m-o-title">{{ menuSettings.currentPage.name }}<span class="mobile-choice"> -  {{ userSettings[menuSettings.currentPage.id].name }}</span></h1>

            <div class="menu-option-wrap">
                <div class="menu-choices-wrap">
                    <h3 class="m-c-title">{{ menuSettings.currentPage.options.name }}<span class="desktop-choice" v-if="optionChoiceToggle === 0">  -  {{ userSettings[menuSettings.currentPage.id].name }}</span></h3>
                    <div class="menu-choices">
                        <div class="m-c" v-for="option in menuSettings.currentPage.options.list">
                            <OptionButton :item=option ></OptionButton>
                        </div>
                    </div>
                </div>
                
                <div class="menu-choices-wrap" v-if="menuSettings.currentPage.options2">
                    <h3 class="m-c-title">{{ menuSettings.currentPage.options2.name }}<span class="desktop-choice" v-if="optionChoiceToggle === 1">  -  {{ userSettings[menuSettings.currentPage.id].name }}</span></h3>
                    <div class="menu-choices">
                        <div class="m-c" v-for="option in menuSettings.currentPage.options2.list">
                            <OptionButton :item=option ></OptionButton>
                        </div>
                    </div>
                </div>
            </div>

           
            
        </div>

    </div>

</template>

<script setup>
import NavBox from './NavBox.vue';
import { ref } from 'vue'

import { menuOptionsStore , menuSettingsStore } from '@/stores/store';
import { computed } from 'vue';
import { userSettingsStore } from '@/stores/store'; 
import OptionButton from './OptionButton.vue';

const menuOptions = menuOptionsStore().menu
const menuSettings = menuSettingsStore()
const userSettings = userSettingsStore().userStore

const optionChoiceToggle = ref(0);

menuSettings.currentPage = findObject("candles", menuOptions)

const menuNavOptions = computed(() => {
    const options = []
    for(let key in menuOptions){
        options.push(menuOptions[key].id)
    }
    return options
}) 


function changeMenuPage(pageId){
    const clickedPage = findObject(pageId, menuOptions)
    menuSettings.currentPage = clickedPage
}

function findObject(id, parent){
    for(let key in parent){
        if(parent[key].id === id){
            return parent[key]
        }
    }
}

</script>

<style lang="scss">

    .config-nav-active{
        .menu-box{
            background-color: #4a4D56;
            border:2px solid #5c5f67;
        }
    }
    

    .selection-menu{
        display:flex;
        flex-direction: row;
        width:100%;
        background-color: rgba($color: #181818, $alpha: 0.7);

        .menu-nav{
            height: 100%;
            width: 115px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding:40px 0 ;
        }

        .menu-options{
            height: 100%;
            width: calc(100% - 115px);
            .m-o-title{
                margin-top:1.5em;
                margin-bottom:0.25em;
                span.mobile-choice{
                    display:none
                }
            }
            .menu-option-wrap{
                display: flex;
                flex-direction: column;
                gap:20px;
                .menu-choices-wrap{
                    .m-c-title{
                        font-size: 16px;
                        margin-bottom:0.25em;
                        font-weight: 500;

                        .desktop-choice{
                            opacity:50%;
                        }
                    }
                    .menu-choices{
                        width:100%;
                        display:flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 10px;
                    }
                    
                }
            }
            
        }
    }


@media only screen and (max-width: 800px) {


    .selection-menu{
        display:flex;
        flex-direction: column;
        width:100%;
        height:100%;
        .menu-nav{
            height: 100px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            padding: 0 40px ;
            overflow:auto;
        }

        .menu-options{
            height: calc(100% - 100px);
            width: 100%;
            padding: 0 20px;
            overflow: auto;
            position: relative;
            .m-o-title{
                font-size: 16px;
                position: sticky;
                left:0px;
                border:1px solid red;
                margin-top:0.25em;
                margin-bottom:0.25em;
                span.mobile-choice{
                    display:inline;
                }
            }

            .menu-option-wrap{
                margin-top:0px;
                display: flex;
                flex-direction: row;
               
                
                .menu-choices-wrap{
                    background-color: rgba(41,43,47,.961);
                    padding:10px;
                    border-radius: 10px;

                    .m-c-title{
                        color:white;
                        font-size: 16px;
                        .desktop-choice{
                            display:none;
                        }
                    }

                    .menu-choices{
                        overflow:auto;
                        width:100%;
                        display:flex;
                        flex-direction: row;
                        gap: 15px;
                        flex-wrap:nowrap;
                    }
                }
            }
        }

    }



}




</style>