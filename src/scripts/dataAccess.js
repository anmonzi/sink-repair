const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(res => res.json())
    .then(serviceRequests => {
        applicationState.requests = serviceRequests
    })
}




const applicationState = {
    requests: []
}




export const getRequests = () => {
    return [...applicationState.requests]
}