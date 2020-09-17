import {IInfoCard} from '../components/ModalEdit'

export function changeCard(data:IInfoCard):void {
    fetch('https://my-json-server.typicode.com/MrArtur0074/json-server/works/', {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: data.id,
            name: data.name,
            title: data.title,
            startDate: data.startDate,
            endDate: data.endDate
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err))
}