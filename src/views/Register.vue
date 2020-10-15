<template>
  <div>
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <van-field
      v-model="userName"
      required
      label="用户名"
      placeholder="请输入用户名"
      :error-message="userNameErrMsg"
      clearable
      @input="checkusername"
    />
    <van-field
      v-model="password"
      required
      label="密码"
      placeholder="请输入密码"
      :error-message="passwordErrMsg"
      clearable
      @input="checkpassword"
    />
    <van-field
      v-model="nickName"
      required
      label="昵称"
      placeholder="请输入昵称"
      :error-message="nickNameErrMsg"
      clearable
      @input="checknickName"
    />

    <hm-button @click.native="startRegister">注册</hm-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      nickName: '',
      password: '',
      userNameErrMsg: '',
      nickNameErrMsg: '',
      passwordErrMsg: '',
    }
  },
  methods: {
    // 注册按钮
   async startRegister() {
      console.log(123)
      if (
        this.userName !== '' &&
        this.nickName !== '' &&
        this.password !== '' &&
        this.userNameErrMsg === '' &&
        this.nickNameErrMsg === '' &&
        this.passwordErrMsg === ''
      ) {

       const res = await this.$axios
          .post('/register', {
            username: this.userName,
            password: this.password,
            nickname: this.nickName,
          })
            const { statusCode, message } = res.data
            console.log(res)
            if (statusCode === 200) {
              this.$toast.success(message)
              this.$router.push({
                name: 'login',
                params:{
                    username: this.userName,
                    password: this.password,
                }
              })
            } else {
              this.$toast.fail(message)
            }
      } else {
        this.$toast.fail('校验失败')
      }
    },
    // 用户名表单校验
    checkusername() {
      const reg = /^1\d{3,5}$/
      if (reg.test(this.userName)) {
        this.userNameErrMsg = ''
      } else {
        this.userNameErrMsg = '用户名格式错误'
      }

      if (this.userName === '') {
        this.userNameErrMsg = ''
      }
    },
    // 密码表单校验
    checkpassword() {
      const reg = /^\d{3,12}$/
      if (reg.test(this.password)) {
        this.passwordErrMsg = ''
      } else {
        this.passwordErrMsg = '密码格式错误'
      }

      if (this.password === '') {
        this.passwordErrMsg = ''
      }
    },
    // 昵称表单校验
    checknickName() {
      const reg = /^[\u4e00-\u9fa5]{3,7}$/
      if (reg.test(this.nickName)) {
        this.nickNameErrMsg = ''
      } else {
        this.nickNameErrMsg = '昵称格式错误'
      }

      if (this.nickName === '') {
        this.nickNameErrMsg = ''
      }
    },
  },
}
</script>

<style></style>
