<!--
 * @Author: huangyanming
 * @Date: 2021/01/23 12:28:04
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 12:29:34
 * @Description: 描述
-->

<template lang="html">
    <div>
       <Heador/>
       <Slider/>
       <Footer/>
       <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Footer from "../public/footer.vue";
import Slider from "./wslider.vue";
export default {
  components: {
    Heador,
    Navbar,
    Footer,
    Slider,
  },
};
</script>

<style lang="scss" module>
</style>
