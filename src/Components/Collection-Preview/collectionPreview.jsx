import React from 'react';
import './collectionPreview.scss';
import CollectionItem from '../Collection-item/collectionItem';

const CollectionPreview = ({title, items}) => {
  return(
      <div className="collection-preview" >
          <h1 className="title">{title}</h1>
          <div className="preview">
          { items
          .filter((item, id) => id < 4)
          . map((item)=>(
            <CollectionItem key={item.id} {...item}/> 
          ))}
          </div>
         
      </div>
  )
}
export default CollectionPreview;