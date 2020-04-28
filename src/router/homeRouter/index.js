import ThreaterList from "../../views/homeRouter/TheatreList"
import Eticket from "../../views/homeRouter/Eticket"
import Myjuooo from "../../views/homeRouter/Myjuooo"
import Index from "../../views/homeRouter/Index"
export default [
    {
        path:"/theatre/theatreList",
        component:ThreaterList
    },
    {
        path:"/eticket/list",
        component:Eticket
    },
    {
        path:"/myjuooo/myjuooo",
        component:Myjuooo
    },
    {
        path:"/",
        component:Index,
        exact:true
    }
]