import {createRouter,createWebHistory} from 'vue-router'
import addproject from '../views/addproject.vue'
import addactivity from '../views/addactivity.vue'
import Home from '../views/Home.vue'

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/addproject',
            name: 'addproject',
            component:addproject
        },
        {
            path:'/',
            name: 'home',
            component:Home
        },
        {
            path:'/addactivity:item',
            name: 'addactivity',
            component:addactivity
        }
    ]
})

export default router