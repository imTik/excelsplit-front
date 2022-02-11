<!--  -->
<template>
  <div class="e-input">
    <input :type="type === 'password' ? 'password' : 'text'" :value="modelValue" @input="updateValue($event.target.value)" />
    <span class="e-input_label" :class="[modelValue ? 'e-input_label-active' : '']">{{ label }}</span>
    <p class="error-tips" v-show="errorControl">{{ errorTips }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, computed } from 'vue';

let props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  maxLength: {
    type: [String, Number],
    default: 20,
  },
  errorTips: {
    type: String,
    default: '',
  },
  errorControl: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

function updateValue(newValue) {
  emit('update:modelValue', newValue);
}

// 监听字数
watch(() => props.modelValue, limit);

// 输入框字数限制
function limit(n, o) {
  if (props.type.toLowerCase() === 'number') {
    updateValue(String(n).replace(/\D/g, ''));
  }
  if (String(n).length > Number(props.maxLength)) {
    updateValue(o);
  }
}
</script>

<style lang="less" scoped>
@import '../../style/index.less';
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
