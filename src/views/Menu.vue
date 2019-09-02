<template>
  <div class="menu">
    <div class="menu-left">
      <table>
        <thead>
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(pi ,index) in menu" :key="index">
          <tr>
            <td>{{pi.name}}</td>
          </tr>
          <tr>
            <td>{{pi.options[0].size}}</td>
            <td>{{pi.options[0].price}}</td>
            <td>
              <button @click.prevent="handleSubmit1(pi,index)">+</button>
            </td>
          </tr>
          <tr>
            <td>{{pi.options[1].size}}</td>
            <td>{{pi.options[1].price}}</td>
            <td>
              <button @click.prevent="handleSubmit2(pi,index)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="menu-right">
      <table>
        <thead>
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody v-if="show">
          <tr>
            <td>
              <button @click="handleMinus">-</button>
              {{count}}
              <button @click="handlePlus">+</button>
            </td>
            <td>{{name}}</td>
            <td>{{pay}}</td>
          </tr>
          <p>总价:30RMB</p>
        </tbody>
      </table>
      <button @click="subB" class="subBtn">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: Object,
      show: false,
      count: 1,
      name: "",
      price: "",
      pay: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getMenu());
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      this.$axios
        .get("https://wd4565587092snmqvb.wilddogio.com/menus.json", this.menu)
        .then(res => {
          this.menu = res.data;
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    handleSubmit1(pi, index) {
      this.show = true;
      this.name = pi.name;
      this.price = parseInt(pi.options[0].price);
      this.pay = this.price;
    },
    handleSubmit2(pi, index) {
      this.show = true;
      this.name = pi.name;
      this.price = parseInt(pi.options[1].price);
      this.pay = this.price;
    },
    handleMinus() {
      if (this.count <= 0) {
        this.show = false;
      }
      this.count -= 1;
      this.pay -= this.price;
    },
    handlePlus() {
      this.count += 1;
      this.pay += this.price;
    },
    subB() {
      alert("提交成功，请支付");
    }
  }
};
</script>

<style scoped>
.menu {
  width: 85%;
  margin: auto;
  overflow: hidden;
}
.menu-left {
  width: 70%;
  float: left;
}
.menu-right {
  width: 30%;
  float: left;
  padding: 0 15px;
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
.subBtn {
  width: 100%;
  height: 50px;
  border: none;
  background: rgb(28, 129, 28);
  color: #ffffff;
}
</style>