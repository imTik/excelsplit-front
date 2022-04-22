<!--  -->
<template>
  <div class="register">
    <componentLists></componentLists>

    <div
      @drop="drop($event)"
      @dragover="dragover($event)"
      class="register-main"
    >
      <template v-for="(component, index) in pageData" :key="index">
        <div
          class="component-box"
          v-if="component.type === 'button'"
          draggable="true"
          :data-index="index"
          @dragstart="moveComponent($event)"
        >
          <span class="del" @click="deleteCompinent(index)">删除</span>
          <NButton>{{ component.text }}</NButton>
        </div>

        <div
          class="component-box"
          v-else-if="component.type === 'input'"
          draggable="true"
          :data-index="index"
          @dragstart="moveComponent($event)"
        >
          <span class="del" @click="deleteCompinent(index)">删除</span>
          <NInput :placeholder="component.text"></NInput>
        </div>

        <div
          class="component-box"
          v-else-if="component.type === 'checkbox'"
          draggable="true"
          :data-index="index"
          @dragstart="moveComponent($event)"
        >
          <span class="del" @click="deleteCompinent(index)">删除</span>
          <NCheckboxGroup v-model:value="component.value">
            <NCheckbox
              v-for="(item, iIndex) in component.items"
              :key="iIndex"
              :value="item.value"
              >{{ item.label }}</NCheckbox
            >
          </NCheckboxGroup>
        </div>

        <div
          class="component-box"
          v-else-if="component.type === 'radio'"
          draggable="true"
          :data-index="index"
          @dragstart="moveComponent($event)"
        >
          <span class="del" @click="deleteCompinent(index)">删除</span>
          <NRadio>{{ component.text }}</NRadio>
        </div>

        <div
          class="component-box"
          v-else-if="component.type === 'select'"
          draggable="true"
          :data-index="index"
          @dragstart="moveComponent($event)"
        >
          <span class="del" @click="deleteCompinent(index)">删除</span>
          <NSelect :placeholder="component.text"></NSelect>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {
  NButton,
  NInput,
  NCheckboxGroup,
  NCheckbox,
  NRadioGroup,
  NRadio,
  NSelect,
} from "naive-ui";
import { ref, reactive } from "vue";
import { componentFactory } from "./componentFactory";
import componentLists from "./components/compoentLists.vue";

let pageData = ref([]);
function drop(e) {
  let type = e.dataTransfer.getData("type");
  let moveIndex = e.dataTransfer.getData("index");
  let dropIndex = whileFindIndex(e);

  if (type) {
    addComponent(type);
    type = null;
    console.log(pageData.value);
    let len = pageData.value.length;
    pageData.value[len-1].getType();
  }

  if (moveIndex && dropIndex) {
    transpositionCompoent(dropIndex, moveIndex);
  }
}

function addComponent(type) {
  let _component = componentFactory(type);
  pageData.value.push(_component);
  type = null;
}

function transpositionCompoent(drop, move) {
  let _moveComponent = pageData.value.splice(drop, 1, pageData.value[move]);
  pageData.value.splice(move, 1, _moveComponent[0]);
}

function whileFindIndex(e) {
  const parentEl = e.currentTarget;
  let el = e.target;
  let _index = el.getAttribute("data-index");
  while (!_index && el.tagName !== "BODY") {
    el = el.parentNode;
    _index = el.getAttribute("data-index");
  }
  return _index;
}

function dragover(e) {
  e.preventDefault();
}

function deleteCompinent(index) {
  pageData.value.splice(index, 1);
}

function moveComponent(e) {
  let index = e.target.getAttribute("data-index");
  e.dataTransfer.setData("index", index);
}
</script>

<style lang='less' scoped>
@import "../../style/index.less";
.register {
  position: relative;
  height: 100%;
  .register-main {
    position: relative;
    height: 100%;
    margin-left: 300px;
    margin-right: 400px;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;

    .component-box {
      position: relative;
      padding: 8px;
      margin-bottom: 2px;
      box-sizing: border-box;
      border: 1px solid @line;
      transition: all 0.2s;
      &:hover {
        border-color: @green;
        .move,
        .del {
          display: inline-block;
        }
      }

      .del {
        display: none;
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 12px;
        color: @green;
        cursor: pointer;
        z-index: 99;
      }
    }
  }
}
</style>