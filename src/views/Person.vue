<template>
  <div id="person">
    <div class="container">
      <div class="row mb-5">
        <div class="col-4">
          <div class="list-group mb-5">
            <li class="nav-link">
              <button
                class="list-group-item list-group-item-action"
                @click.prevent="his=!his,lia=false,dia=false,kua=false"
              >历史订单</button>
            </li>
            <li class="nav-link">
              <button
                class="list-group-item list-group-item-action"
                @click.prevent="lia=!lia,his=false,dia=false,kua=false"
              >联系我们</button>
            </li>
            <li class="nav-link">
              <button
                class="list-group-item list-group-item-action"
                @click.prevent="dia=!dia,lia=false,his=false,kua=false"
              >点餐文档</button>
            </li>
            <li class="nav-link">
              <button
                class="list-group-item list-group-item-action"
                @click.prevent="kua=!kua,lia=false,dia=false,his=false"
              >快递信息</button>
            </li>
          </div>
        </div>
        <div class="col-8">
          <History v-show="his" />
          <Kuaidi v-show="kua" />
          <Diancan v-show="dia" />
          <Lianxi v-show="lia" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import History from "../components/menu/History";
import Kuaidi from "../components/menu/Kuaidi";
import Diancan from "../components/menu/Diancan";
import Lianxi from "../components/menu/Lianxi";
export default {
  data() {
    return {
      his: false,
      lia: false,
      dia: false,
      kua: false
    };
  },
  methods: {},
  components: { History, Kuaidi, Diancan, Lianxi }
};
</script>

<style lang="scss" scoped>
</style>