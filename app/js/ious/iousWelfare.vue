<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 23:03:01
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 08:41:50
 * @Description: 描述
-->
<template>
  <Panel title="白条福利" :class="$style.panel">
    <ul>
      <li>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
          alt
        />
        <div>
          <h4>开通白条</h4>
          <p>送188大礼包</p>
        </div>
        <span>立即开通&nbsp;</span>>
      </li>
      <li>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"
          alt
        />
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率</p>
        </div>
        <span>立即开通&nbsp;</span>>
      </li>
      <li>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"
          alt
        />
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率</p>
        </div>
        <span>立即开通&nbsp;</span>>
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
        width: 320px;

        h4 {
          font-weight: 700;
          font-size: 32px;
          color: #333;
          line-height: 1.8;
        }
      }
      p {
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
