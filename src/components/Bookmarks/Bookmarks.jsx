import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='w-1/3 text-center bg-gray-300 mt-10 ml-5 p-4'>
            <h2 className='text-xl bg-slate-300'>Total Reading Time: {readingTime}</h2>
            <hr className='mb-3' />
            <h2 className='mb-3'>Total Bookmark: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.array
}

export default Bookmarks;