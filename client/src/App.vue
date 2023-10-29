<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<template>
  <div id="rootApp">
    <div class="home" @click="goHome">返回主页</div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
#rootApp .home {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 5px 20px;
  border-radius: 10px;
  background: pink;
}
#rootApp .home:hover {
  cursor: pointer;
}
</style>
