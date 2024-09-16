<template>
    <div class="home">


        <div class="large-banner">
            
            
        </div>
        <div class="center-banner-wrap">
            
            <h2>Shop the Deal</h2>
            
            <div class="center-banner">

                <div class="center-b-arrow-back">
                    <div>
                      <IconChevLeft></IconChevLeft>  
                    </div>
                </div>

                <div class="center-banner-items">
                    <div class="item-box">
                        <BannerItem v-for="item in bannerItems" >{{ item }}</BannerItem>
                    </div>
                </div>

                <div class="center-b-arrow-forward">
                    <div>
                      <IconChevRight></IconChevRight>  
                    </div>
                </div>
            </div>

            
            <div>
            </div>
        </div>


    </div>
</template>

<script setup>

import BannerItem from '@/components/BannerItem.vue';
import IconEcosystem from '@/components/icons/IconEcosystem.vue';
import IconTooling from '@/components/icons/IconTooling.vue';
import IconChevLeft from '@/components/icons/IconChevLeft.vue';
import IconChevRight from '@/components/icons/IconChevRight.vue';

import { ref } from 'vue';

const bannerItems = {
    item1: 1,
    item2: 2,
    item3: 3,
    item4: 4
}


</script>

<style lang="scss" >

.home{
    border:1px solid blue;
    width:1440px;
    margin:auto;

    .large-banner{
        width:100%;

        height:600px;
        border:1px solid red;
    }
    .center-banner-wrap{
        width:1440px;
        height:500px;
        border:1px solid blue;
        h2{
            height:42px;
            text-align: center;
            border:1px solid orange;

        }
        .center-banner{
            position:relative;
            width:100%;
            height:calc(100% - 84px);
            border:1px solid orange;
            display:flex;
            flex-direction: row;
            gap:20px;

            .center-banner-items{
                position: relative;
                height:100%;
                width: calc(100% - 300px);
                overflow: hidden;
                border: 1px solid red;
                .item-box{
                    position:absolute;
                    top:0;
                    left:0px;
                    width:100%;
                    height:100%;
                    display:flex;
                    flex-direction: row;
                    gap:20px; 
                }

            }

            .center-b-arrow-back,
            .center-b-arrow-forward{
                position:relative;
                height:100%;
                width:150px;
                &:hover{
                    cursor: pointer;
                }
                div{
                    aspect-ratio: 1;
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                }
            }
        }
    }
}

</style>