<!--
 * @Author: huangyanming
 * @Date: 2021/01/19 17:57:24
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/22 16:37:06
 * @Description:入口文件： 层次分明，干净，不涉及任何业务内容，但是控制该页面所有布局
-->

<template lang="html">
    <div>
       <Heador/>
       <Slider/>
       <Novice/>
       <Borrow/>
       <Money/>
       <Product/>
       <Life/>
       <Footer/>
       <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Navbar from "../public/navbar.vue";
import Footer from "../public/footer.vue";
import Slider from "./hslider.vue";
import Novice from "./novice.vue";
import Borrow from "./borrow.vue";
import Money from "./money.vue";
import Product from "./product.vue";
import Life from "./life.vue";
export default {
  components: {
    Heador,
    Navbar,
    Footer,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
  },
};
</script>

<style lang="scss" module>
</style>
