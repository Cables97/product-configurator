<template>
    <div class="cart-item">

        <div class="c-i-top-line">
            <h3>{{  info.name }}</h3>
            <h3>${{  info.cost * info.quantity  }}</h3>
        </div>
        
        <div class="c-i-buttons">
            <button>Edit</button>
            <span>|</span>
            <button @click="cartItemRemove(info)">Remove</button>
            <span>|</span>
            <button @click="showDetails">Details</button>
            <span>|</span>
            <div>

                <v-select v-model="info.quantity" 
                    :value="updateQuantity" 
                    :clearable="false" 
                    :searchable="false" 
                    :filterable="false" 
                    :resetOnOptionsChange="false" 
                    :appendToBody="true"
                    :calculate-position="withPopper"
                    :options="[1,2,3,4,5,6,7,8,9]">
                </v-select>


            </div>
        </div>

        <div class="c-i-details" v-show="detailsEnabled">
            <h5>Size: {{ info.details.candles.name }}</h5>
            <h5>Wick Style: {{ info.details.wicks.name }}</h5>
            <h5>Scent: {{  info.details.scents.name }}</h5>
            <h5>Container Type: {{ info.details.containers.name }}</h5>
            <h5>Wax Colour: {{ info.details.waxes.name }}</h5>
        </div>


    </div>
</template>

<script setup>
    import { userSettingsStore, menuSettingsStore } from '@/stores/store'; 
    import { ref, computed, watch } from 'vue'
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';

    defineProps(['info'])

    const cart = userSettingsStore().cart
    const detailsEnabled = ref(false)

    watch(cart, () =>{
        console.log(cart)
    });

    function showDetails(){
        (detailsEnabled.value) ? detailsEnabled.value = false : detailsEnabled.value = true
    }

    function cartItemRemove(info){
        const index = findObjectIndex(cart, info)
        cart.splice(index, 1)
    }

    function findObjectIndex(arr, props) {
    return arr.findIndex(obj => {
        return Object.keys(props).every(key => obj[key] === props[key]);
    });
    }




</script>

<style lang="scss">

:root,
:host {
    --vs-colors--lightest: rgba(60, 60, 60, 0.26);
    --vs-colors--light: var(--color-text);
    --vs-colors--dark: #aaa;
    --vs-colors--darkest: rgba(0, 0, 0, 0.15);

    /* Search Input */
    --vs-search-input-color: red;
    --vs-search-input-bg: red;
    --vs-search-input-placeholder-color: red;

    /* Font */
    --vs-font-size: 1rem;
    --vs-line-height: 1.4;

    /* Disabled State */
    --vs-state-disabled-bg: rgb(248, 248, 248);
    --vs-state-disabled-color: var(--vs-colors--light);
    --vs-state-disabled-controls-color: var(--vs-colors--light);
    --vs-state-disabled-cursor: not-allowed;

    /* Borders */
    --vs-border-color: var(--vs-colors--lightest);
    --vs-border-width: 1px;
    --vs-border-style: solid;
    --vs-border-radius: 4px;

    /* Actions: house the component controls */
    --vs-actions-padding: 4px 6px 0 3px;

    /* Component Controls: Clear, Open Indicator */
    --vs-controls-color: var(--vs-colors--light);
    --vs-controls-size: 1;
    --vs-controls--deselect-text-shadow: 0 1px 0 #aaa;

    /* Selected */
    --vs-selected-bg: #f0f0f0;
    --vs-selected-color: var(--vs-colors--dark);
    --vs-selected-border-color: var(--vs-border-color);
    --vs-selected-border-style: var(--vs-border-style);
    --vs-selected-border-width: var(--vs-border-width);

    /* Dropdown */
    --vs-dropdown-bg: #3f4249;
    --vs-dropdown-color: inherit;
    --vs-dropdown-z-index: 1000000000000000;
    --vs-dropdown-min-width: 60px;
    --vs-dropdown-max-height: 350px;
    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

    /* Options */
    --vs-dropdown-option-bg: #000;
    --vs-dropdown-option-color: var(--vs-dropdown-color);
    --vs-dropdown-option-padding: 3px 3px;

    /* Active State */
    --vs-dropdown-option--active-bg: #5897fb;
    --vs-dropdown-option--active-color: #aaa;

    /* Deselect State */
    --vs-dropdown-option--deselect-bg: #fb5858;
    --vs-dropdown-option--deselect-color: #aaa;

    /* Transitions */
    --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
    --vs-transition-duration: 150ms;

}

.cart-item{
    position: relative;
    padding:24px 0;
    min-height:100px;
    width:100%;

    .c-i-top-line{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 1em;
        color:white;
    }

    .c-i-details{
        padding: 0 24px;
    }

    .c-i-buttons{
        width: fit-content;
        margin: auto;
        display:flex;
        flex-direction: row;
        gap: 10px;
        text-align: center;
        line-height:32px;
        button{
            @include text-Inter(16px,400);
            background: none;
            border:none;
            color:#aaa;
        }
        div{
            display:flex;
            flex-direction: row;
            gap:5px;
            overflow: visible;
        
        }
    }

}

</style>