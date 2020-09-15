import React from 'react';
import './AppBody.css';
import {IstatesProps} from './AppBodySkills';
import WorkCard from './WorkCard';
import AddWorkCard from './AddWorkCard';
import Modal from './Modal'

class AppBodyWork extends React.Component<{}> {
    public props: IstatesProps = this.props;
    render() {
        let componentsRender = this.props[0].works.map((Component, i) => (
            <WorkCard key={Component.id} {...Component}/>
        ));
        return (
            <div>
                {componentsRender}
                <AddWorkCard />
                <Modal />
            </div>
        )
    }
}

export default AppBodyWork