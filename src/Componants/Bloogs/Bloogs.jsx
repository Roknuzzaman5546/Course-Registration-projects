import { useEffect } from "react";
import { useState } from "react";
import Bloog from "./Bloog";
import PropTypes from 'prop-types';


const Bloogs = ({handleAddnames}) => {
    const [carts, setCarts] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCarts(data));
    }, []);

    return (
        <div className=" md:w-2/3">
            <div className="grid grid-cols-3 gap-2">
            {
                carts.map(cart => <Bloog
                    key={cart.id} 
                    cart={cart}
                    handleAddnames={handleAddnames}
                ></Bloog>)
            }
            </div>
        </div>
    );
};

Bloogs.propTypes ={
    handleAddnames: PropTypes.func
}
export default Bloogs;