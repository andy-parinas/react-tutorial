import React, {Component} from 'react';
import style from './Modal.css';
import Wrap from '../../../hoc/Wrap';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal] inside compnentWillUpdate');
    }

    render() {

        return(

            <Wrap>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className={style.Modal}>
                    {this.props.children}
                </div>
            </Wrap>

        );
    }



}

export default Modal;