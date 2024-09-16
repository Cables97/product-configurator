<template>
        <div class="cart-display" id="cart-display"  ref="cartBox">

            <div class="c-d-top-line" v-if="cart.length !== 0">
                <h2>Cart</h2>
                <div>
                    <h4 >{{ cart.length }} item</h4>
                    <h4 >Subtotal: <span>${{ cart.reduce((total, obj) => total + (obj.cost * obj.quantity || 0), 0) }}</span></h4>
                </div>
                <button class="close" @click="menuSettings.isCartOpen = false"><span>X</span></button>
            </div>

            <div class="cart-empty-msg" v-if="cart.length == 0">Your cart appears to be empty</div>


            <div v-for="item in cart">
                <CartItem :info="item"/>
            </div>
            <div class="cart-bottom" v-if="cart.length !== 0">
                <div class="checkout-btn">
                    <button @click="noCheckout">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    
</template>

<script setup>
import { ref, computed, watch, useTemplateRef, onMounted, onBeforeUnmount } from 'vue'
import { userSettingsStore, menuSettingsStore } from '@/stores/store'; 
import CartItem from './CartItem.vue';
import { onClickOutside } from '@vueuse/core'

const cart = userSettingsStore().cart
const menuSettings = menuSettingsStore()
const menuHeight = ref(0)

const cartBox = ref(null)

console.log(cart.length)
// watch(cart, () =>{
//     (cart.length >= 1) ? menuHeight.value = (cart.length  * 112) + 100 + 60 + "px" : menuHeight.value = "100px"
//     document.getElementById("cart-display").style.height = menuHeight.value
//     if(cart.length >= 1){
//         document.getElementById("cart-display").style.overflowY = "auto"
//     }else{
//         document.getElementById("cart-display").style.overflowY = "hidden"
//     }
// });


onClickOutside(cartBox, event => menuSettings.isCartOpen = false)

function noCheckout(){
    alert('Error: Sorry, checkout Page has not been added')
}

</script>

<style lang="scss" >

    .cart-display{
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height:fit-content;
        max-height:600px;
        width:400px;
        top:100px;
        right:50px;
        border-top:none;
        border-radius: 0 0 10px 10px;
        background-color: #3f4249;
        box-shadow: 0 10px 5px 10px rgba($color: black, $alpha: 0.15);
        z-index: 99999;
        transform-origin: top;
        overflow: hidden;
        overflow-y: auto;

        .c-d-top-line{
            position: sticky;
            top:0;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            height:60px;
            padding:10px;
            @include text-Inter(16px, 400);
            background-color: #3f4249;
            box-shadow: 0 0 20px 10px #3f4249;
            z-index: 9;
            h2{
                font-size: 32px;
                line-height: 100%;
                font-weight: 700;
                color:white;
            }
            div{
                padding:0 20px;
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: space-between;
                line-height: 100%;
                span{
                    font-weight: 700;
                    color:white;
                }
            }
            .close{
                position: relative;
                border-radius: 50%;
                aspect-ratio: 1;
                height:38px;
                width:38px;
                font-size: 24px;
                padding:10px;
                line-height: 100%;
                color:var(--color-text);
                border:2px var(--color-text) solid;
                background: none;
                span{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%, -50%);
                    font-family: "Lucida Console", "Courier New", monospace;
                }
                &:hover{
                    background-color: rgba($color: #ddd, $alpha: 0.1);
                    cursor: pointer;
                }
            }
        }

        .cart-empty-msg{
            line-height:100px;
            text-align: center;
            @include text-Inter(16px, 400)
        }
        .cart-bottom{

            height:102px;
            width:100%;
            background-color: #242424;
            padding:20px;
            .checkout-btn{
                margin:auto ;
                width:fit-content;
                button{
                    @include text-Inter(16px, 700);
                    height:60px;
                    width:280px;
                    background-color: var(--color-buttons);
                    border-radius: 10px;
                    border:2px solid var(--color-buttons);
                    letter-spacing: 1px;
                    color:white;
                    transition: background-color 0.25s, border 0.33s;
                    &:hover{
                        cursor: pointer;
                        background-color: var(--color-button-active);
                        border:8 px solid var(--color-buttons);
                    }
                }
        }
        }
    }



</style>