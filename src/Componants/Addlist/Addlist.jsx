import PropTypes from 'prop-types';
// import { useEffect } from 'react';

const Addlist = ({names, credithour, remaininghour, showprice}) => {
    // console.log(credithour);
    // useEffect(() => {},[newNames])
    return (
        <div className=" md:w-1/3 "> 
            <div className=" bg-slate-100 p-2 rounded-md">
                <h3 className=" text-2xl font-bold text-blue-600 border-b-2 pb-2">Credit Hour Remaining {remaininghour} hr</h3>
            <div>
                <h3 className='text-center text-3xl text-orange-500 my-2 font-bold'>Course Name</h3>
                {
                    names.map((name, idx) => <h3 
                    key={idx}
                    className=' text-2xl font-semibold'
                    >{name}</h3>)                
                }
                <h3 className=' border-y-2 py-2 my-4'>Total credit hour: {credithour}</h3>
                <h3>Total Price : {showprice} USD</h3>
            </div>
            </div>
        </div>
    );
};
Addlist.propTypes ={
    names: PropTypes.object.isRequired,
    credithour: PropTypes.object.isRequired,
    remaininghour: PropTypes.object.isRequired,
    showprice: PropTypes.object.isRequired
}
export default Addlist;