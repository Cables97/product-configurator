<template>
    <div class="output-wrap">

        <div class="price-wrap">
            <div class="base price">
                <h3>{{ userSettings.candles.name }}</h3>
                <h1>${{ userSettings.candles.cost }}</h1>
            </div>

            <div class="divider"><h1>+</h1></div>

            <div class="extras price">
                <h3>EXTRAS</h3>
                <h1>${{ calculatedExtra }}</h1>
            </div>

            <div class="divider"><h1>=</h1></div>

            <div class="total price">
                <h3>SUBTOTAL</h3>
                <h1>${{ calculatedTotal }}</h1>
            </div>
        </div>
        

        <div class="checkout-btn">
            <button>NEXT: <span>EXTRAS</span></button>
        </div>

    </div>
</template>

<script setup>
    import { userSettingsStore } from '@/stores/store'; 
    import { computed } from 'vue';

    const userSettings = userSettingsStore().userStore
    console.log(userSettings)


const calculatedExtra = computed( () =>{
    let total =  userSettings.wicks.cost + userSettings.scents.cost + userSettings.containers.cost + userSettings.waxes.cost
    return total
})


const calculatedTotal = computed( () =>{
    let total = userSettings.candles.cost + userSettings.wicks.cost + userSettings.scents.cost + userSettings.containers.cost + userSettings.waxes.cost
    return total
})



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
            display:flex;
            flex-direction: row;
            align-items: center;
            .price{
                text-align: center;
                width:12em;
                text-transform: uppercase;
                h3{
                    font-size: 1em;
                    text-transform: uppercase;
                }
            }
            .divider{
                align-self: flex-end;
            }

        }

        
        .checkout-btn{
            button{
                height:80px;
                width:280px;
                background-color: #008019;
                border-radius: 10px;
                border:2px solid #008019;
                font-size: 20px;
                font-weight: 600;
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

        
        .checkout-btn{
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