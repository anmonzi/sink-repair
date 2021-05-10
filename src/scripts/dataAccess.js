const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

// Fetch request to grab data from API
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(res => res.json())
    .then(serviceRequests => {
        applicationState.requests = serviceRequests
    })
}



// Database
const applicationState = {
    requests: []
}
// Copy of database for export
export const getRequests = () => {
    return [...applicationState.requests]
}



// Post request with Fetch
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    // Re-rendering html with new updated post
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


// Deleting posts with fetch request
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}