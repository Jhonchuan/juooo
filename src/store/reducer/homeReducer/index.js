const initHomeState = {
    hot_list:[],
    stageList:[],
    swiperList:[],
    discountList:[]
};
export function homeReducer(state=initHomeState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type==="UP_HOT_LIST"){
        state.hot_list = payload
    }
    if(type==="UP_FLOOR_LIST"){
        state.stageList = payload
    }
    if(type==="UP_SWIPER_LIST"){
        state.swiperList = payload
    }
    if(type === "UP_DISCOUNT_LIST"){
        state.discountList = payload
    }
    return state;
}