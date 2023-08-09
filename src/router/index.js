import {createRouter,createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import CharacterDetailsPage from '../views/CharacterDetailsPage.vue'

const routes = [
   
            {
                path:'/',
                name:"home",
                component:Home
            
            },
            {
                path:'/CharacterDetailsPage/:name/:id',
                name:"CharacterDetailsPage",
                component:CharacterDetailsPage,
                props:true
            }
        ]
    


const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;