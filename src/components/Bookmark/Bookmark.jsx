import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => { 
    const {title} = bookmark;
    return (
        <div className="bg-white p-3 rounded mb-3">
            {title}
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmark;