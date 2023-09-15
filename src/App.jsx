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

  const handleAddnames = (name, hours) =>{
    const newName = names.find(listname => listname == name)
    if(name == newName){
      return toast('This data is already here') 
    }
    let newNames = [...names, name]
    setNames(newNames);
    console.log(hours);
    const setCredit = credithour + hours;
    setcreditHour(setCredit);
    
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-4 mb-5'>Course Registration</h1>
      <div className='flex gap-2 w-11/12 mx-auto'>
        <Bloogs handleAddnames={handleAddnames}></Bloogs>
        <Addlist 
        names={names}
        credithour={credithour}
        ></Addlist>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
