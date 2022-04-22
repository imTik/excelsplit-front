<template>
  <div class="register-component_lists">
    <button class="component-btn" data-type="button" draggable="true" @dragstart="move($event)">按钮</button>
    <button class="component-btn" data-type="input" draggable="true" @dragstart="move($event)">输入框</button>
    <button class="component-btn" data-type="checkbox" draggable="true" @dragstart="move($event)">多选</button>
    <button class="component-btn" data-type="radio" draggable="true" @dragstart="move($event)">单选</button>
    <button class="component-btn" data-type="select" draggable="true" @dragstart="move($event)">下拉菜单</button>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'

function move(e) {
  const componentType = e.target.getAttribute('data-type');
  e.dataTransfer.setData('type', componentType);
}
</script>

<style lang='less' scoped>
@import '../../../style/index.less';

.register-component_lists {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  padding: 5px;
  box-sizing: border-box;
  background: @white;

  .component-btn {
    margin: 5px 5px;
    padding: 5px 12px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid @line;
    background: @white;
    color: @normal;
    transition: all .2s;

    &:hover {
      color: @green;
      border-color: @green;
    }
  }
}
</style>