import axios from "axios"
export function UP_HOT_LIST(payload){
    return {
        type:"UP_HOT_LIST",
        payload
    }
}
export function UP_FLOOR_LIST(payload){
    return {
        type:"UP_FLOOR_LIST",
        payload
    }
}
export function UP_SWIPER_LIST(payload){
    return {
        type:"UP_SWIPER_LIST",
        payload
    }
}
export function UP_DISCOUNT_LIST(payload){
    return {
        type:"UP_DISCOUNT_LIST",
        payload
    }
}
export default {
    getHotList(city_id=0){
        return async (dispatch)=>{
            const {data} = await axios.get("/home/index/getHotsRecommendList",{
                params:{
                    city_id
                }
            });
            dispatch(UP_HOT_LIST(data.hots_show_list))
        }
    },
    getFloorShowList(city_id=0){
        return async (dispatch)=>{
            const {data} = await axios.get("/home/index/getFloorShow",{
                params:{
                    city_id
                }
            })
            dispatch(UP_FLOOR_LIST(data[2].list))
        }
    },
    getSwiperPics(city_id=0){
        return async (dispatch)=>{
            const {data} = await axios.get("/home/index/getClassifyHome",{
                params:{
                    city_id
                }
            })
            dispatch(UP_SWIPER_LIST(data.slide_list))
        }
    },
    getDiscountList(city_id=0){
        return async (dispatch)=>{
            const {data} = await axios.get("/vip/index/getVipHomeSchedular?city_id=0",{
                params:{
                    city_id
                }
            })
            dispatch(UP_DISCOUNT_LIST(data.discountList))
        }
    }
}