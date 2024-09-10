<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ConfiguratorView from './views/ConfiguratorView.vue';
import NavBox from './components/NavBox.vue';
import CartButton from './components/CartButton.vue';


//run =>cd tres-configurator && npm run dev
</script>

<template>

  <header>

    <div class="head-nav">
      <RouterLink to="/" exactActiveClass="head-nav-active"><p>Home</p></RouterLink>
      <RouterLink to="/configurator" activeClass="head-nav-active"><p>Configurator</p></RouterLink>
    </div>

    <div class="cart">
      <CartButton/>
    </div>

  </header>

  <div class="content">
      <RouterView></RouterView>
  </div>
  
  <footer>

  </footer>

</template>

<style lang="scss">



header{
  height:100px;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #181818;
  box-shadow: 0 0 20px 50px rgba($color: #000, $alpha: .5);
  z-index: 99;
  .head-nav{
    width:60%;
    height: 80%;
    margin:auto;
    display: flex;
    flex-direction: row;
    gap:40px;
    align-items: center;
    padding:40px;

    a{
      text-decoration: none;
      color:#AAA;

      p{
        @include text-Inter(24px, 400);
        transition: all 0.25s;
      }
    }
  }
}

a.head-nav-active{

  p{
    color:#FFF;
    //text-decoration: underline;
    border-bottom:2px solid white;
  }
}

.content{
  overflow-x: hidden;
}


footer{
  border: 1px solid red;
  height: 100px;
  width: 100%;
}




@media only screen and (max-width: 800px) {
  header{
    height: 60px;
    .head-nav{
    gap:20px;
    padding:0px;
      a{
        p{
          @include text-Inter(16px, 400);
        }
      }
    } 
  }
  

}

</style>
