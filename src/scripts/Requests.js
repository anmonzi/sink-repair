import { getRequests, getPlumbers } from "./dataAccess.js";

const plumbers = getPlumbers()

const convertRequestsToHTML = (requestObject) => {
    return `
    <li>${requestObject.description}</li>
    <li>${requestObject.address}</li>
    <li>${requestObject.budget}</li>
    <li>${requestObject.neededBy}</li>
    <button class="request__delete" id="request--${requestObject.id}">Delete</button>
    <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${requestObject.id}--${plumber.id}">${plumber.plumberName}</option>`
            }
        ).join("")
    }
</select>`
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


