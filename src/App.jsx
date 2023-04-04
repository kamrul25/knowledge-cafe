import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';
import Question from './components/Question/Question';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [titles, setTitles] = useState([]);
  
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
  const handleBlogTitle = (blog ,id) =>{
    allTitles.push(...titles, blog);
    setTitles(allTitles);

    const existTitle = titles.find( t => t.id === id);
    if(existTitle){
      toast("You Have Already Bookmarked This Blog!!!");
    }
  }


  return (
    <div className="App">
      <Header></Header>
      <div className="divider"> </div>

      <div className="container">
        <div >
          <Blogs handelReadTime={handelReadTime}
          handleBlogTitle={handleBlogTitle}
          ></Blogs>
        </div>
        <div className="side-card-container">
            <SideCard  totalTime={totalTime} titles={titles}></SideCard> <ToastContainer/>
        </div>
      </div>

        <Question></Question>
   </div>
  )
}

export default App
