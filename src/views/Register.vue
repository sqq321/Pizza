<template>
  <div class="register">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
          <div class="card">
            <div class="card-body">
              <img class="mx-auto d-block" src="../assets/login.png" alt />
              <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
                邮箱
                <TextFieldGroup
                  v-model="newUser.email"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  info=" This site uses Gravatar so if you want a profile image, use a
              Gravatar email"
                  :error="errors.email"
                />密码
                <TextFieldGroup
                  v-model="newUser.password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  :error="errors.password"
                />确认密码
                <TextFieldGroup
                  v-model="newUser.password2"
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  :error="errors.password2"
                />

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
// import { maxHeaderSize } from "http";
import { constants } from "crypto";
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "register",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  components: {
    TextFieldGroup
  },
  methods: {
    handleSubmit() {
      console.log(this.newUser);
      this.$axios
        .post(
          "https://wd4565587092snmqvb.wilddogio.com/sqqusers.json",
          this.newUser
        )
        .then(res => {
          console.log("000");
          this.errors = {};
          this.$router.push("/login");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>


<style scoped>
/*  */
</style>

 