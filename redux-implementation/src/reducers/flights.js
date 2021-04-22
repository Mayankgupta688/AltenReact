export default function flights(store = [], action) {
    if(action.type === "ADD_FLIGHTS") {
        return action.payload;
    }

    if(action.type === "DELETE_ALL_FLIGHTS") {
        return [];
    }

    return store;
}