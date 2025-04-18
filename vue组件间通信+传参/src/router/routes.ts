// 所有路由配置的数组
export default [
  {
    path: '/props_pre',
    component: () => import("../views/01_props/PropsTest.vue")
  },
  {
    path: '/custom_event',
    component: () => import("../views/02_custom_event/EventTest.vue")
  },
  {
    path: '/event_bus',
    component: () => import("../views/03_event-bus/EventBusTest.vue")
  },
  {
    path: '/v-model',
    component: () => import("../views/04_v-model/ModelTest.vue")
  },
  {
    path: '/attrs-listeners',
    component: () => import("../views/05_attrs-listeners/AttrsListenersTest.vue")
  },
  {
    path: '/ref-children-parent',
    component: () => import("../views/06_ref-children-parent/RefChildrenParentTest.vue")
  },
  {
    path: '/provide-inject',
    component: () => import("../views/07_provide-inject/ProvideInjectTest.vue")
  },
  {
    path: '/pinia',
    component: () => import("../views/08_pinia/index.vue")
  },
  {
    path: '/slot',
    component: () => import("../views/09_slot/SlotTest.vue")
  },
]