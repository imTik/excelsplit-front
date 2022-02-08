<!--  -->
<template>
  <n-message-provider>
    <div class="home login">
      <div class="login-main">
        <div class="login-main_left">
          <p>您好 陌生人。</p>
        </div>

        <div class="login-main_right">
          <h1 class="right-title">Log In</h1>
          <e-input label="手机号码" v-model="loginForm.phone" type="number" maxLength="11" />
          <e-input label="密码" v-model="loginForm.password" type="password" />

          <div class="right-remember">
            <n-config-provider :theme-overrides="themeOverrides">
              <n-checkbox v-model:checked="remember">记住我</n-checkbox>
            </n-config-provider>
          </div>

          <div class="right-bottom">
            <n-button class="login-btn" color="#f38181" @click="login">登录</n-button>
            <p class="right-bottom_register">还没有账号？<router-link to="/register">立即注册></router-link></p>
          </div>
        </div>
      </div>

      <p class="record-info"><a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022003218号</a></p>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { NButton, NCheckbox, NConfigProvider, NMessageProvider, useMessage } from 'naive-ui';
import EInput from '../../components/EInput.vue';
import themeOverrides from '../../style/naiveui.config';
import SESSION from '../../utils/Session';
import { loginApi } from '../../api/index';

let loginForm = reactive({
  phone: '',
  password: '',
});
let remember = ref(false);
initRemember();


function initRemember() {
  let sessionRemember = SESSION.get('EXCEL_REMEMBER', remember.value);
  if (sessionRemember !== null) {
    remember.value = sessionRemember;

    if (sessionRemember) {
      loginForm.phone = SESSION.get('EXCEL_PHONE');
    }
  }
}

async function login() {
  const message = useMessage();
  if (loginForm.phone === '') {
    alert('请输入手机号码');
    return;
  } else if (loginForm.password === '') {
    alert('请输入密码');
    return;
  }

  SESSION.set('EXCEL_REMEMBER', remember.value);
  remember.value ? SESSION.set('EXCEL_PHONE', loginForm.phone) : SESSION.del('EXCEL_PHONE');

  let result = await loginApi(loginForm);
  console.log('登录结果：', result);
}
</script>

<style lang="less" scoped>
@import '../../style/index.less';
.login {
  display: flex;
  flex-wrap: wrap;
  min-width: 1200px;
  box-sizing: border-box;

  .record-info {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    a {
      transition: all 0.2s;
      color: @secondary;
    }
    a:hover {
      color: @text;
    }
  }

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
        margin-top: 80px;
        margin-bottom: 80px;
        text-align: center;
        font-size: 36px;
        color: @text;
      }

      .right-remember {
        margin-top: 5px;
        font-size: @s;
        span {
          display: inline-block;
          margin-left: 4px;
        }
      }

      .right-bottom {
        margin-top: 60px;

        .login-btn {
          width: 100%;
          height: 45px;
        }

        .right-bottom_register {
          margin-top: 10px;
          font-size: @s;
          text-align: right;

          a {
            text-decoration: underline;
            color: @green;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
