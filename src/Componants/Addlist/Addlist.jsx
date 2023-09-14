import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Addlist = ({names}) => {
    // console.log(names);
    useEffect(() => {},[newNames])
    return (
        <div className=" md:w-1/3 "> 
            <div className=" bg-slate-100 p-2 rounded-md">
                <h3 className=" text-2xl font-bold text-blue-600 border-b-2 pb-1">Credit Hour Remaining 7 hr</h3>
            </div>
            <div>
                {
                    names.map(name => newNames.push(name))                
                }
            </div>
        </div>
    );
};
Addlist.propTypes ={
    names: PropTypes.object.isRequired
}
export default Addlist;