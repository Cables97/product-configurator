<template>
    <div class="output-wrap">

        <div class="price-wrap">

            <div class="base price" v-if="menuSettings.isLoading">
                <h3>{{ userSettings.candles.name }}</h3>
                <h1>${{ userSettings.candles.cost }}</h1>
            </div>

            <div class="divider" v-if="menuSettings.isLoading"><h1>+</h1></div>

            <div class="extras price" v-if="menuSettings.isLoading">
                <h3>EXTRAS</h3>
                <h1>${{ calculatedExtra }}</h1>
                <div class="extras-pop">
                    <div>
                        <h6>Wick Style:</h6> 
                        <h5>{{ userSettings.wicks.name }}<span v-if="userSettings.wicks.cost > 0">+ ${{ userSettings.wicks.cost }}</span></h5>
                    </div>
                    
                    <div>
                        <h6>Scent:</h6>
                        <h5>{{ userSettings.scents.name }}<span v-if="userSettings.scents.cost > 0">+ ${{ userSettings.scents.cost }}</span></h5>
                    </div>

                    <div>
                        <h6>Container:</h6>
                        <h5> {{ userSettings.containers.name }}<span v-if="userSettings.containers.cost > 0">+ ${{ userSettings.containers.cost }}</span></h5>
                    </div>

                    <div>
                        <h6>Wax Color:</h6>
                        <h5>{{ userSettings.waxes.name }}<span v-if="userSettings.waxes.cost > 0">+ ${{ userSettings.waxes.cost }}</span></h5>
                    </div>

                </div>
            </div>

            <div class="divider" v-if="menuSettings.isLoading"><h1>=</h1></div>

            <div class="total price" v-if="menuSettings.isLoading">
                <h3>SUBTOTAL</h3>
                <h1>${{ calculatedTotal }}</h1>
            </div>



        </div>
        

        <div class="add-cart-btn">
            <button @click="addToCart()">ADD TO: <span>CART</span></button>
        </div>

    </div>
</template>

<script setup>
    import { userSettingsStore, menuSettingsStore } from '@/stores/store'; 
    import { computed } from 'vue';

    const userSettings = userSettingsStore().userStore
    const cart = userSettingsStore().cart
    const menuSettings = menuSettingsStore()


const calculatedExtra = computed( () =>{
    let total =  userSettings.wicks.cost + userSettings.scents.cost + userSettings.containers.cost + userSettings.waxes.cost
    return total
})

const calculatedTotal = computed( () =>{
    let total = userSettings.candles.cost + userSettings.wicks.cost + userSettings.scents.cost + userSettings.containers.cost + userSettings.waxes.cost
    return total
})

function addToCart(){
    const currentItemDetails = {
        candles : userSettings.candles,
        wicks: userSettings.wicks,
        scents: userSettings.scents,
        containers: userSettings.containers,
        waxes: userSettings.waxes,
    }
    console.log(currentItemDetails)
    let candleType = currentItemDetails.candles.name.split(" ")
    let name = candleType[0] + " " + currentItemDetails.scents.name + " " + candleType[1]
    console.log(name)
    let totalCost = 0
    for(let key in currentItemDetails){
        totalCost += currentItemDetails[key].cost 
    }

    const cartItem = new CartItem(name, totalCost, currentItemDetails)
    console.log(cartItem)
    cart.push(cartItem)
    menuSettings.isCartOpen = true
    setTimeout(() => {
        menuSettings.isCartOpen = false
    }, 2000);
}

class CartItem{
    constructor(name, cost, currentItem){
        this.name = name
        this.cost = cost
        this.quantity = 1
        this.details = currentItem
    }
}

</script>

<style lang="scss">
    .output-wrap{
        height:100%;
        width:100%;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        //gap:40px;
        padding:40px 80px ;
        .price-wrap{
            position: relative;
            display:flex;
            flex-direction: row;
            align-items: center;
            .price{
                position: relative;
                text-align: center;
                width:12em;
                h3{
                    font-size: 1em;
                    text-transform: uppercase;
                }
                .extras-pop{
                    position: absolute;
                    top:-10px;
                    left:0;
                    height:0;
                    width:200px;
                    background-color:var(--bg-solid);
                    text-align:left;
                    border-radius: 10px 10px 0 0 ;
                    overflow:hidden;
                    transition: all 1s ease;
                    box-shadow: 0 0 5px 2px black;
                    opacity:0;
                    div{
                        margin: 4px 10px;
                        h6{
                            display:inline;
                            position:relative;
                            &::after{
                                position: absolute;
                                content:"";
                                width:120%;
                                height:1px;
                                bottom:-2px;
                                left:0;
                                background-color: #ccc;
                                opacity:60%;
                            }
                        }
                    }
                    span{
                        float:right;
                    }
                }
                &:hover{
                    .extras-pop{
                        height:200px;
                        top:-210px;
                        opacity: 100%;
                    }
                }
            }
            .divider{
                align-self: flex-end;
            }
            

        }

        
        .add-cart-btn{
            button{
                @include text-Inter(20px, 600);
                height:80px;
                width:280px;
                background-color: #008019;
                border-radius: 10px;
                border:2px solid #008019;
                letter-spacing: 1px;
                color:white;
                transition: background-color 0.25s, border 0.33s;
                &:hover{
                    cursor: pointer;
                    background-color: #005411;
                    border:8 px solid #008019;
                }
            }
        }
    }

@media only screen and (max-width: 800px) {
    .output-wrap{
        padding:20px 20px ;
        .price-wrap{

            .base,
            .extras,
            .divider{
                display:none;
            }
            .price{
                width: 8em;
                h3{
                    text-transform: uppercase;
                }
            }

        }

        
        .add-cart-btn{
            button{
                height:80px;
                width:160px;
                font-size: 20px;
                font-weight: 600;
                text-align: left;
                padding:0 20px;
                
                span{
                    opacity: 70%;
                    font-size: 20px;
                    font-weight: 600;
                }
                
            }
        }
    }
}

</style>