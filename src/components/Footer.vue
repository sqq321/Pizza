<template>
  <!-- 底部 -->
  <footer class="text-black mt-5 p-4 text-center">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <div class="card text-dark bg-light mb-3">
          <div class="card-header">点餐文档</div>
          <div class="card-body">
            <h4 class="card-title">点餐文档</h4>
            <p class="card-text">12323212</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card text-dark bg-light mb-3">
          <div class="card-header">点餐文档</div>
          <div class="card-body">
            <h4 class="card-title">点餐文档</h4>
            <p class="card-text">12323212</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card text-dark bg-light mb-3">
          <div class="card-header">点餐文档</div>
          <div class="card-body">
            <h4 class="card-title">点餐文档</h4>
            <p class="card-text">12323212</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "appfooter"
};
</script>


<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.card {
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-title {
  margin-bottom: 0.75rem;
}
h4 {
  font-size: 1.5rem;
}
.card-text:last-child {
  margin-bottom: 0;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
