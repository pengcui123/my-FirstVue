<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <img src="../assets/image/54205424_big.jpg" alt="我是一只大芒果哟" />
      <p class="site-title">大芒果，大芒果，好大的芒果呀</p>
      <!-- <router-link to="/detail/msg"> -->
        <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！包邮！！！</p>
        <div class="input">
          <router-link class="inputL" to="/shoppingCart">加入购物车</router-link>
          <router-link class="inputR" to="/orderNow">立即购买</router-link>
        </div>
      <!-- </router-link> -->
      <div class="show">
        <router-view></router-view>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from '../components/goodsHeader'
import CommonFooter from '../components/commonFooter'

export default {
  data () {
    return {

    }
  },
  components: {
    DetailHeader,
    CommonFooter
  }
}
</script>

<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  p.site-cont {
    color: #666;
    font-size: 0.9rem;
  }
  div.show{
    color: #f00;
    font-size: 0.9rem;
  }
  .input{
    margin-left:6.4rem;
    margin-top:3rem;
  }
  .inputL,.inputR {
    color: white;
    font-size:0.8rem;
    padding:0.4rem;
    text-align: center;
    background-color:#ff8000;
    border-radius:1rem;
  }
</style>
