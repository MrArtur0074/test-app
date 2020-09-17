import {IInfoCard} from '../components/ModalEdit'

export async function changeCard(data:IInfoCard) {
    try {
        await fetch('http://localhost:4000/works/' + data.id, {
            method: "put",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                title: data.title,
                startDate: data.startDate,
                endDate: data.endDate
            })
        })
    } catch (error) {
        alert('Возникла ошибка при изменении документа');
    }
    
}