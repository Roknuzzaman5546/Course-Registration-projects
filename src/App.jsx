import { useState } from 'react';
import './App.css'
import Addlist from './Componants/Addlist/Addlist'
import Bloogs from './Componants/Bloogs/Bloogs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [names, setNames] = useState([]);
  const [credithour, setcreditHour] = useState(0);
  const [remaininghour, setRemainingHour] = useState(20);
  const [showprice, setshowPrice] = useState(0);

  const handleAddnames = (name, hours, price) =>{
    const newName = names.find(listname => listname == name)
    if(name == newName){
      return toast('This data is already here') 
    }
    let newNames = [...names, name]
    setNames(newNames);
    const setCredit = credithour + hours;
    if(setCredit <= 20){
    setcreditHour(setCredit);
    }
    const newRemaining = remaininghour - hours;
    if(newRemaining >= 0){
      setRemainingHour(newRemaining);
    }
    const newPrice = showprice + price;
    setshowPrice(newPrice); 
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-4 mb-5 italic'>Course Registration</h1>
      <div className='flex gap-4 w-11/12 mx-auto'>
        <Bloogs handleAddnames={handleAddnames}></Bloogs>
        <Addlist 
        names={names}
        credithour={credithour}
        remaininghour={remaininghour}
        showprice={showprice}
        ></Addlist>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
