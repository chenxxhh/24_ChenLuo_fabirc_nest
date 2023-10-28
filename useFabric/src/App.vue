<script setup>
import axios from "axios";
import { onMounted } from "vue";
const http = axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: { "Content-Type": "multipart/form-data" },
});

async function loadFlie(e) {
  const fd = new FormData();
  fd.append("file", e.target.files[0]);
  fd.append("name", "file");
  const res = await http.post("/uploadFile", fd);
  console.log(res);
}

onMounted(async () => {
  let res = await http.get("/");
  console.log(res);
});
</script>

<template>
  <div id="root">
    <div>点击进入FabricJS测试界面</div>
    <div>点击进入nestJS测试界面</div>
    <input @input="loadFlie" type="file" />
  </div>
</template>

<style scoped>
#root div:nth-of-type(2),
#root div:nth-of-type(1) {
  width: 200px;
  height: 100px;
}
#root div:nth-of-type(1) {
  background-color: red;
}
#root div:nth-of-type(2) {
  background-color: skyblue;
}
</style>
