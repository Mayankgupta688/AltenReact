export function addFlightToStore(flightList) {
    return {
        type: "ADD_FLIGHTS",
        payload: flightList
    }
}

export function deleteFlightFromStore() {
    return {
        type: "DELETE_ALL_FLIGHTS"
    }
}

export function deleteSpecificFlightFromStore(flightId) {
    return {
        type: "DELETE_FLIGHTS",
        payload: flightId
    }
}