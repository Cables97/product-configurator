<template>
    <div class="email-input">
        <input  type="email" id="email" name="email" placeholder="Email Address.." required>
        <button type="submit" @click="emailVerify">SUBSCRIBE</button>
        <h4 class="email-input-fail" id="e-i-fail">Please enter a proper email</h4>
        <h4 class="email-input-success" id="e-i-success">Success! (Nothing really happened)</h4>
    </div>
</template>

<script setup>

const email = "";

function emailVerify(){
    console.log(document.getElementById("email").value)
    let input = document.getElementById("email").value
    const fail = document.getElementById("e-i-fail")
    const success = document.getElementById("e-i-success")
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

    if(emailRegex.test(input)){
        success.style.display = "inherit";
        
    } else {
        fail.style.display = "inherit";
    }

    setTimeout(() => {
        fail.style.display = "none";
        success.style.display = "none";
    }, 2000);
    document.getElementById("email").value = ""
}

</script>

<style lang="scss">

.email-input{
    position: relative;
    height:55px;
    width:360px;
    margin: 20px 0;
    input{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        height:calc(100% - 10px);
        width:calc(100% - 10px);
        border-radius: 5px 30px 30px 5px;
        border:2px solid white;
        padding-left:10px;
        color:black;
        @include text-Inter(16px, 400);
    }

    button{
        position:absolute;
        top:50%;
        right:5px;
        transform: translate(0,-50%);
        height:calc(100% - 10px);
        width:100px;
        aspect-ratio: 1;
        border-radius: 5px 30px 30px 5px;
        border:2px solid var(--color-buttons);
        background-color: var(--color-buttons);
        color:white;
        transition: all 0.5s;
        @include text-Inter(12px, 600);
        &:hover{
            background-color:var(--color-button-active);
            cursor: pointer;
        }
    }

    .email-input-fail{
        position:absolute;
        bottom:-1.5em;
        left:1em;
        color:red;
        display:none;
        @include text-Inter(16px, 600);
    }
    .email-input-success{
        position:absolute;
        bottom:-1.5em;
        left:1em;
        color:var(--color-buttons);
        display:none;
        @include text-Inter(16px, 600);
    }
}

</style>