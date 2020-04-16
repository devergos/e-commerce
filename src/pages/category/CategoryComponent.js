import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItemComponent';

import { selectCollection } from '../../redux/shop/shop.selector'

import './category.styles.scss';

const CategoryPage = ({ collection, match }) => {
    const { title, items } = collection;
    return (
        <div className="category">
            <h2 className={"title"}>
                {title}
            </h2>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)