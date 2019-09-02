<template>
  <form @submit.prevent="handleSubmit">
    <h3>添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" name="type" v-model="newPizza.name" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea class="form-control" rows="5" name="desc" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p>
      <strong>选项1</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.options[0].size" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.options[0].price" />
      </div>
    </div>
    <p>
      <strong>选项2</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.options[1].size" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.options[1].price" />
      </div>
    </div>
    <div class="form-group row">
      <button type="submit" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "admain",
  data() {
    return {
      newPizza: {
        name: "",
        description: "",
        options: [{ price: "", size: "" }, { price: "", size: "" }]
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post(
          "https://wd4565587092snmqvb.wilddogio.com/menus.json",
          this.newPizza
        )
        .then(res => {
          console.log(res.data);
          this.errors = {};
          this.$router.push("/admin");
          this.$emit("adminGet");
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

<style lang="scss" scoped>
</style>