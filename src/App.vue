<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ConfiguratorView from './views/ConfiguratorView.vue';
import NavBox from './components/NavBox.vue';
import CartDisplay from './components/CartDisplay.vue';
import CartButton from './components/CartButton.vue';
import { ref, useTemplateRef, onMounted, onBeforeUnmount } from 'vue';
import { userSettingsStore, menuSettingsStore, materialsStore } from '@/stores/store'; 
import EmailInput from './components/EmailInput.vue';
import { OnClickOutside } from '@vueuse/components'

const menuSettings = menuSettingsStore()


menuSettings.isCartOpen

function openCart(){
  console.log("click" + menuSettings.isCartOpen)
  if(menuSettings.isCartOpen){
    menuSettings.isCartOpen = false
  }else{
    menuSettings.isCartOpen = true
  }
}


function close(){
    menuSettings.isCartOpen = false
}

//run =>cd tres-configurator && npm run dev
</script>

<template>

  <header>

    <!-- <div class="head-nav">
      <RouterLink to="/" exactActiveClass="head-nav-active"><p>Home</p></RouterLink>
      <RouterLink to="/configurator" activeClass="head-nav-active"><p>Configurator</p></RouterLink>
    </div> -->

    <div class="cart">
      <CartButton @click="openCart()"/>

    </div>

  </header>
      <Transition name="cart-display">
        <CartDisplay  v-show="menuSettings.isCartOpen"/>
      </Transition>


  <div class="content">
      <RouterView></RouterView>
  </div>
  
  <footer>

    <div class="footer-content">
            <div class="footer-newsletter">
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Primis sapien cras phasellus etiam orci curabitur cubilia malesuada. Aliquam facilisi vivamus suscipit tellus condimentum consequat eros elementum. Sit netus tempus neque aptent tortor habitant lorem.</p>
              <EmailInput></EmailInput>
              <p>Sign up for our newsletter for 20% off our next purchase! Not really, but no one will read this, and I need filler text!</p>
            </div>
            <div class="footer-links">
              <ul>
                <li>CUSTOMER CARE</li>
                <li><a>Help & FAQs</a></li>
                <li><a>Shipping</a></li>
                <li><a>Returns & <br> Exchanges</a></li>
                <li><a>Order Tracking</a></li>
                <li><a>Contact Us</a></li>
              </ul>
              <ul>
                <li>MY ACCOUNT</li>
                <li><a>Sign In or Sign Up</a></li>
                <li><a>Order History</a></li>
              </ul>
              <ul>
                <li>DISCOVER</li>
                <li><a>Our Story</a></li>
                <li><a>Careers</a></li>
                <li><a>Gift Cards</a></li>
                <li><a>Shop by Fragrance</a></li>
              </ul>
              <ul>
                <li>FIND US</li>
                <li><a>Store Locator</a></li>
              </ul>
              <ul>
                <li>LEGAL</li>
                <li><a>Site Map</a></li>
                <li><a>Terms Of Use</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Ad Preferences</a></li>
              </ul>

            </div>
    </div>
  </footer>

</template>

<style lang="scss">



header{
  height:100px;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding:0 100px;
  background-color: #181818;
  z-index:10000;
  border-bottom: 4px solid #262626;

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
    .cart{
      position:relative;
    }
  }
}

.cart-display-enter-active,
.cart-display-leave-active {
  transition: all 0.5s ease;
  transform-origin: top;
}

.cart-display-enter-from,
.cart-display-leave-to {
  transform:rotateX(-90deg);
  opacity: 0;
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
  margin-top: 20px;
  height: 400px;
  width: 100%;
  border-top: 4px solid #262626;

  .footer-content{
    padding-top:20px;
    width:1440px;
    height:100%;
    gap:20px;
    margin:auto;
    display:flex;
    flex-direction: row;

    .footer-newsletter{
      height:100%;
      width:500px;
      p{
        width:80%;
        &:first-child{
          margin-bottom: 40px;
        }
      }

    }

    .footer-links{
      display:flex;
      flex-direction: row;
      width:calc(100% - 500px);
      gap:20px;
      ul{
        width: calc(100% / 5);
        padding:0;
        margin:0;
        list-style-type: none;
        li{
          width:100%;
          text-align:left;
          margin:5px 0;
          padding-left:10px;
          &:first-child{
            padding:0;
          }
          a{
            font-weight: 300;
            &:hover{
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }

    }

  }
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
