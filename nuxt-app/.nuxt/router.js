import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ddce879 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _01450722 = () => interopDefault(import('..\\pages\\lend\\index.vue' /* webpackChunkName: "pages/lend/index" */))
const _3523b58f = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _e95ddfda = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _65ce49f2 = () => interopDefault(import('..\\pages\\user\\user1.vue' /* webpackChunkName: "pages/user/user1" */))
const _65b21af0 = () => interopDefault(import('..\\pages\\user\\user2.vue' /* webpackChunkName: "pages/user/user2" */))
const _03adce97 = () => interopDefault(import('..\\pages\\lend\\_id.vue' /* webpackChunkName: "pages/lend/_id" */))
const _2d94c33e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0ddce879,
    name: "about"
  }, {
    path: "/lend",
    component: _01450722,
    name: "lend"
  }, {
    path: "/user",
    component: _3523b58f,
    children: [{
      path: "",
      component: _e95ddfda,
      name: "user"
    }, {
      path: "user1",
      component: _65ce49f2,
      name: "user-user1"
    }, {
      path: "user2",
      component: _65b21af0,
      name: "user-user2"
    }]
  }, {
    path: "/lend/:id",
    component: _03adce97,
    name: "lend-id"
  }, {
    path: "/",
    component: _2d94c33e,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
