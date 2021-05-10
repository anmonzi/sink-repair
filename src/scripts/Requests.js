import { getRequests } from "./dataAccess.js";



const convertRequestsToHTML = (requestObject) => {
    return `
    <li>${requestObject.description}</li>
    <button class="request__delete"
                id="request--${requestObject.id}">
            Delete
        </button>
    `
}





export const Requests = () => {
    const requests = getRequests()

    let html = `
    <ul">
        ${
            requests.map(convertRequestsToHTML).join("")
        } 
    </ul>`
    return html
}



