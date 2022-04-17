
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Course from "views/examples/Courses.js";
import Subject from "views/examples/Subject.js";
import Unit from "views/examples/Unit.js";
import QuestionBank from "views/examples/QuestionBank.js"
import DepartmentTable from "views/examples/DepartmentTable.js"
import CourseTable from "views/examples/CourseTable";
import SubjectTable from "views/examples/SubjectTable";
import UnitTable from "views/examples/UnitTable"
import QuestionTable from "views/examples/QuestionTable"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/department-table",
    name: "Department Table",
    icon: "ni ni-building",
    component: DepartmentTable,
    layout: "/admin"
  },
  {
    path: "/courses-table",
    name: "Courses Table",
    icon: "ni ni-books",
    component: CourseTable,
    layout: "/admin"
  },
  {
    path: "/subject-table",
    name: "Subject Table",
    icon: "ni ni-book-bookmark",
    component: SubjectTable,
    layout: "/admin"
  },
  {
    path: "/units-table",
    name: "Unit Table",
    icon: "ni ni-book-bookmark",
    component: UnitTable,
    layout: "/admin"
  },
  {
    path: "/questions-table",
    name: "Questions Table",
    icon: "ni ni-book-bookmark",
    component: QuestionTable,
    layout: "/admin"
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
    name: "Add Course",
    icon: "ni ni-books",
    component: Course,
    layout: "/auth"
  },
  {
    path: "/subject",
    name: "Add Subject",
    icon: "ni ni-book-bookmark",
    component: Subject,
    layout: "/auth"
  },
  {
    path: "/unit",
    name: "Add Unit",
    icon: "ni ni-single-copy-04",
    component: Unit,
    layout: "/auth"
  },
  {
    path: "/questionbank",
    name: "Add Question",
    icon: "",
    component: QuestionBank,
    layout: "/auth"
  },
];
export default routes;
