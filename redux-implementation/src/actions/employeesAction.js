export function addEmployeesToStore(employeeList) {
    debugger;
    return {
        type: "ADD_EMPLOYEE",
        payload: employeeList
    }
}

export function deleteEmployeesFromStore() {
    return {
        type: "DELETE_ALL_EMPLOYEE"
    }
}

export function deleteSpecificEmployeesFromStore(empId) {
    return {
        type: "DELETE_EMPLOYEE",
        payload: empId
    }
}