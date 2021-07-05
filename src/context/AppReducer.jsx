export default (state,action)=>{
    switch (action.type) {
        case 'UPDATE_NAME':
            return{
                ...state,
               name: action.payload
            }
        default:
            return state;
    }
}
