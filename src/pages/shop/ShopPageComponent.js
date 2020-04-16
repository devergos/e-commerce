import React from 'react';

import { Route } from 'react-router-dom';

import PreviewCollection from '../../components/collections-overview/CollectionsOverviewComponent';
import CategoryPage from '../category/CategoryComponent';

const ShopPage = ({ collections, match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={PreviewCollection} />
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}



export default ShopPage;