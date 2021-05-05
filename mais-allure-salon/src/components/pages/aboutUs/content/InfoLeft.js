import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'
import InfoExtra from './InfoExtra'

export class InfoLeft extends React.Component {
    render() {
        return ( <
            div id = { this.props.infoID }
            class = { this.props.infoClass } >
            <
            InfoExtra divImgClass = { this.props.divImgClass }
            imgSrc = { this.props.imgSrc }
            imgClass = { this.props.imgClass }
            imgAlt = { this.props.imgAlt }
            /> <
            InfoCard id = { this.props.id }
            class = { this.props.class }
            titleClass = { this.props.titleClass }
            title = { this.props.title }
            contentClass = { this.props.contentClass }
            content = { this.props.content }
            hclass = { this.props.hclass }
            /> <
            /div>
        )
    }
}
export default InfoLeft