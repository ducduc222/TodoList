import List from './components/list-cpn.vue'
import Create from './components/create-cpn.vue'
const routes = [
    {
        path: '/list', 
        component: List,
        name: 'List',
        children: [
            {
                path: 'create',
                component: Create,
                name: 'Create'
            }
        ]
    }
]

export default routes;