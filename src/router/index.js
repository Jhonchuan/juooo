import Home from "../views/Home"
import Plus from "../views/Plus"
import Show from "../views/Show"
import ThreaterDetail from "../views/ThreaterDetail"
import Ticket from "../views/Ticket"
import Vip from "../views/Vip"
import homeRouter from "./homeRouter/index"
import Login from "../views/my/login/Login"
import ResetPassword from "../views/my/login/ResetPassword"
import SetPassWord from "../views/my/login/SetPassWord"
import Verify from "../views/my/login/Verify"
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
    path: "/theatre/detail",
    component: ThreaterDetail,
  },
  {
    path: "/ticket/:id",
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
    path: "/passport/resetPassword",
    component: ResetPassword,
  },
  {
    path: "/passport/verify",
    component: Verify,
  },
  {
    path: "/passport/setPassWord",
    component: SetPassWord,
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
