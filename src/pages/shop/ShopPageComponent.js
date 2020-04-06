import React from 'react';
import SHOP_DATA from './shop.data';

import PreviewCollection from '../../components/preview-collection/PreviewCollectionComponent';

class ShopPage extends React.Component {

    constructor() {
        super();

        this.state = {

            collections: SHOP_DATA

        }
    }
    render() {

        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...collectionProps }) => <PreviewCollection key={id}  {...collectionProps} />)
                }
            </div>
        )
    }
}

export default ShopPage;