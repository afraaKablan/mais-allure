import React from 'react';
import ReactDOM from 'react-dom';
import {Items} from './Items'//myJson
import SalonItem from './SalonItem'
class SalonItems extends React.Component {

  render() {
    const servItems = Items.map((singleItem) =>
                      <SalonItem item={singleItem} />
                    );
    return (
      <div class="row try">
        {servItems}
      </div>
    );
  }
}

export default SalonItems
