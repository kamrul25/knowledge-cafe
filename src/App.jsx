import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <div className='divider'> </div>

      <div className="container">
        <div >
          <Blogs></Blogs>
        </div>
        <div >
            <SideCard></SideCard>
        </div>
      </div>
    </div>
  )
}

export default App
