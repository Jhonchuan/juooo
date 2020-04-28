const ticketInit = {}
export function ticketReducer(state=ticketInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    return state;
}