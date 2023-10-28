<script setup>
import {fabric} from 'fabric'
import { onMounted, ref } from 'vue';


const canvasRef = ref()
const rectRef = ref()

const init = () => {
  canvasRef.value = new fabric.Canvas('can1')
  rectRef.value = new fabric.Rect({
    top:100,
    left:100,
    width:100,
    height:100,
    fill:'red'
  })
  canvasRef.value.add(rectRef.value)
}

const writeLine = (p1,p2)=>{
  
  const line = new fabric.Line([p1.x,p1.y,p2.x,p2.y], {
    stroke: 'green',
    strokeWidth: 4,
  });
  canvasRef.value.add(line);
  return line;
}

const refresh = () => {
  const flag = rectRef.value.lineCoords
  let tl = {
    x:flag.tl.x-3,
    y:flag.tl.y-3
  }
  let bl = {
    x:flag.bl.x-3,
    y:flag.bl.y
  }
  let tr = {
    y:flag.tr.y-3,
    x:flag.tr.x
  }
  let line1 = writeLine(bl,flag.br)
  let line2 = writeLine(bl,tl)
  let line3 = writeLine(tr,flag.br)
  let line4 = writeLine(tl,tr)
  // writeLine(flag.bl,flag.br)
  // writeLine(flag.bl,flag.br)
  // writeLine(flag.bl,fl ag.br)
  // console.log(rectRef.value)
  return requestAnimationFrame(() => {
    canvasRef.value.remove(line1);
    line1 = null
    canvasRef.value.remove(line2);
    line2 = null
    canvasRef.value.remove(line3);
    line3 = null
    canvasRef.value.remove(line4);
    line4 = null
    refresh();
  })
}

onMounted(()=>{   
  init()
  refresh()
  // canvasInit.on('object:modified',(e)=>{
  //   console.log(e)
  // })

})



</script>

<template>
  <div>
    <canvas id="can1" width="1000" height="1000"></canvas>
  </div>
</template>

<style scoped>

</style>
