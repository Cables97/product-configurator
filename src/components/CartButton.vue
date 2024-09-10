<template>
    <div class="cart-wrapper">
        <IconCart></IconCart>
        <div class="cart-count">1</div>
    </div>
</template>

<script setup>
import IconCart from './icons/IconCart.vue';


</script>

<style lang="scss">

.cart-wrapper{
    padding:20px;
    position: relative;
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