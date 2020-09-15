import React from 'react';
import plus from '../img/plus.svg';

interface IAddWorkCard {
    0(): void;
    1(): void;
}

class AddWorkCard extends React.Component<{}>{
    public props: IAddWorkCard = this.props;
    render() {
        return (
            <div>
                <div className='work-card-add work-card' onClick={this.props[0]}>
                    <img src={plus} />
                </div>
            </div>
        )
    }
}

export default AddWorkCard