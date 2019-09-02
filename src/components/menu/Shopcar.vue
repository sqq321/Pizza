<template>
  <div>
    <!-- <h2>购物车商品</h2>
    <table class="table">
      <thead class="thead-default">
        <tr>
          <th>数量</th>
          <th>品种</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button class="btn btn-sm">-</button>
            <span>{{food.name}}</span>
            <button class="btn btn-sm">+</button>
          </td>
          <td v-if="food!={}">{{food.options.size}}</td>
          <td v-if="food!={}">{{food.options.price}}</td>
        </tr>
      </tbody>
    </table>
    <p>总价：RMB</p>
    <button class="btn btn-success btn-block">提交</button>-->

    <h2>购物车商品</h2>
    <thead class="thead-default">
      <tr>
        <th>数量</th>
        <th>品种</th>
        <th>价格</th>
      </tr>
    </thead>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    menu: Array
  },
  methods: {},
  computed: mapGetters(["food"])
};
</script>

<style lang="scss" scoped>
</style>
