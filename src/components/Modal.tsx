import React from 'react';
import './Modal.css';

interface IModal {
    0: boolean;
    1(): void;
}

class Modal extends React.Component<{}> {
    public props: IModal = this.props;
    render() {
        let classModal = (this.props[0])? 'modalDialog target': 'modalDialog';
        return (
            <div id="openModal" className={classModal}>
                <div>
                    <a onClick={this.props[1]} title="Закрыть" className="close">X</a>
                    <h2>Создать новое место работы</h2>
                    <form className='card-work'>
                        <label htmlFor='work-name'><span>*</span>Название места:</label>
                        <div><input name='work-name' type='text'/></div>

                        <label htmlFor='work-title'><span>*</span>Описание:</label>
                        <div><textarea name='work-title'></textarea></div>

                        <div className='div-date'><label htmlFor='work-startDate'><span>*</span>Дата начала: </label>
                        <input name='work-startDate' type='date'/></div>

                        <div className='div-date'><label htmlFor='work-endDate'><span>*</span>Дата окончания: </label>
                        <input name='work-endDate' type='date'/></div>

                        <div><input name='work-send' type='button' value="Сохранить"/></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal