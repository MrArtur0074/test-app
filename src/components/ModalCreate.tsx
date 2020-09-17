import React, {Component} from 'react';
import './Modal.css';
import {inputErrors, validate, pickerData, checkError} from '../logic/skillData';
import {IInfoCard} from './ModalEdit';

interface IModal {
    0: boolean; // open
    1(): void; //close
    2(IInfoCard:IInfoCard):void //create card
}

interface IModalState {
    infoCard: IInfoCard;
    errors: inputErrors;
}

export const initStateModalInfo:IInfoCard = {
    id: '',
    name: '',
    title: '',
    startDate: '',
    endDate: ''
}

export const initStateModalErrors:inputErrors = {
    name: false,
    title: false,
    startDate: false,
    endDate: false
}

class ModalCreate extends Component<IModal, IModalState> {
    constructor(props:IModal) {
        super(props);
        this.state = {
            infoCard: initStateModalInfo,
            errors: initStateModalErrors
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.createCard = this.createCard.bind(this);
        this.updateComponent = this.updateComponent.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    public props: IModal = this.props;

    private closeModal():void {
        console.log(initStateModalErrors);
        this.setState({
            infoCard: initStateModalInfo,
            errors: initStateModalErrors
        });
        this.props[1]();
    }

    render() {
        let classModal = (this.props[0])? 'modalDialog target': 'modalDialog';

        return (
            <div id="openModal" className={classModal}>
                <div>
                    <a onClick={this.closeModal} title="Закрыть" className="close">X</a>
                    <h2>Создать новое место работы</h2>
                    <form className='card-work'>
                        <label htmlFor='inputName'><span>*</span>Название места:</label>
                        <div>
                            <input 
                            className={this.state.errors.name ? "error-modal" : ""} 
                            onChange={this.handleChangeName} 
                            name='inputName' 
                            type='text'
                            value={this.state.infoCard.name}
                            />
                            <label 
                            className={this.state.errors.name ? "error-show" : "error-hide"} > 
                                Данное поле не должно быть пустым! 
                            </label>
                        </div>

                        <label htmlFor='inputTitle'><span>*</span>Описание:</label>
                        <div>
                            <textarea 
                            className={this.state.errors.title ? "error-modal" : ""}
                            onChange={this.handleChangeTitle} 
                            value={this.state.infoCard.title}
                            name='inputTitle'>
                            </textarea>
                            <label 
                            className={this.state.errors.title ? "error-show" : "error-hide"}> 
                                Данное поле не должно быть пустым! 
                            </label>
                        </div>

                        <div className='div-date'>
                            <label htmlFor='inputStartDate'><span>*</span>Дата начала: </label>
                            <input 
                            className={this.state.errors.startDate ? "error-modal" : ""} 
                            onChange={this.handleChangeStartDate} 
                            name='inputStartDate' 
                            type='date'
                            value={this.state.infoCard.startDate}
                            />
                        </div>

                        <div className='div-date'>
                            <label htmlFor='inputEndDate'><span>*</span>Дата окончания: </label>
                            <input 
                            className={this.state.errors.endDate ? "error-modal" : ""}
                            onChange={this.handleChangeEndDate} 
                            name='inputEndDate' 
                            type='date'
                            value={this.state.infoCard.endDate}
                            />
                        </div>
                        <label 
                        className={(this.state.errors.startDate || this.state.errors.endDate) ? "error-show" : "error-hide"}> 
                            Данные поля не должны быть пустыми! 
                        </label>
                        <div>
                            <input 
                            className='modalButton'
                            name='work-send' 
                            type='button' 
                            value="Сохранить"
                            onClick={this.createCard}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    private handleChangeName(event:any) {
        this.setState({
            infoCard: {
                id: this.state.infoCard.id,
                name: event.target.value,
                title: this.state.infoCard.title,
                startDate: this.state.infoCard.startDate,
                endDate: this.state.infoCard.endDate
            }
        });
    }

    private handleChangeTitle(event:any) {
        this.setState({
            infoCard: {
                id: this.state.infoCard.id,
                name: this.state.infoCard.name,
                title: event.target.value,
                startDate: this.state.infoCard.startDate,
                endDate: this.state.infoCard.endDate
            }
        });
    }

    private handleChangeStartDate(event:any) {
        this.setState({
            infoCard: {
                id: this.state.infoCard.id,
                name: this.state.infoCard.name,
                title: this.state.infoCard.title,
                startDate: event.target.value,
                endDate: this.state.infoCard.endDate
            }
        });
    }

    private handleChangeEndDate(event:any) {
        this.setState({
            infoCard: {
                id: this.state.infoCard.id,
                name: this.state.infoCard.name,
                title: this.state.infoCard.title,
                startDate: this.state.infoCard.startDate,
                endDate: event.target.value
            }
        });
    }

    private createCard() {
        const work:IInfoCard = pickerData(this.state.infoCard);
        let errorsForm:inputErrors = validate(work);
        this.setState({
            errors: errorsForm
        });
        if (!checkError(errorsForm)) {
            this.addCard(work);
            this.setState({infoCard: initStateModalInfo});
            this.closeModal();
        }
    }

    private async addCard(data:IInfoCard, func:void) {
        try {
            const response = await fetch('http://localhost:4000/works/', {
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
            let json = await response.json();
            this.updateComponent({
                id: json.id,
                title: json.title,
                name: json.name,
                startDate: json.startDate,
                endDate: json.endDate
            });
        } catch (error) {
            alert('Произошла ошибка при добавлении.');
        }
    }

    private updateComponent(data:IInfoCard):void {
        if (data !== undefined) this.props[2](data);
    }
}

export default ModalCreate