import React from 'react';
import {Iwork} from '../logic/skillData';

class WorkCard extends React.Component<{}> {
    public props: Iwork = this.props;
    render() {
        let startDate:string = this._formatDate(this.props.startDate);
        let endDate:string = this._formatDate(this.props.endDate);
        return (
            <div>
                <div className='work-card'>
                    <div className='work-card-name'> {this.props.name} </div>
                    <div className='work-card-title'> {this.props.title} </div>
                    <div className='work-card-date'> <span>С {startDate} по {endDate}</span> </div>
                </div>
            </div>
        )
    }

    // Date to string
    private _formatDate = (date:Date): string => {
        var day:number = date.getDate();
        let dd:string = (day < 10)? '0' + day : '' + day;

        var month:number = date.getMonth();
        let mm:string = (month < 10)? '0' + month : '' + month;

        var year:number = date.getFullYear();
        let yy:string = '' + year;

        return dd + '.' + mm + '.' + yy;
    }
}

export default WorkCard