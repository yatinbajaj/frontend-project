
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Course from "views/examples/Courses.js";
import Subject from "views/examples/Subject.js";
import Unit from "views/examples/Unit.js";
import QuestionBank from "views/examples/QuestionBank.js"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },

  {
    path: "/course",
    name: "Course",
    icon: "",
    component: Course,
    layout: "/auth"
  },
  {
    path: "/subject",
    name: "Subject",
    icon: "",
    component: Subject,
    layout: "/auth"
  },
  {
    path: "/unit",
    name: "Unit",
    icon: "",
    component: Unit,
    layout: "/auth"
  },
  {
    path: "/questionbank",
    name: "Question",
    icon: "",
    component: QuestionBank,
    layout: "/auth"
  },
];
export default routes;
