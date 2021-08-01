import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Privacy from '../views/Privacy.vue'
import CorporateInfo from '../views/CorporateInfo.vue'
import LegalNotices from '../views/LegalNotices.vue'
import ContactUs from '../views/ContactUs.vue'
import UserProfiles from '../views/UserProfiles.vue'
import Signin from '../components/Signin.vue'
import Faq from '../components/Faq.vue'
import Home from '../views/Home.vue'

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
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },{
    path: '/legalnotices',
    name: 'LegalNotices',
    component: LegalNotices
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/userprofiles',
    name: 'UserProfiles',
    component: UserProfiles
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
