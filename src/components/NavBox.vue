<template>
    <div class="menu-box">
        <slot name="icon"></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss">

    .menu-box{
        height:54px;
        width:54px;
        background-color: #34363c;
        border-radius: 10px;
        border:2px solid #494a50;
        transition: all 0.33s;


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