<!--
 * @Author: huangyanming
 * @Date: 2021/01/23 15:21:40
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 15:55:44
 * @Description: 描述
-->
<template>
  <Panel title="活动页" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.activeBack"></div>
      <btn :class="$style.btnDownload">立即下载</btn>
      <span>jingdongjinrong</span>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import btn from "../core/btn.vue";
export default {
  data() {
    return {};
  },
  components: {
    Panel,
    btn,
  },
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
html,
body {
  background: #fff;
}
.panel {
  @include panel;
  margin: 0 !important;
  > h4 {
    display: none;
  }
  .content {
    @include flex;
    width: 100%;
    height: 1136px;
    justify-content: center;
    align-items: center;
    .activeBack {
      background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?)
        center center no-repeat;
      width: 600px;
      height: 800px;
      background-size: contain;
      margin-top: -400px;
    }
    .btnDownload {
      font-size: 32px;
      color: #fff;
      background-color: #f1443e;
      padding: 5px;
      border-radius: 5px;
      height: 100px;
      line-height: 100px;
      width: 471px;
      background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
      box-shadow: 0 12px 32px 0 rgba(255, 159, 135, 0.6);
      position: fixed;
      bottom: 130px;
    }

    span {
      font-size: 24px;
      color: #eee;
      position: fixed;
      bottom: 24px;
    }
  }
}
</style>

