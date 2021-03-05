<!--
 * @Author: huangyanming
 * @Date: 2021/01/22 11:36:06
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/22 13:17:23
 * @Description: 描述
-->
<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <router-link :to="{name: item.title}">
          <dt>
            {{item.title}}
            <span>{{item.sub}}</span>
          </dt>
          <dd>{{item.rate}}</dd>
          <dd>{{item.text}}</dd>
        </router-link>
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
          text: "7日年化收益率",
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
    justify-content: space-around;
    &::after {
      content: " ";
      display: block;
      width: 100%;
      height: 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      position: relative;
      top: -208px;
    }

    .item {
      a {
        text-decoration: none;
      }
      &::after {
        content: "";
        display: block;
        height: 138px;
        width: 1px;
        position: absolute;
        right: 0;
        top: 20%;
        // margin-top: -68px;
        border-right: 1px solid #eee;
      }
      position: relative;
      width: 50%;
      padding: 34px 16px;
      box-sizing: border-box;
      dt {
        font-size: 30px;
        line-height: 42px;
        color: #333;
        span {
          font-size: 22px;
          color: #ff5255;
          border: 1px solid #ff1555;
          vertical-align: baseline;
          padding: 0 8px;
          margin-left: 2px;
        }
      }
      dd {
        &:nth-of-type(1) {
          font-size: 44px;
          font-weight: bold;
          color: #ff1555;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 58px;
          line-height: 58px;
        }
        &:nth-of-type(2) {
          height: 34px;
          line-height: 34px;
          font-size: 24px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
