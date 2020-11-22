import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("@/view/custom/Dashboard.vue")
        },
        {
          path: "/org-list",
          name: "OrganizationList",
          component: () => import("@/view/custom/OrganizationList.vue")
        },
        {
          path: "/fran-list",
          name: "FranchiseList",
          component: () => import("@/view/custom/FranchiseList.vue")
        },
        {
          path: "/fleets",
          name: "FleetsDetail",
          component: () => import("@/view/custom/FleetsDetail.vue")
        },
        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue")
        },
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        },
        {
          path: "/trips",
          name: "trips",
          component: () => import("@/view/custom/Trips.vue"),
        },
        {
          path: "/usermanagement",
          name: "usermanagement",
          component: () => import("@/view/custom/OrgUserManagement/UserManagement/TripHistory.vue"),
          children: [
            {
              path: "/usermanagement/user",
              name: "usermanagement-user",
              component: () => import("@/view/custom/OrgUserManagement/UserManagement/TripHistory.vue")
            }
          ]
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
