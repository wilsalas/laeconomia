import React, { Component } from 'react';
import SliderComponent from './Slider';
import BabyCareComponent from './BabyCare';

export default class Content1Component extends Component {

    constructor() {
        super();

        this.state = {
            seletedMenu:  0
        }
    }

    componentDidMount(){
        this.setState({
            seletedMenu: this.props.seletedMenu
        })
    }

    render() {
        
        return (
            <div className="container-indent nomargin" style={{ backgroundColor: '#f4f4f4' }}>
                <div className={this.state.seletedMenu !== 1 ? "" : "container"}>

                    {/* menu inicio */}
                    {this.state.seletedMenu === 0 && <SliderComponent banner={false} />}

                    {/* menu drogueria */}
                    {this.state.seletedMenu === 1 && <BabyCareComponent />}

                    {/* menu cuidado bebe */}
                    {/* menu diccionario */}
                    {(this.state.seletedMenu === 2 || this.state.seletedMenu === 3) && <SliderComponent banner={true} />}

                    {/* menu sucursal */}
                    {this.state.seletedMenu === 4 && <div>  mapa para sucursales  </div>}
                </div>
            </div>
        );
    }
}