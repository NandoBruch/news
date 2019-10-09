import NewsList from './components/news-list/NewsList.vue';
import NewsEdit from './components/news-edit/NewsEdit.vue'

export const routes = [
    {path: '', component: NewsList},
    {path: '/editar', component: NewsEdit}
]