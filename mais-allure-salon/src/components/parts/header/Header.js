import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar.js'
import Logo from './Logo.js'
import '../navbar/Navbar.css'
import './Logo.css'

class Header extends React.Component {
        constructor(props) {
            super(props)
        }


        render() {
            return (
                (this.props.logoFlag == 1) ?
                ( <div id = "HEADER"
                    className = "container-fluid ${this.props.headerClass} ">
                    <Navbar data = { this.props.data }/>
                    <Logo logoId = { this.props.logoId }
                        withMyPic = { this.props.withMyPic }
                        withLogo = { this.props.withLogo }
                        logoTitle = { this.props.logoTitle }
                        logoClass = { this.props.logoClass }
                        pgTitle = { this.props.pgTitle }
                        innerDivClass = { this.props.innerDivClass }
                    /> 
                    </div>):
                    ( 
                        <div id = "HEADER"
                                className = "container-fluid ${this.props.headerClass} " >
                            <Navbar />
                        </div>
                    )
                );
            }
        }

        export default Header;