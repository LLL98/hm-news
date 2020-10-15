<template>
  <div>
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <van-field
      v-model="username"
      required
      label="用户名"
      placeholder="请输入用户名"
      :error-message="usernameErrMsg"
      clearable
      @input="checkUsername"
      @clear="clearUsername"
    />
    <van-field
      v-model="password"
      required
      label="密码"
      placeholder="请输入密码"
      :error-message="passwordErrMsg"
      clearable
      @input="checkPassword"
      @clear="clearPassword"
    />
    <van-field
      v-model="nickname"
      required
      label="昵称"
      placeholder="请输入昵称"
      :error-message="nicknameErrMsg"
      clearable
      @input="checkNickname"
      @clear="clearNickname"
    />
    <hm-button @click.native="staetRegister">注册</hm-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      usernameErrMsg: '',
      passwordErrMsg: '',
      nicknameErrMsg: '',
    }
  },
  methods: {
    // 用户名校验
    checkUsername() {
      const reg = /^\d{3,6}$/
      if (reg.test(this.username)) {
        this.usernameErrMsg = ''
      } else {
        this.usernameErrMsg = '用户名格式错误'
      }

      if (this.username === '') {
        this.usernameErrMsg = ''
      }
    },
    // 点击x 清空用户名 错误提示信息
    clearUsername() {
      this.usernameErrMsg = ''
    },
    // 密码效验
    checkPassword() {
      const reg = /^\d{3,12}$/

      if (reg.test(this.password)) {
        this.passwordErrMsg = ''
      } else {
        this.passwordErrMsg = '用户名格式错误'
      }

      if (this.password === '') {
        this.passwordErrMsg = ''
      }
    },
    // 点击x 清空密码 错误提示信息
    clearPassword() {
      this.passwordErrMsg = ''
    },
    // 昵称效验
    checkNickname() {
      const reg = /^[\u4e00-\u9fa5]{3,7}$/

      if (reg.test(this.nickname)) {
        this.nicknameErrMsg = ''
      } else {
        this.nicknameErrMsg = '用户名格式错误'
      }
      if (this.nickname === '') {
        this.nicknameErrMsg = ''
      }
    },
    // 点击x 清空昵称 错误提示信息
    clearNickname() {
      this.nicknameErrMsg = ''
    },
    // 注册按钮
    staetRegister() {
      if (
        this.username !== '' &&
        this.password !== '' &&
        this.nickname !== '' &&
        this.usernameErrMsg === '' &&
        this.passwordErrMsg === '' &&
        this.nicknameErrMsg === ''
      ) {
        this.$axios
          .post('/register', {
            username: this.username,
            password: this.password,
            nickname: this.nickname,
          })
          .then(res => {
            const { statusCode, message } = res.data

            if (statusCode === 200) {
              this.$toast.success(message)
              this.$router.push({
                name: 'login',
                params: {
                  username: this.username,
                  password: this.password,
                },
              })
            } else {
              this.$toast.fail(message)
            }
          })
      } else {
        this.$toast.fail('校验失败')
      }
    },
  },
}
</script>

<style></style>
