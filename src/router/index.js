import Home from "../views/Home"
import Plus from "../views/Plus"
import Show from "../views/Show"
import ThreaterDetail from "../views/ThreaterDetail"
import Ticket from "../views/Ticket"
import Vip from "../views/Vip"
import homeRouter from "./homeRouter/index"
import Login from "../views/my/Login"
import Register from "../views/my/Register"
import Search from "../views/Search"
import MySecurity from "../views/my/MySecurity"
import Test from "../components/common/Test"
export default [
  {
    path: "/plus/index",
    component: Plus,
  },
  {
    path: "/show/showsLibrary",
    component: Show,
  },
  {
    path: "/theater/detail",
    component: ThreaterDetail,
  },
  {
    path: "/ticket",
    component: Ticket,
  },
  {
    path: "/search/index",
    component: Search,
  },
  {
    path: "/vip/index/1",
    component: Vip,
  },
  {
    path: "/passport/login",
    component: Login,
  },
  {
    path: "/Passport/register",
    component: Register,
  },
  {
    path: "/Myjuooo/mysecurity",
    component: MySecurity,
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/",
    component: Home,
    childrens: homeRouter,
  },
]
