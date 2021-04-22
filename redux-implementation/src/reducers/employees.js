export default function employees(store = [], action) {
    debugger;
    if(action.type === "ADD_EMPLOYEE") {
        return action.payload;
    }

    if(action.type === "DELETE_ALL_EMPLOYEE") {
        return [];
    }

    return store;
}