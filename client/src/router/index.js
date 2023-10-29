// router/index

import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=> import('../components/Home.vue')
const Fabric = ()=> import('../components/Fabric.vue')
const LoadFile = ()=> import('../components/LoadFile.vue')
const routes = [  
    {    path: '/',    name: 'Home',    component: Home  },  
    {    path: '/Fabric',    name: 'Fabric',    component: Fabric,  }, 
    {    path: '/LoadFile',    name: 'LoadFile',    component: LoadFile  },
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router

