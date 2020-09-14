import React from 'react';
import './AppBody.css';
import Skill from './Skill';
import {Istates} from '../logic/skillData'

interface AppBodySkillsProps {
    0: Istates;
}

class AppBodySkills extends React.Component<{}> {
    public props: AppBodySkillsProps = this.props;
    render() {
        console.log(this.props[0].skills);
        let componentsRender = this.props[0].skills.map((Component, i) => (
            <Skill key={Component.id} {...Component}/>
        ));
        return (
            <div>
                {componentsRender}
            </div>
        )
    }
}

export default AppBodySkills