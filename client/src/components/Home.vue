<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goFabric() {
  router.push("/Fabric");
}
function goLoadFile() {
  router.push("/LoadFile");
}
</script>

<template>
  <div id="root">
    <div @click="goFabric">点击进入FabricJS测试界面</div>
    <div @click="goLoadFile">点击进入nestJS测试界面</div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
#root div:nth-of-type(2),
#root div:nth-of-type(1) {
  width: 200px;
  height: 100px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  line-height: 100px;
}
#root div:nth-of-type(2):hover,
#root div:nth-of-type(1):hover {
  cursor: pointer;
}
#root div:nth-of-type(1) {
  background-color: rgb(251, 76, 76);
}
#root div:nth-of-type(2) {
  background-color: skyblue;
}
</style>
