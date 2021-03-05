<!--
 * @Author: huangyanming
 * @Date: 2021/01/23 08:32:36
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 08:38:41
 * @Description: 描述
-->

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
      <IousWelfare/>
       <Footer/>
       <Navbar/>
       
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Footer from "../public/footer.vue";
import Slider from "./islider.vue";
import IousWelfare from "./iousWelfare";

export default {
  components: {
    Heador,
    Navbar,
    Footer,
    Slider,
    IousWelfare,
  },
};
</script>

<style lang="scss">
</style>
