<!--
 * @Author: huangyanming
 * @Date: 2021/01/23 12:11:32
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 12:17:07
 * @Description: 描述
-->
<template>
  <Panel title="更多福利" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"
        alt
      />
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"
        alt
      />
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
        alt
      />
      <span>专享福利 ></span>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  data() {
    return {};
  },
  components: {
    Panel,
  },
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    padding-bottom: 60px;
    justify-content: space-around;
    position: relative;
    @include flex(row);
    > img {
      width: 33.333333%;
      height: 280px;
    }
    span {
      position: absolute;
      top: -112px;
      right: 20px;
      font-size: 25px;
      color: #999;
      height: 112px;
      line-height: 112px;
    }
  }
}
</style>
