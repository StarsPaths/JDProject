<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 22:44:38
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/22 23:01:56
 * @Description: 描述
-->
<template>
  <Panel title="理财专享" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"
        alt
      />
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
  > h4 {
    display: none;
  }
  .content {
    height: 180px;
    img {
      width: 100%;
      height: 142px;
      display: block;
    }
  }
}
</style>
