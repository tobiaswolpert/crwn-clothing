import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
              {collections.map(({id, ...otherCollectionProps}) => 
                        <PreviewCollection key={id} {...otherCollectionProps}/>)}
        </div>
    )
} 

const mapStateToProps = state =>({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(CollectionsOverview);