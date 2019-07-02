import React, { Component, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import { GetCitys } from '../managers/api/ApiManager';


class Location extends Component {

    constructor() {
        super();
        this.state = {
            citys: [],
            defaultCity: "Ciudad"
        }
    }

    // loading data for citys
    async componentDidMount() {
        let citys = await GetCitys();
        this.setState({ citys })
    }


    SelectedCity = e => {
        console.log(e.target.value);
        localStorage.setItem("city", e.target.value);

    }

    render() {
        return (
            <Fragment>
                <h5>UBICACIÓN</h5>
                <p>¿Desde que ciudad quieres comprar?</p>
                <Input type="select" name="select" className="mt-2" onChange={this.SelectedCity.bind(this)} defaultValue={this.state.defaultCity}>
                    <option value="">{this.state.defaultCity}</option>
                    {this.state.citys.map((element, i) => <option key={i} value={element.Ciudad}>{element.Descripcion}</option>)}
                </Input>
            </Fragment>
        );
    }
}


class PaymentMethos extends Component {

    render() {
        return (
            <Fragment>
                {/* {this.props.credit_cart  && 

                
                } */}
            </Fragment>
        )
    }
}



class ModalComponent extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            buttonCloset: false
        };
        this.toggle = this.toggle.bind(this);
    }


    componentDidMount() {
        // validate if selected one city and not empty
        this.toggle(!localStorage.getItem("city"))
    }

    toggle(open) {
        this.setState({ open });
    }


    render() {
        return (
            <Fragment>
                <Modal returnFocusAfterClose isOpen={this.state.open}>
                    {this.state.buttonCloset && <ModalHeader toggle={this.toggle}></ModalHeader>}
                    <ModalBody>
                        <Location />
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export {
    ModalComponent
}


