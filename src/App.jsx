import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';

function App() {
  const [totalTime, setTotalTime] = useState(0);
  
  const handelReadTime = (readTime) =>{
    if(totalTime){
      const newTime = totalTime + parseFloat(readTime);
      setTotalTime(newTime);
    }
    else{
      const newTime = parseFloat(readTime);
      setTotalTime(newTime)
    }
  }

  const handleBlogTitle = (blogTitle) =>{
    console.log(blogTitle)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='divider'> </div>

      <div className="container">
        <div >
          <Blogs handelReadTime={handelReadTime}
          handleBlogTitle={handleBlogTitle}
          ></Blogs>
        </div>
        <div >
            <SideCard totalTime={totalTime}></SideCard>
        </div>
      </div>
    </div>
  )
}

export default App
