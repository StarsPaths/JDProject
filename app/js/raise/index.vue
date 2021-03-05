<!--
 * @Author: huangyanming
 * @Date: 2021/01/23 08:43:19
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 12:14:41
 * @Description: 描述
-->

<template lang="html">
    <div>
       <Heador/>
       <Slider/>
       <Daily/>
       <In/>
       <More/>
       <Footer  cname="mfooter"/>
       <Navbar/>
       
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Footer from "../public/footer.vue";
import Slider from "./rslider.vue";
import Daily from "./daily.vue";
import In from "./in.vue";
import More from "./more";
export default {
  components: {
    Heador,
    Navbar,
    Footer,
    Slider,
    Daily,
    In,
    More,
  },
};
</script>

<style lang="scss">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
