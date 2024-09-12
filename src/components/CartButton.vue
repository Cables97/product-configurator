<template>
    <div class="cart-button">
        <IconCart></IconCart>
        <div class="cart-count" v-if="cart.length >= 1">{{ cart.length }}</div>
    </div>
</template>

<script setup>
import IconCart from './icons/IconCart.vue';
import { userSettingsStore } from '@/stores/store'; 
import { computed } from 'vue';

    const cart = userSettingsStore().cart

</script>

<style lang="scss">

.cart-button{
    padding:20px;
    position: relative;
    border:1px solid red;
    margin-right:50px;
    .cart-count{
        position: absolute;
        top:14px;
        right:15px;
        border:1px solid rgb(180, 23, 23);
        border-radius: 5px;
        color:white;
        background-color: rgb(180, 23, 23);
        padding:0 6px;
        font-weight: 800;
        z-index: 9;
    }


    &:hover{
        cursor: pointer;
    }
}

@media only screen and (max-width: 800px) {
  
.cart-wrapper{
    position: relative;
    padding:10px;
    .cart-count{
        top:10px;
        right:10px;
        padding:0 4px;
        font-size: 8px;
        }
    }
}




</style>