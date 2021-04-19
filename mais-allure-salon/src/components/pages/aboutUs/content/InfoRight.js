import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from '../../../general/InfoCard/InfoCard'
import InfoExtra from './InfoExtra'

export class InfoRight extends React.Component {
  render() {
    return (
        <div id={this.props.infoID} class={this.props.infoClass}>
          <InfoCard id={this.props.id} class={this.props.class} titleClass={this.props.titleClass}
                    title={this.props.title} contentClass={this.props.contentClass}
                    content={this.props.content} hclass={this.props.hclass} />
          <InfoExtra divImgClass={this.props.divImgClass} imgSrc={this.props.imgSrc}
                     imgClass={this.props.imgClass} imgAlt={this.props.imgAlt} />
        </div>
    )
  }
}

export default InfoRight;
