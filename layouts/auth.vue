<template>
  <div>
    <div class="login-box">
      <div class="login-logo">
        <nuxt-link to="/"><b>Admin</b>LTE</nuxt-link>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body" style="background: #d2d6de">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        link: [
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/AdminLTE.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/skins/skin-blue.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic' }
        ],
        script: [
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js', body: true },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js', body: true },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/js/app.min.js', body: true }
        ]
      }
    }
  }
</script>

<style>
</style>
