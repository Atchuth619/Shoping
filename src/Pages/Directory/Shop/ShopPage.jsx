import React, {Component} from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../../Components/Collection-Preview/collectionPreview';


class ShopPage extends Component {
  constructor(props) {
    super(props);

  
    this.state = {
      collections: SHOP_DATA
    }
}     
 render() {
   console.log("Collections"+ JSON.stringify(this.state.collections))
  const {collections}  = this.state;
    return(
      <div>
{collections.map(({id, ...otherCollections})=>(
        <CollectionPreview key={id} {...otherCollections}/>
      ))}
      </div>
        )
    }
}
export default ShopPage;