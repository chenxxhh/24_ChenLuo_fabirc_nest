<script setup>
import axios from "axios";
import { ref } from "vue";

let jsonLoad = ref("");

const http = axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: { "Content-Type": "multipart/form-data" },
});

async function loadFlie(e) {
  const fd = new FormData();
  fd.append("file", e.target.files[0]);
  fd.append("name", "file");
  const res = await http.post("/uploadFile", fd);
  jsonLoad.value = res.data;
}
</script>

<template>
  <input @input="loadFlie" type="file" />
  <div>
    {{ jsonLoad }}
  </div>
</template>
