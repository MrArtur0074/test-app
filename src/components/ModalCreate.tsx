import React, {Component} from 'react';
import './Modal.css';
import {inputErrors, validate, formateDateString, pickerData} from '../logic/skillData'

interface IModal {
    0: boolean; // open
    1(): void; //close
}

export interface IInfoCard {
    name: string;
    title: string;
    startDate: string;
    endDate: string;
}

class ModalCreate extends Component<IModal, IInfoCard> {
    constructor(props:IModal) {
        super(props);
        this.state = {
            name: '',
            title: '',
            startDate: '',
            endDate: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    }

    public props: IModal = this.props;

    render() {
        let classModal = (this.props[0])? 'modalDialog target': 'modalDialog';
        return (
            <div id="openModal" className={classModal}>
                <div>
                    <a onClick={this.props[1]} title="Закрыть" className="close">X</a>
                    <h2>Создать новое место работы</h2>
                    <form className='card-work'>
                        <label htmlFor='inputName'><span>*</span>Название места:</label>
                        <div><input value={this.state.name} onChange={this.handleChangeName} name='inputName' type='text'/></div>

                        <label htmlFor='inputTitle'><span>*</span>Описание:</label>
                        <div><textarea onChange={this.handleChangeTitle} value={this.state.title} name='inputTitle'></textarea></div>

                        <div className='div-date'><label htmlFor='inputStartDate'><span>*</span>Дата начала: </label>
                        <input value={this.state.startDate} onChange={this.handleChangeStartDate} name='inputStartDate' type='date'/></div>

                        <div className='div-date'><label htmlFor='inputEndDate'><span>*</span>Дата окончания: </label>
                        <input value={this.state.endDate} onChange={this.handleChangeEndDate} name='inputEndDate' type='date'/></div>

                        <div><input name='work-send' type='button' value="Сохранить"/></div>
                    </form>
                </div>
            </div>
        )
    }

    private handleChangeName(event:any) {
        this.setState({name: event.target.value});
    }

    private handleChangeTitle(event:any) {
        this.setState({title: event.target.value});
    }

    private handleChangeStartDate(event:any) {
        this.setState({startDate: event.target.value});
    }

    private handleChangeEndDate(event:any) {
        this.setState({endDate: event.target.value});
    }

}

export default ModalCreate