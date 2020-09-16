import React, {Component} from 'react';
import './Modal.css';
import {inputErrors, validate, formateDateString, pickerData} from '../logic/skillData'

interface IModal {
    0: boolean;
    1(): void; //close
    2: IInfoCard;
    3(IInfoCard:IInfoCard): void; //set data to modal
}

export interface IInfoCard {
    id: string | number;
    name: string;
    title: string;
    startDate: string;
    endDate: string;
}

interface IModalState {
    infoCard: IInfoCard,
    errors: inputErrors
}

class Modal extends Component<IModal, IModalState> {
    constructor(props:IModal) {
        super(props);
        this.state = {
            infoCard: {
                id : '',
                name: '',
                title: '',
                startDate: '',
                endDate: ''
            },
            errors: {
                name: false,
                title: false,
                startDate: false,
                endDate: false
            }
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.saveCard = this.saveCard.bind(this);
    }

    public props: IModal = this.props;

    componentDidUpdate(prevProps:IModal) {
        if (prevProps !== this.props)
            this.setState({
                infoCard: {
                    id: this.props[2].id,
                    name: this.props[2].name,
                    title: this.props[2].title,
                    startDate: formateDateString(this.props[2].startDate, '.'),
                    endDate: formateDateString(this.props[2].endDate, '.')
                }
            });
    }

    render() {
        let classModal = (this.props[0])? 'modalDialog target': 'modalDialog';
        return (
            <div id="openModal" className={classModal}>
                <div>
                    <a onClick={this.props[1]} title="Закрыть" className="close">X</a>
                    <h2>Редактировать</h2>
                    <form className='card-work'>
                        <label htmlFor='inputName'><span>*</span>Название места:</label>
                        <div><input value={this.state.infoCard.name} onChange={this.handleChangeName} name='inputName' type='text'/></div>

                        <label htmlFor='inputTitle'><span>*</span>Описание:</label>
                        <div><textarea onChange={this.handleChangeTitle} value={this.state.infoCard.title} name='inputTitle'></textarea></div>

                        <div className='div-date'><label htmlFor='inputStartDate'><span>*</span>Дата начала: </label>
                        <input value={this.state.infoCard.startDate} onChange={this.handleChangeStartDate} name='inputStartDate' type='date'/></div>

                        <div className='div-date'><label htmlFor='inputEndDate'><span>*</span>Дата окончания: </label>
                        <input value={this.state.infoCard.endDate} onChange={this.handleChangeEndDate} name='inputEndDate' type='date'/></div>

                        <div><input onClick={this.saveCard} name='work-send' type='button' value="Сохранить"/></div>
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

    private saveCard() {
        const work:IInfoCard = pickerData(this.state.infoCard);
        let error:inputErrors = validate(work);
        this.props[3](work);
        this.props[1]();
    }

}

export default Modal