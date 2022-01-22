import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fdf1a39 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4c68793c = () => interopDefault(import('../pages/id/index.vue' /* webpackChunkName: "pages/id/index" */))
const _5d90a5e5 = () => interopDefault(import('../pages/id/:id.vue' /* webpackChunkName: "pages/id/:id" */))
const _4f96f4fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2fdf1a39,
    name: "about"
  }, {
    path: "/id",
    component: _4c68793c,
    name: "id"
  }, {
    path: "/id/:id",
    component: _5d90a5e5,
    name: "id-:id"
  }, {
    path: "/",
    component: _4f96f4fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
