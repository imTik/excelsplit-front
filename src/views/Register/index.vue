<!--  -->
<template>
  <div class="register" @click="globalClick" ref="global">
    <p>测试XY值点击</p>

    <span
      class="square"
      v-for="(squareIndex, index) in totalSquare"
      :key="index"
      :data-index="index"
    ></span>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";
import { ref, reactive, onMounted } from "vue";

let totalSquare = ref(3000);
const global = ref("child");

function globalClick(e) {
  console.log(e.clientX, e.clientY);
  console.log("global click: ", e.target);
}

function createSimulateClick() {
  let _event = null;
  return function (X, Y) {
    console.log("-----sumulate start-----");
    if (!_event) {
      console.log('首次创建MouseEvent事件');
      _event = document.createEvent("MouseEvents");
    };
    /**
     * typeArg - 指定事件类型。
     * canBubbleArg - 指定该事件是否可以 bubble。
     * cancelableArg - 指定是否可以阻止事件的默认操作
     * viewArg - 指定  Event 的  AbstractView。
     * detailArg - 指定  Event 的鼠标单击量。
     * screenXArg - 指定  Event 的屏幕 x 坐标
     * screenYArg - 指定  Event 的屏幕 y 坐标
     * clientXArg - 指定  Event 的客户机 x 坐标
     * clientYArg - 指定  Event 的客户机 y 坐标
     * ctrlKeyArg - 指定是否在  Event 期间按下 control 键。
     * altKeyArg - 指定是否在  Event 期间按下 alt 键。
     * shiftKeyArg - 指定是否在  Event 期间按下 shift 键。
     * metaKeyArg - 指定是否在  Event 期间按下 meta 键。
     * buttonArg - 指定  Event 的鼠标按键。
     * relatedTargetArg - 指定  Event 的相关  EventTarget。
     */
    _event.initMouseEvent("click", false, false, window, 2, 0, 0, X, Y, false, false, false, false, 1, null);
    global.value.dispatchEvent(_event);
    console.log("-----sumulate end-----\n\n\n");
  };
}

let simulateClick = createSimulateClick();

onMounted(() => {
  simulateClick(80, 20);

  setTimeout(() => {
    simulateClick(200, 460);
  }, 1000);
});
</script>

<style lang='less' scoped>
@import "../../style/index.less";
.register {
  position: relative;
  height: 100%;

  .square {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 1px;
    border: 1px solid @line;
  }
}
</style>