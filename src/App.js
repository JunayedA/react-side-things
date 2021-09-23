import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/cosmetics/Cosmetics';

function App() {
  const cosmetics =[
    {id:1,name:'Alta',price:25},
    {id:2,name:'Nail Polish',price:2500},
    {id:3,name:'Face musk',price:255},
    {id:4,name:'Maskara',price:560}
  ]
  return (
    <div className="App">
      <h3>Shop my cosmetics</h3>
      
    </div>
  );
}

export default App;
