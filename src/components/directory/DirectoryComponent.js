import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/Menu-item';

import './directory.styles.scss'

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">{sections.map(({ title, imageUrl, id, size, linkUrl }) => <MenuItem imageUrl={imageUrl} size={size} key={id} title={title} linkUrl={linkUrl} />)}</div>
    )
}



const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);