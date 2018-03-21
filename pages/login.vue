<template>
  <div>
    <p class="login-box-msg">Введите данные для доступа в админ панель</p>
    <form @submit.prevent="loginAdmin">
      <div class="form-group has-feedback">
        <input type="text" class="form-control" placeholder="Email" v-model="email" name="email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="Пароль" v-model="password" name="password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
  
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Войти</button>
        </div>
        <!-- /.col -->
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    middleware: 'noauth',
    data: () => {
      return {
        email: '',
        password: ''
      }
    },
    head () {
      return {
        title: 'Авторизация'
      }
    },
    methods: {
      loginAdmin () {
        this.$store.dispatch('actLogin', {
          email: this.email,
          password: this.password
        }).then(() => { this.$router.push('/admincp') })
      }
    }
  }
</script>

<style>
</style>
