

const Bookmark = ({bookmark}) => { 
    const {title} = bookmark;
    return (
        <div className="bg-white p-3 rounded mb-3">
            {title}
        </div>
    );
};

export default Bookmark;