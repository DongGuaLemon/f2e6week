<template>
<div class="home">
  <div class="hometop" :style="height">
    <div class="hometilte">
      <img alt="hotel logo" src="../assets/pic_S26427394.png" />
      <div class="follow">
        <span class="notice">Follow Us!</span>
        <img class="notice" alt="ig" src="../assets/Icon_instagram.svg" />
        <img class="notice" alt="fb" src="../assets/Icon_facebook.svg" />
      </div>
    </div>
    <img class="aniimg" src="../assets/Icon_chevronsdown.svg" />
  </div>
    <hotelcard />
    <footers />
</div>
</template>

<script>
// @ is an alias to /src
import hotelcard from '../components/hotelcard.vue'
import footers from '../components/footer.vue'
export default {
  name: "home",
  data() {
    return {
      height:'height:90vh'
    }
  },
  components: {
    hotelcard,
    footers
  },
  created(){
    console.log(window.innerHeight)
    let h=window.innerHeight
    this.height=`height:${h-56}px`
  }
};
</script>
<style>
.home{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hometop {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.aniimg {
  animation: shake 1s infinite;
}
@keyframes shake {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.hometilte {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.follow {
  display: flex;
  justify-content: flex-end;
}
.notice {
  margin-right: 20px;
  font: Bold 18px/21px Arial Rounded MT;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
  line-height: 50px;
}
</style>