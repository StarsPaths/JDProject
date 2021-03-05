<!--
 * @Author: huangyanming
 * @Date: 2021/01/23 08:44:08
 * @LastEditors: huangyanming
 * @LastEditTime: 2021/01/23 09:27:44
 * @Description: 描述
-->
<template>
  <Panel title="头部轮播图" :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="options">
        <swiper-slide>
          百万白条券免费送，速来领取！！
          <em>></em>
        </swiper-slide>
        <swiper-slide>
          签到领流量，1元500M！
          <em>></em>
        </swiper-slide>
      </swiper>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: "vertical",
      },
    };
  },
  components: { Panel, swiper, swiperSlide },
};
</script>
<style lang="scss">
.swiper-container-vertical {
  height: 72px;
  .swiper-slide {
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #333;
    em {
      float: right;
      color: #ddd;
      margin-right: 20px;
    }
  }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  & > h4 {
    display: none;
  }
  margin: 0;
  .content {
    box-sizing: border-box;
    margin-top: 101px;
    overflow: hidden;
    height: 72px;
    line-height: 72px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left
      top no-repeat;
    padding-left: 178px;
  }
}
</style>
