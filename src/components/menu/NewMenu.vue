<template>
  <div id="NewMenu">
    <h3>菜单</h3>
    <table class="table">
      <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(piz,index) in newmenu" :key="index">
          <td>{{piz.name}}</td>
          <td>
            <button @click="handleDelete(index)" class="btn btn-outline-danger btn-sm">×</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     pizza: this.newmenu
  //   };
  // },

  props: {
    newmenu: Object
  },
  created() {
    this.getPizza();
  },
  computed: {
    normalizedSize: function() {
      return this.newmenu;
    }
  },
  // mounted() {
  //   this.getPizza();
  // },
  methods: {
    getPizza() {
      this.$axios
        .get(`https://wd4565587092snmqvb.wilddogio.com/menus.json`)
        .then(res => {
          this.pizza = res.data;
          console.log(res.data);
        });
    },
    handleDelete(index) {
      console.log(name);
      this.$axios
        .delete(`https://wd4565587092snmqvb.wilddogio.com/menus/${index}.json`)
        .then(res => {
          this.newmenu = res.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>