<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">後台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >優惠券</router-link
            >
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-outline-light">
        <a href="#" @click.prevent="signOut">登出</a>
      </button>
    </div>
  </nav>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    // 驗證方法
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)davidToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        console.log(token);
        const api = `${process.env.VUE_APP_API}api/user/check`;
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
          })
          .catch((err) => {
            alert(err.data.message);
            this.$router.push("/login"); // vue router的跳轉方法
          });
      } else {
        alert("您尚未登入。");
        this.$router.push("/login"); // vue router的跳轉方法
      }
    },
    signOut() {
      document.cookie = "hexToken=;expires;"; // 清除token
      alert("token 已清除");
      this.$router.push("/login"); // 回到登入頁面
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
