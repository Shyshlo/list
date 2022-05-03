
import './App.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className='app'>
    <div className='containerLogo'>
  <img className='logo' src={ image1 } width='200px' alt='photo1' />
    </div>
    <div className='container'>
  <h1> TO DO LIST</h1>
  </div>

   <ToDoList />

<div className='container'>
<img src={ image2 } width='100%' height='300px' alt='photo2' />
  </div>
  </div>
  );
}

export default App;
