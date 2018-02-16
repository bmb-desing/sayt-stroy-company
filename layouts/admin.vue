<template>
  <div class="wrapper">
    <admin-head></admin-head>
    <admin-menu></admin-menu>
    <div class="content-wrapper">
      <nuxt/>
    </div>
  </div>
</template>
<script>
  import AdminHead from '../components/admin/AdminHead.vue'
  import AdminMenu from '../components/admin/AdminMenu.vue'
  export default {
    components: {
      AdminHead,
      AdminMenu
    },
    middleware: 'auth',
    head () {
      return {
        bodyAttrs: {
          class: 'skin-blue sidebar-mini'
        },
        link: [
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/AdminLTE.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.0.0-9/css/ionicons.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/skins/skin-blue.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/skins/_all-skins.min.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic' }
        ],
        script: [
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js', body: true },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js', body: true },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js', body: true },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/js/app.min.js', body: true }
        ]
      }
    }
  }
</script>
