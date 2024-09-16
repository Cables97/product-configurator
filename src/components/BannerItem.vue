<template>
    <div class="banner-item">
        <slot></slot>
    </div>
</template>

<script setup>


function addToCart(item){
    const currentItemDetails = {
        candles : item.candles,
        wicks: item.wicks,
        scents: item.scents,
        containers: item.containers,
        waxes: item.waxes,
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
}


</script>

<style lang="scss">

.banner-item{
    height:100%;
    width:calc(100% / 4);
    border:2px solid purple;
}


</style>