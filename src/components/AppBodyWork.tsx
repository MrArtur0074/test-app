import React from 'react';
import './AppBody.css';
import {IstatesProps} from './AppBodySkills';
import WorkCard from './WorkCard';
import AddWorkCard from './AddWorkCard';
import Modal from './Modal'

export interface IAppBodyWork {
    isModal: boolean;
}

class AppBodyWork extends React.Component<{}, IAppBodyWork> {
    constructor(props:any) {
        super(props);
        this.state = {isModal: false}
      }

    public props: IstatesProps = this.props;
    render() {
        let componentsRender = this.props[0].works.map((Component, i) => (
            <WorkCard key={Component.id} {...Component}/>
        ));
        return (
            <div>
                {componentsRender}
                <AddWorkCard {...[this.isModalTrue, this.isModalFalse]}/>
                <Modal {...[this.state.isModal, this.isModalFalse]}/>
            </div>
        )
    }

    private isModalTrue = (): void => {
        this.setState({ isModal: true })
    }

    private isModalFalse = (): void => {
        this.setState({ isModal: false })
    }
}

export default AppBodyWork