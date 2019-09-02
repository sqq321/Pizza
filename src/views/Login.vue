<template>
  <div class="login">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
          <div class="card">
            <div class="card-body">
              <img class="mx-auto d-block" src="../assets/login.png" alt />
              <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
                <div class="form-group">
                  邮箱
                  <input
                    v-model="user.email"
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    :class="{'is-invalid':errors.email}"
                  />
                  <div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>
                </div>
                <!-- <TextFieldGroup
                v-model="user.email"
                type="email"
                placeholder="Email Address"
                name="email"
                :error="errors.email"
                />-->
                <div class="form-group">
                  密码
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    :class="{'is-invalid':errors.password}"
                  />
                  <div v-if="errors.password" class="invalid-feedback">{{errors.password}}</div>
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  components: {
    TextFieldGroup
  },
  methods: {
    handleSubmit() {
      // console.log(this.user);
      this.$axios
        .get(
          "https://wd4565587092snmqvb.wilddogio.com/sqqusers.json",
          this.user
        )
        .then(res => {
          console.log(res.data);
          console.log(this.user);
          var loginstatus = false;
          for (var aaa in res.data) {
            if (
              this.user.email == res.data[aaa].email &&
              this.user.password == res.data[aaa].password
            ) {
              loginstatus = true;
              console.log("找到该用户");
              this.$router.push("/");
            } else {
              alert("请输入正确的用户名和密码！");
            }
          }
        });
    }
  }
};
</script>


<style scoped>
</style>
