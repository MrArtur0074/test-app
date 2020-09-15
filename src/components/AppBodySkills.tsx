import React from 'react';
import './AppBody.css';
import Skill from './Skill';
import {Istates} from '../logic/skillData'

export interface IstatesProps {
    0: Istates;
}

class AppBodySkills extends React.Component<{}> {
    public props: IstatesProps = this.props;
    render() {
        let componentsRender = this.props[0].skills.map((Component, i) => (
            <Skill key={Component.id} {...Component}/>
        ));
        return (
            <div>
                <div className='skills-h'> Мои навыки и знания:</div>
                {componentsRender}
            </div>
        )
    }
}

export default AppBodySkills