import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth  } from '../firebase/config'
import LandingPage from '../views/LandingPage.vue'
import TermsOfUse from '../views/TermsOfUse.vue'
import Privacy from '../views/Privacy.vue'
import CorporateInfo from '../views/CorporateInfo.vue'
import LegalNotices from '../views/LegalNotices.vue'
import ContactUs from '../views/ContactUs.vue'
import UserProfiles from '../views/UserProfiles.vue'
import Faq from '../components/Faq.vue'
import Home from '../views/Home.vue'
import Billboard from '../views/Billboard.vue'
import MovieDetail from '../views/MovieDetail.vue'

// auth route guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard', user)
  if(!user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

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
    component: UserProfiles,
    beforeEnter: requireAuth
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/billboard',
    name: 'Billboard',
    component: Billboard,
    beforeEnter: requireAuth
  },
   {
     path: '/movie/:id',
     name: 'MovieDetail',
     component: MovieDetail,
     beforeEnter: requireAuth
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
