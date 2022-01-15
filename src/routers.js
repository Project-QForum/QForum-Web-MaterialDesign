import Forum from './pages/Forum'
import NotFound from "@/pages/NotFound";
import Thread from "@/pages/Thread";
import PostThread from "@/pages/PostThread";

const routers = [
    {
        path: '/forum',
        name: 'Forum',
        component: Forum,
    },
    {
        path:'/thread/:tid',
        name:'Thread',
        component: Thread
    },
    {
        path:'/thread/post',
        name:'PostThread',
        component: PostThread
    },
    {
      path: '/',
      redirect:'/forum'
    },


    {
        path: '*',
        name: '404',
        component: NotFound
    }
]
export default routers