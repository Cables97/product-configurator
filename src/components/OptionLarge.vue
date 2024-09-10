<template>
    <div class="option-large">

    </div>
</template>

<script setup>

</script>

<style lang="scss">

.option-large{
    height: 100px;
    width: 100px;
    border-radius: 10px;
    background-color: #34363c;
    border:2px solid #494a50;
    transition: all 0.33s;
    aspect-ratio: 1;

    &.active{
        background-color: #4a4D56;
        border:2px solid #5c5f67;
    }

    &:hover{
        background-color: #4a4D56;
        border:2px solid #5c5f67;
        cursor: pointer;
    }
}

</style>