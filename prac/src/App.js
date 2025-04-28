import {useState} from 'react';
import axios from 'axios';
import './App.css';

const App = ()=>{
  const [name,setName] = useState('');
  const onAddUser = async(event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/add',{name})
    .then((res)=>{
      alert(res.data.message);
    })
    .catch((err)=>{
      alert(err.message);
    })
  }
  return (
    <form onSubmit={onAddUser}>
      <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
}

export default App;
