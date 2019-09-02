<template>
  <table class="table">
    <thead thead-default>
      <tr>
        <th>尺寸</th>
        <th>价格</th>
        <th>加入</th>
      </tr>
    </thead>
    <tbody v-for="(item,index) in food" :key="index">
      <tr>
        <td>
          <strong>{{item.name}}</strong>
        </td>
      </tr>
      <tr v-for="(choose,id) in item.options" :key="id">
        <td>{{choose.size}}</td>
        <td>{{choose.price}}</td>
        <td>
          <button
            type="submit"
            @click.prevent="add(index,id)"
            class="btn btn-sm btn-outline-success"
          >＋</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      food: null
    };
  },
  created() {
    this.getMenu();
  },
  methods: {
    getMenu() {
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
    add(index, id) {
      var food1 = {
        name: this.food[index].name,
        description: this.food[index].description,
        options: this.food[index].options[id]
      };
      this.$store.dispatch("setFoodAsync", food1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
