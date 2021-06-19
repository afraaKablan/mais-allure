import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar.js'
import Logo from './Logo.js'
import '../navbar/Navbar.css'
import './Logo.css'
import './Header.css'

class Header extends React.Component {
        constructor(props) {
            super(props)
        }

        // ShowAndHideProfilePage = () => {
        //     var x = document.getElementsByClassName("profileNavTag");
        //     console.log("display "+ x[0].style.display)
        //     console.log("Nav User" + this.props.user)
        //     // if (this.props.user !== 'Guest' && x[0].style.display === 'none') {
        //     //     x.style.display = 'block';
        //     // } else {
        //     //     x.style.display = 'none';
        //     // }
        // }

        render() {
            // this.ShowAndHideProfilePage();

            if (!this.props.data.length > 1){
                return (this.props.data[this.props.data.length - 1])
            }
            console.log(this.props.data)
            return (
                (this.props.logoFlag == 1) ?
                ( <div id = "HEADER"
                    className = "container-fluid ${this.props.headerClass} ">
                    <Navbar data = { this.props.data }
                            user={this.props.user}
                    />
                    <Logo logoData = {this.props.data.Logo[0]}
                        logoId = { this.props.logoId }
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
                            <Navbar data = { this.props.data }/>
                        </div>
                    )
                );
            }
        }

        export default Header;