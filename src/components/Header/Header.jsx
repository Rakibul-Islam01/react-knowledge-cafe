import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' py-2 text-2xl items-center flex justify-between border-b-2'>
            <h3 className=''>Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;