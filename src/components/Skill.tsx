import React from 'react';
import './AppBody.css';
import {Iskill} from '../logic/skillData'

class Skill extends React.Component {
    public props: Iskill = this.props;
    render() {
        return (
            <div className='card'>
                <div className='card-img'>
                    <img src={this.props.src} />
                </div>
                <div className='form-attr'> <span className='text-card'> {this.props.name} </span></div>
                <div className='form-attr'> <span className='text-card'> {this.props.title} </span></div>
            </div>
        )
    }
    
}

export default Skill