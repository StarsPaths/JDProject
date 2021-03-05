<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 17:51:56
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 08:11:30
 * @Description: 描述
-->
<template lang="html">
    <div>
       <Heador/>
       <Slider/>
       <ConponsImg/>
       <Recommend/>
       <FinancialShare/>
       <FinancialChose/>
       <WisdomDeliver/>
       <Footer  cname="mfooter"/>
       <Navbar/>
       
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Footer from "../public/footer.vue";
import Slider from "./mslider.vue";
import ConponsImg from "./conponsImg.vue";
import Recommend from "./recommend.vue";
import FinancialShare from "./financialShare";
import FinancialChose from "./financialChose";
import WisdomDeliver from "./wisdomDeliver";
export default {
  components: {
    Heador,
    Navbar,
    Footer,
    Slider,
    ConponsImg,
    Recommend,
    FinancialShare,
    FinancialChose,
    WisdomDeliver,
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
