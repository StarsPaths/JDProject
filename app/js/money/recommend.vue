<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 22:06:42
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/22 22:41:13
 * @Description: 描述
-->
<template>
  <Panel title="精选推荐" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>
          {{item.title}}
          <span>{{item.sub}}</span>
        </dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  data() {
    return {
      items: [
        {
          title: "定期理财",
          sub: "理财首选",
          rate: "5.60%",
          text: "历史年化回报率",
        },
        {
          title: "小白理财",
          sub: "理财首选",
          rate: "4.22%",
          text: "7日年化收益率",
        },
        {
          title: "月月盈",
          sub: "养老保障",
          rate: "5%",
          text: "七日年化收益率",
        },
        {
          title: "小白基金",
          sub: "天天赚钱",
          rate: "4.27%",
          text: "7日年化收益率",
        },
      ],
    };
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
    @include flex(row);
    box-sizing: border-box;
    &::after {
      content: "";
      display: block;
      border-bottom: 1px solid #ddd;
      width: 100%;
      height: 0;
      position: relative;
      box-sizing: border-box;
      margin-top: -208px;
    }
    .item {
      width: 50%;
      box-sizing: border-box;
      padding: 34px 16px;
      position: relative;
      &::after {
        content: "";
        display: block;
        border-right: 1px solid #ddd;
        width: 1px;
        height: 136px;
        right: 0;
        position: absolute;
        margin-top: -68px;
        top: 50%;
      }
      dt {
        font-size: 30px;
        line-height: 42px;
        color: #333;
        span {
          font-size: 22px;
          border: 1px solid #ff5155;
          color: #ff5155;
          padding: 0 8px;
          margin-left: 2px;
          vertical-align: 1px;
        }
      }
      dd {
        &:nth-of-type(1) {
          font-weight: 700;
          font-size: 44px;
          color: #ff5155;
          height: 58px;
          line-height: 58px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-of-type(2) {
          font-size: 24px;
          color: #999;
          height: 34px;
          line-height: 34px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
