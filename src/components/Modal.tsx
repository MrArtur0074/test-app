import React from 'react';
import './Modal.css';

class WorkCard extends React.Component {
    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">×</span>
                        <h2>Шапка модального окна</h2>
                    </div>
                    <div className="modal-body">
                        <p>Напишите здесь что-нибудь важное</p>
                        <p>Добавьте что-нибудь менее важное...</p>
                    </div>
                    <div className="modal-footer">
                        <h3>Футер</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkCard