import React from 'react';
import './AppBody.css';
import {IstatesProps} from './AppBodySkills';
import WorkCard from './WorkCard';
import AddWorkCard from './AddWorkCard';
import Modal from './ModalEdit';
import {IInfoCard} from './ModalEdit';
import ModalCreate from './ModalCreate';

export interface IAppBodyWork {
    isModalEdit: boolean;
    isModalCreate: boolean;
    data_work: Array<IInfoCard>;
    requiredItem: number;
}


interface IAppBodyWorkProps {}

class AppBodyWork extends React.Component<IAppBodyWorkProps, IAppBodyWork> {
    constructor(props:IAppBodyWorkProps) {
        super(props);
        this.state = {
            isModalEdit: false, 
            isModalCreate: false,
            data_work:[], 
            requiredItem: 0
        }
        this.isModalTrue = this.isModalTrue.bind(this);
        this.isModalFalse = this.isModalFalse.bind(this);
        this.setDataModal = this.setDataModal.bind(this);
        this.setModalDetails = this.setModalDetails.bind(this);
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/MrArtur0074/json-server/db')
            .then((res) => {
                res.json().then((data) => {
                    console.log(data.works);
                    this.setState({
                        data_work: data.works
                    })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    public props: IstatesProps = this.props;
    render() {
        if (!this.state.data_work.length) return null;
        let componentsRender = this.state.data_work.map((Component, index) => (
            <WorkCard key={index} {...[Component, this.setDataModal, index, this.isModalTrue]}/>
        ));

        const requiredItem:number = this.state.requiredItem;
        let modalData = this.state.data_work[requiredItem];

        return (
            <div>
                {componentsRender}
                <AddWorkCard {...[this.isModalCreateTrue, this.isModalCreateFalse]}/>
                <Modal {...[this.state.isModalEdit, this.isModalFalse, modalData, this.setModalDetails]}/>
                <ModalCreate {...[this.state.isModalCreate, this.isModalCreateFalse]}/>
            </div>
        )
    }

    private isModalTrue = (): void => {
        this.setState({ isModalEdit: true })
    }

    private isModalCreateTrue = (): void => {
        this.setState({ isModalCreate: true })
    }

    private isModalCreateFalse = (): void => {
        this.setState({ isModalCreate: false })
    }

    private isModalFalse = (): void => {
        this.setState({ isModalEdit: false })
    }

    private setDataModal = (index:number): void => {
        this.setState({ 
            requiredItem: index
        })
    }

    private setModalDetails(item:IInfoCard) {
        const requiredItem:number = this.state.requiredItem;
        let data_works:Array<IInfoCard> = this.state.data_work;
        data_works[requiredItem] = item;
        this.setState({data_work: data_works})
    }
}

export default AppBodyWork