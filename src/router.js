import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LANDING',
      component: Landing
    },
    {
      path: '/register',
      name: 'register',
      //懒加载
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      //懒加载
      component: () => import('./views/Login.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      //懒加载
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      //懒加载
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/person',
      name: 'person',
      //懒加载
      component: () => import('./views/Person.vue')
    },
    // {
    //   path: '/history',
    //   name: 'history',
    //   //懒加载
    //   component: () => import('./views/History.vue')
    // },

    {
      path: '/*',
      redirect: "/"
    },

  ]
})

//全局路由守卫
route.beforeEach((to, from, next) => {

  //执行 
  // next();
  const isLogin = localStorage.jwtToken ? true : false;

  if (to.path == "/login" || to.path == "/register" || to.path == "/") {
    next();
  } else {
    //判断用户是否处于登录状态   登录之后随便跳 ，否则跳回 /login
    isLogin ? next() : next("/login")
  }

})

export default route;
