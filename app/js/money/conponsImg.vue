<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 21:52:25
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/22 22:03:55
 * @Description: 描述
-->
<template>
  <Panel title="神券满" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270"
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
  & > h4 {
    display: none;
  }
  .content {
    img {
      width: 100%;
      height: 230px;
      display: block;
    }
  }
}
</style>
