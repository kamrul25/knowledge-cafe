import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';
import Question from './components/Question/Question';

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [titles, setTitles] = useState([]);
  const [id, setId] = useState("");
  
  const handelReadTime = (readTime ) =>{
    if(totalTime){
      const newTime = totalTime + parseFloat(readTime);
      setTotalTime(newTime);
    }
    else{
      const newTime = parseFloat(readTime);
      setTotalTime(newTime)
    }

  }


  let allTitles = [];
  const handleBlogTitle = (blogTitle ,id) =>{
    allTitles.push(...titles, blogTitle);
    setTitles(allTitles);
    setId(id);
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
            <SideCard  totalTime={totalTime} titles={titles}></SideCard>
        </div>
      </div>

        <Question></Question>
   </div>
  )
}

export default App
