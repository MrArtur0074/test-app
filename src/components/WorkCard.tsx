import React from 'react';
import {Iwork} from '../logic/skillData';
import imgEdit from '../img/edit.svg';
import imgDelete from '../img/delete.svg';
import {IInfoCard} from './ModalEdit';

interface IWorkCardProps {
    0: Iwork;
    1(number:number): void;
    2: number;
    3(): void;
}

class WorkCard extends React.Component<IWorkCardProps> {
    public props: IWorkCardProps = this.props;
    constructor(props:IWorkCardProps) {
        super(props);
        this.dataToModal = this.dataToModal.bind(this);
    }
    render() {
        return (
            <div>
                <div className='work-card'>
                    <div className='work-card-body'>
                        <div className='work-card-name'> {this.props[0].name} </div>
                        <div className='work-card-title'> {this.props[0].title} </div>
                        <div className='work-card-date'> <span>С {this.props[0].startDate} по {this.props[0].endDate}</span> </div>
                    </div>
                    <div className='work-card-icons'> 
                        <img className='card-icon' src={imgEdit} onClick={this.dataToModal}/>
                        <img className='card-icon' src={imgDelete}/>
                    </div>
                </div>
            </div>
        )
    }

    private dataToModal():void {
        this.props[1](this.props[2]);
        this.props[3]();
    }
}

export default WorkCard