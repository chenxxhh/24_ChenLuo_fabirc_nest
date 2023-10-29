<script setup>
import { fabric } from "fabric";
import { onMounted, ref } from "vue";

const canvasRef = ref();
const rectRef = ref();
const tl = ref({
  x: 0,
  y: 0,
});
const tr = ref({
  x: 0,
  y: 0,
});
const bl = ref({
  x: 0,
  y: 0,
});
const br = ref({
  x: 0,
  y: 0,
});

const init = () => {
  canvasRef.value = new fabric.Canvas("can1");
  rectRef.value = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    fill: "red",
  });
  canvasRef.value.add(rectRef.value);
};

const writeLine = (p1, p2) => {
  const line = new fabric.Line([p1.x, p1.y, p2.x, p2.y], {
    stroke: "green",
    strokeWidth: 4,
  });
  canvasRef.value.add(line);
  return line;
};

const refresh = () => {
  const flag = rectRef.value.lineCoords;
  tl.value = {
    x: (flag.tl.x - 3).toFixed(1),
    y: (flag.tl.y - 3).toFixed(1),
  };
  bl.value = {
    x: (flag.bl.x - 3).toFixed(1),
    y: flag.bl.y.toFixed(1),
  };
  tr.value = {
    y: (flag.tr.y - 3).toFixed(1),
    x: flag.tr.x.toFixed(1),
  };
  br.value = {
    y: flag.br.y.toFixed(1),
    x: flag.br.x.toFixed(1),
  };
  let line1 = writeLine(bl.value, br.value);
  let line2 = writeLine(bl.value, tl.value);
  let line3 = writeLine(tr.value, br.value);
  let line4 = writeLine(tl.value, tr.value);
  // writeLine(flag.bl,flag.br)
  // writeLine(flag.bl,flag.br)
  // writeLine(flag.bl,fl ag.br)
  // console.log(rectRef.value)
  return requestAnimationFrame(() => {
    canvasRef.value.remove(line1);
    line1 = null;
    canvasRef.value.remove(line2);
    line2 = null;
    canvasRef.value.remove(line3);
    line3 = null;
    canvasRef.value.remove(line4);
    line4 = null;
    refresh();
  });
};

onMounted(() => {
  init();
  refresh();
});
</script>

<template>
  <div id="rootFabric">
    <canvas id="can1" width="500" height="500"></canvas>
    <div>
      <ol>
        <li>左上角：{{ `(${tl.x}, ${tl.y})` }}</li>
        <li>右上角：{{ `(${tr.x}, ${tr.y})` }}</li>
        <li>右下角：{{ `(${br.x}, ${br.y})` }}</li>
        <li>左下角：{{ `(${bl.x}, ${bl.y})` }}</li>
        <li>(线条倘若超出可放置最大长度会错位)</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
#rootFabric {
  display: flex;
}
#can1 {
  border: 1px solid black;
}
</style>
