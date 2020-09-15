import React from 'react';
import plus from '../img/plus.svg';

class AddWorkCard extends React.Component{
    render() {
        return (
            <div>
                <div className='work-card-add work-card'>
                    <img src={plus} />
                </div>
            </div>
        )
    }
}

export default AddWorkCard