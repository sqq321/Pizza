<template>
  <!-- 导航 -->
  <nav class="navbar navbar-expand-sm navbar-light bg-light mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">Pizaa点餐系统</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">主页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">菜单</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/person">关于我们</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li v-if="isLogin" class="nav-item">
            <router-link class="nav-link" to="/dashboard">dashboard</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li v-if="isLogin && user!=null" class="nav-item">
            <a class="nav-link" @click.prevent="logout">
              <img class="rounded-circle headerImg" :src="user.avatar" />
              退出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app-nav",
  computed: mapGetters(["isLogin", "user"]),
  methods: {
    logout() {
      //干掉ls
      localStorage.removeItem("jwtToken");
      //vuex状态初始化
      this.$store.dispatch("setIsLoginAsync", false);
      this.$store.dispatch("setProfileAsync", null);
      this.$store.dispatch("setUserAsync", null);

      //页面跳转
      this.$router.push("/login");
    }
  }
};
</script>


<style scoped>
.headerImg {
  width: 25px;
  margin-right: 5px;
}
</style>
