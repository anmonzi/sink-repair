import { deleteRequest, fetchRequests, fetchPlumbers } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")



const render = () => {
    fetchRequests().then(fetchPlumbers).then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()



mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})