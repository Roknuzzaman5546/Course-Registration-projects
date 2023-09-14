import { useState } from 'react';
import './App.css'
import Addlist from './Componants/Addlist/Addlist'
import Bloogs from './Componants/Bloogs/Bloogs'

function App() {
  const [names, setNames] = useState([]);

  const handleAddnames = (name) =>{
        let newNames = [...names, name]
        setNames(newNames);
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-4 mb-5'>Course Registration</h1>
      <div className='flex gap-2 w-11/12 mx-auto'>
        <Bloogs handleAddnames={handleAddnames}></Bloogs>
        <Addlist names={names}></Addlist>
      </div>
    </>
  )
}

export default App
