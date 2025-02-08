const home = [
  {
    path: "/",
    name: "Home",
    component: () => import("@layouts/home-layout/index.vue"),
    children: [
      {
        path: "",
        name: "Landing",
        displayName: "Landing",
        displayMobile: true,
        icon: "tutorial",
        component: () => import("@views/home/Landing.vue"),
      },
      {
        path: "tutorials",
        name: "Tutorial",
        displayName: "Tutorial",
        displayMobile: true,
        icon: "tutorial",
        component: () => import("@views/home/Tutorial.vue"),
      },
      {
        path: "studies",
        name: "Case Studies",
        displayName: "Case Studies",
        displayMobile: true,
        icon: "studies",
        component: () => import("@views/home/CaseStudies.vue"),
      },
      {
        path: "resources",
        name: "Resources",
        displayName: "Resources",
        displayMobile: true,
        icon: "resource",
        component: () => import("@views/home/Resource.vue"),
      },
    ],
  },
];

export default home;
