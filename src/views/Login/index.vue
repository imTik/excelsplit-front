<!--  -->
<template>
  <div class="home login">
    <div class="login-main">

      <div class="login-main_left">
        <p>您好 陌生人。</p>
      </div>
      
      <div class="login-main_right">
        <h1 class="right-title">Log In</h1>
        <e-input label="用户名" />
        <e-input label="入密码" type="password" />

        <div class="right-bottom">
          <n-button class="login-btn" color="#ffdde1">登录</n-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { NButton, NInput, NForm, NFormItem } from 'naive-ui';
import EInput from '../../components/EInput.vue';
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
    box-shadow: 0 10px 20px -5px rgba(0,0,0,.06);
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
      background: @blue;
      background: linear-gradient(90deg,#F7BB97,#ffdde1);
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
        color: @blue;
        color: transparent;
        background-image: linear-gradient(90deg, #ee9ca7, #ffdde1);
        background-clip: text;
        -webkit-background-clip: text;
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
