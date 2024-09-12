<template>
    
    <div class="config-wrapper">

        <div class="config">
            <Suspense>
                <div class="display"> <DisplayBox /> </div>
            </Suspense>

            <div class="menu"> <SelectionMenu/> </div>

        </div>

        <div class="output">
            <OutputLine/>
        </div>

    </div>
    
</template>

<script setup>
import OutputLine from '@/components/OutputLine.vue';
import SelectionMenu from '@/components/SelectionMenu.vue';
import DisplayBox from '@/components/DisplayBox.vue';

</script>

<style lang="scss">

.config-wrapper{
    height:calc(100vh - 60px);
    width:100%;
    display:flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(58,59,59,1) 10%, rgba(20,20,20,1) 100%);

    .config{
        height:calc(100vh - (var(--header-height) + var(--output-height)));
        display:flex;
        flex-direction: row;
        .display{
            width:calc(100% * (1020 / 1920));
            height:100%;
        }

        .menu{
            width:calc(100% * (900 / 1920));;
            height:100%;
            display:flex;
            flex-direction: row;
        }

    }

    .output{
        height:150px;
        width:100%;
        box-shadow: 0 0 20px 5px rgba($color: #000, $alpha: .5);
        background-color: var(--bg-solid);
    }

}


@media only screen and (max-width: 800px) {

    .config-wrapper{
        .config{
            flex-direction: column;
            height:100%;
            .display{
                width:100%;
                height:calc(100% - 200px);
            }

            .menu{
                height:400px;
                width:100%;
                min-height:200px;
                display:flex;
                flex-direction: row;
            }
        }

        .output{
            height:96px;
        }
    }

}


</style>