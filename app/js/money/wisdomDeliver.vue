<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 23:40:20
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 08:25:30
 * @Description: 描述
-->
<template lang="html">
    <Panel title="京东智投" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel,
  },
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  margin: 0;
  > h4 {
    display: none;
  }
  .content {
    height: 132px;

    img {
      width: 100%;
      height: 132px;
    }
  }
}
</style>
