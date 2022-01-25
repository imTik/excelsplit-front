<!--  -->
<template>
  <div class="e-input">
    <input :type="type" v-model="inputVal" :placeholder="placeholder" />
    <span class="e-input_label" :class="[inputVal ? 'e-input_label-active' : '']">{{ label }}</span>
    <p class="error-tips"></p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
});
let inputVal = ref('');
</script>

<style lang="less" scoped>
@import '../style/index.less';
.e-input {
  position: relative;

  input {
    width: 100%;
    height: 45px;
    padding: 5px 8px;
    box-sizing: border-box;
    border: 1px solid @line;
    outline: none;
    border-radius: 4px;
    transition: all 0.4s;
    color: @text;
  }

  .e-input_label {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 8px;
    font-size: @s;
    transform: translateY(-50%);
    padding: 0 3px;
    background: @white;
    color: @text;
    transition: all 0.4s;
    pointer-events: none;
  }

  .e-input_label-active {
    top: -5%;
  }

  .active {
    border-color: @pink;
    box-shadow: 0 0 5px #facfd4;
  }

  input:focus {
    .active();
  }
  input:focus + .e-input_label {
    .e-input_label-active();
  }

  .error-tips {
    position: absolute;
    bottom: -22px;
    font-size: @xs;
    color: @red;
  }
}

.e-input + .e-input {
  margin-top: 30px;
}
</style>
