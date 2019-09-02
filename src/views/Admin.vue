<template>
  <div class="admin">
    <div class="manage-menu manage-left">
      <h3>添加新的Pizza</h3>
      <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
        <div class="manage-inp">
          <label>品种</label>
          <input
            v-model="newFood.name"
            name="name"
            :error="errors.name"
            class="inp-text"
            type="text"
          />
        </div>
        <div class="manage-inp">
          <label>描述</label>
          <textarea
            v-model="newFood.description"
            name="description"
            :error="errors.description"
            class="inp-text"
          ></textarea>
        </div>
        <p>选项1</p>
        <div class="manage-inp">
          <label>尺寸</label>
          <input v-model="newFood.options[0].size" class="inp-text" type="text" />
        </div>
        <div class="manage-inp">
          <label>价格</label>
          <input v-model="newFood.options[0].price" class="inp-text" type="text" />
        </div>
        <p>选项2</p>
        <div class="manage-inp">
          <label>尺寸</label>
          <input v-model="newFood.options[1].size" class="inp-text" type="text" />
        </div>
        <div class="manage-inp">
          <label>价格</label>
          <input v-model="newFood.options[1].price" class="inp-text" type="text" />
        </div>
        <input type="submit" class="submitBtn" value="提交" />
      </form>
    </div>
    <div class="manage-menu manage-right">
      <h3>菜单</h3>
      <div>
        <table>
          <tr>
            <th>品类</th>
            <th>删除</th>
          </tr>
          <tr v-for="(item,index) in food" :key="index">
            <td>{{item.name}}</td>
            <td>
              <button @click.prevent="deleteItem(index)" class="btn btn-outline-danger btn-sm">×</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    return {
      newFood: {
        name: "",
        description: "",
        options: [{ size: "", price: "" }, { size: "", price: "" }]
      },
      food: null,
      errors: {}
    };
  },
  created() {
    this.showMenu();
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post(
          "https://wd4565587092snmqvb.wilddogio.com/menus.json",
          this.newFood
        )
        .then(res => {
          //   console.log(this.newFood);
          console.log(res.data);
          // this.food = res.data;
          // this.errors = {};
          //   this.$router.push("/login");
          this.showMenu();
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    showMenu() {
      this.$axios
        .get("https://wd4565587092snmqvb.wilddogio.com/menus.json", this.food)
        .then(res => {
          this.food = res.data;
          console.log(this.food);
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    deleteItem(index) {
      // console.log(index);
      this.$axios
        .delete(`https://wd4565587092snmqvb.wilddogio.com/menus/${index}.json`)
        .then(res => {
          this.showMenu();
        });
    }
  }
};
</script>

<style scoped>
.manage {
  width: 85%;
  margin: auto;
  overflow: hidden;
}
.manage-menu {
  float: left;
}
.manage-left {
  width: 75%;
}
.manage-right {
  width: 25%;
  box-sizing: border-box;
  padding: 0 15px;
}
h3 {
  font-size: 28px;
  color: #6c757d;
  margin: 48px 0;
}
.manage-inp {
  /* display: flex; */
  width: 100%;
  /* justify-content: space-around;
    flex-wrap: nowrap; */
  box-sizing: border-box;
}

label {
  width: 10%;
  padding: 0 15px;
  margin: 0 0 15px;
}
.inp-text {
  width: 90%;
  /* height: 46px; */
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 6px 12px;
}
textarea {
  height: 120px;
}
p {
  padding: 0 15px;
}
.submitBtn {
  width: 100%;
  color: #ffffff;
  background: rgb(33, 134, 33);
  border: none;
  border-radius: 6px;
  padding: 8px 0;
  margin-top: 20px;
}
table,
tr {
  border: 1px solid #ced4da;
  border-left: none;
  border-right: none;
}
table {
  width: 100%;
  text-align: center;
}
tr {
  height: 50px;
}
</style>
