import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Privacy from '../views/Privacy.vue'
import CorporateInfo from '../views/CorporateInfo.vue'
import Signin from '../components/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/termsofuse',
    name: 'TermsOfUse',
    component: TermsOfUse
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/corporateinfo',
    name: 'CorporateInfo',
    component: CorporateInfo
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
