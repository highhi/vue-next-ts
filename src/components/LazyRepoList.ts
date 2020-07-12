import { defineAsyncComponent } from 'vue'
import LoadingComponent from './LoadingComponent.vue'

export const LazyRepoList = defineAsyncComponent({
  loader: () => import('@/components/RepoList.vue'),
  loadingComponent: LoadingComponent,
  timeout: 3000,
})