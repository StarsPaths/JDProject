<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 23:03:01
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 08:25:59
 * @Description: 描述
-->
<template>
  <Panel title="理财精选" :class="$style.panel">
    <ul>
      <li>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
          alt
        />
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率</p>
        </div>
        <span>去赚钱&nbsp;</span>>
      </li>
      <li>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
          alt
        />
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率</p>
        </div>
        <span>去赚钱&nbsp;</span>>
      </li>
      <li>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
          alt
        />
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率</p>
        </div>
        <span>去赚钱&nbsp;</span>>
      </li>
    </ul>
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
  margin-bottom: 0;
  ul {
    @include flex;
    width: 100%;
    margin: 0;
    li {
      @include flex(row);
      align-items: center;
      box-sizing: border-box;
      border-top: 1px solid #ddd;
      height: 160px;
      color: #ddd;
      img {
        width: 88px;
        height: 88px;
        display: inline-block;
        margin: 0 32px;
      }
      div {
        width: 340px;

        h4 {
          font-weight: 700;
          font-size: 32px;
          color: #333;
          line-height: 1.8;
        }
      }
      p {
        color: #ff3232;
        font-size: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 160px;
      }
      span {
        color: #ff801a;
        font-size: 28px;
        font-weight: 700;
      }
    }
  }
}
</style>
