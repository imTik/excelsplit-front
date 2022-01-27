<!--  -->
<template>
  <div class="home login">
    <div class="login-main">
      <div class="login-main_left">
        <p>您好 陌生人。</p>
      </div>

      <div class="login-main_right">
        <h1 class="right-title">Log In</h1>
        <e-input label="手机号码" v-model="loginForm.phone" maxLength="11" />
        <e-input label="密码" v-model="loginForm.password" type="password" />

        <div class="right-bottom">
          <n-button class="login-btn" color="#f38181" @click="login">登录</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { NButton, NInput, NForm, NFormItem } from 'naive-ui';
import EInput from '../../components/EInput.vue';

let loginForm = reactive({
  phone: '',
  password: '',
});

function login() {
  console.log('登录手机号码：', loginForm);
}
</script>

<style lang="less" scoped>
@import '../../style/index.less';
.login {
  display: flex;
  flex-wrap: wrap;
  min-width: 1200px;
  box-sizing: border-box;

  .login-main {
    display: flex;
    width: 1000px;
    height: 600px;
    margin: auto;
    box-sizing: border-box;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    background: @white;
    overflow: hidden;

    .login-main_left {
      padding: 20px;
      height: 100%;
      width: 600px;
      flex-shrink: 0;
      box-sizing: border-box;
      color: @white;
      background: #f38181;
      background: linear-gradient(0, #ffc0b7, #f38181);
    }

    .login-main_right {
      padding: 20px 40px;
      width: 100%;
      box-sizing: border-box;

      .right-title {
        margin-top: 40px;
        margin-bottom: 80px;
        text-align: center;
        font-size: 36px;
        color: @text;
      }

      .right-bottom {
        margin-top: 80px;

        .login-btn {
          width: 100%;
          height: 45px;
        }
      }
    }
  }
}
</style>
