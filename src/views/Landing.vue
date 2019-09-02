<template>
  <div class="landing">
    <div class="dark-overlay landing-inner text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="background">
              <h1>欢迎大家品尝pizza</h1>
              <h2>这里有你非常喜欢的pizza</h2>
              <hr />
              <router-link to="/menu" class="btn btn-lg btn-success">Let`s order!</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {},
  computed: mapGetters(["isLogin"])
};
</script>
<style scoped>
h1,
h2 {
  color: black;
}
.landing {
  position: relative;
  background: url("../assets/pizza.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  margin-top: -24px;
  margin-bottom: -50px;
}
.landing-inner {
  padding-top: 80px;
}
.btn {
  cursor: pointer;
}
.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
