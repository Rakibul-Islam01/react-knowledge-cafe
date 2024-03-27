import PropTypes from 'prop-types';
import {FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtag } = blog;
    // console.log(blog)
    return (
        <div className='mb-6'>
            <img src={cover} height={350} alt="" />
            <div className='flex justify-between py-4'>
                <div className='flex justify-between gap-4 items-center'>
                    <img className='rounded-full border-gray-800' src={author_img} height={40} width={40} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p> <span className='text-sm text-gray-400'>{posted_date}</span></p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-sm text-gray-400'>{reading_time} mins</span>
                    <button onClick={()=>handleAddToBookMark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <div className='mt-4 mb-5'>
                {
                    hashtag.map((hash, idx) => <a className='me-3 text-gray-500' href='#' key={idx}>#{hash}</a>)
                }
            </div>
            <div>
                <a href="" className='text-blue-600 underline'>Mark as read</a>
            </div>
            <hr className='my-10' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func
}

export default Blog;