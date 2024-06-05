import { createRouter, createWebHistory } from 'vue-router';
import About from '@/components/About.vue';
import SongList from "@/components/SongList.vue";
import Artists from "@/components/Artists.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: SongList },
        { path: '/songs', name: 'songs', component: SongList },
        { path: '/artists', name: 'artists', component: Artists },
        { path: '/about', name: 'about', component: About },
    ]
});

export default router;
