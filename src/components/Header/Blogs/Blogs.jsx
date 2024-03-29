import { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookMark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className='md:w-2/3'>
            <h2 className='text-xl mb-3'>Blogs Found: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookMark={handleAddToBookMark} handleReadingTime={handleReadingTime} ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark : PropTypes.func,
    handleReadingTime : PropTypes.func
}

export default Blogs;