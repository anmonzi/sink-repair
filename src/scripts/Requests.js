import { getRequests } from "./dataAccess.js";



const convertRequestsToHTML = (requestObject) => {
    return `
    <li>${requestObject.description}</li>
    `
}





export const Requests = () => {
    const requests = getRequests()

    let html = `
    <ul>
        ${
            requests.map(convertRequestsToHTML).join("")
        } 
    </ul>`

    return html
}



