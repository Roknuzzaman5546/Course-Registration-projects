import PropTypes from 'prop-types';
import { FaBookOpen } from 'react-icons/fa';
const Bloog = ({cart, handleAddnames}) => {
        const { name, title, cover, hours, price} = cart;
    return (
        <div className=' bg-slate-200 p-2 rounded-md'>
            <img src={cover} alt="" />
            <h3 className=' font-bold'>{name}</h3>
            <h3 className=' text-sm py-2'>{title}</h3>
            <div className='flex justify-between items-center'>
                <p>$ Price: {price}</p>
                
                <div className='flex items-center gap-1'>
                    <FaBookOpen></FaBookOpen>
                    <io5/>
                   <p> Credit: {hours}</p>
                </div>
            </div>
            <div className=' flex justify-center py-2'>
            <button 
            className=' bg-blue-500 py-2 px-10 rounded-lg'
            onClick={() => handleAddnames(name, hours, price)}
            >Select</button>
            </div>
        </div>
    );
};

Bloog.propTypes ={
    cart: PropTypes.object.isRequired,
    handleAddnames: PropTypes.func
}

export default Bloog;