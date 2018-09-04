export default (state = {}, action) => {
    console.log(action);

    switch (action.type) {
        case 'FIRST_ACTION':
            return { ...state, result: action.payload.data }
        default:
            return state
    }
}