<!--
 * @Author: huangyanming
 * @Date: 2021/01/20 12:09:08
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/20 13:46:36
 * @Description: 描述
-->
<template lang="html">
  <div :class="$style.header">
    <span :class="$style.left">
     <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>
<script>
import btn from "../core/btn.vue";
export default {
  components: {
    btn,
  },
};
</script>
<style lang="scss" module>
.header {
  color: #666;
  height: 100px;
  line-height: 100px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-size: 32px;
  background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center
    center no-repeat;
  background-size: auto 50%;
  z-index: 100;
  .left {
    font-size: 28px;
    height: 30px;
    line-height: 30px;
    margin: 17px 0 0 18px;
  }
  .btnDownload {
    float: right;
    font-size: 24px;
    border-width: 0;
    line-height: 56px;
    min-width: 120px;
    padding: 0px;
    border-radius: 4px;
    margin: 28px 24px 0 0;
  }
}
</style>
