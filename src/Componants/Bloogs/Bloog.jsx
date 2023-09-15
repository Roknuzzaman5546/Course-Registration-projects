import PropTypes from 'prop-types';
const Bloog = ({cart, handleAddnames}) => {
        const { name, title, cover, hours, price} = cart;
    return (
        <div className=' bg-slate-200 p-2 rounded-md'>
            <img src={cover} alt="" />
            <h3 className=' font-bold'>{name}</h3>
            <h3 className=' text-sm py-2'>{title}</h3>
            <div className='flex justify-between items-center'>
                <p>$ Price: {price}</p>
                <p> Credit: {hours}</p>
            </div>
            <div className=' flex justify-center py-2'>
            <button 
            className=' bg-blue-500 py-2 px-10 rounded-lg'
            onClick={() => handleAddnames(name, hours)}
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