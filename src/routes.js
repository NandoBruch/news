import NewsList from './components/news-list/NewsList.vue';
import NewsEdit from './components/news-edit/NewsEdit.vue'

export const routes = [
    {path: '', component: NewsList, name: 'home'},
    {path: '/editar', name: 'cadastra' ,component: NewsEdit},
    {path: '/editar/:id', name: 'edita', component: NewsEdit, props: 'true'},
    {path: '*', component: NewsList}
]