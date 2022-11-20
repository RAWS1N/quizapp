import React, { useEffect, useState } from "react";
import Loader from "./Loader";
// import LayoutContainer from "./containers/LayoutContainer";
// import HeaderContainer from "./containers/HeaderContainer";
import {
  LayoutContainer,
  HeaderContainer,
  UserInfoContainer,
} from "./containers";
import InfiniteScroll from "react-infinite-scroll-component";
import { MiniLoader } from "./components";

function App() {
  const [data, setData] = useState(false);
  const [score, setScore] = useState(
    Number(localStorage.getItem("score")) || 0
  );
  const [show, setShow] = useState(false);
  const [maxScore,setMaxScore] = useState(localStorage.getItem("maxscore") || score)

 

  function toggle() {
    setShow((prevState) => !prevState);
  }

  async function fetchData() {
    const dataReq = await fetch("https://the-trivia-api.com/api/questions");
    // const dataReq = await fetch(`https://opentdb.com/api.php?amount=10&category=9`)
    const data = await dataReq.json();
    setData(data);
  }

  async function fetchMoreData() {
    const dataRequest = await fetch("https://the-trivia-api.com/api/questions");
    const jsonData = await dataRequest.json();
    setData((prevState) => [...new Set(prevState.concat(jsonData))]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function reset(e) {
    e.preventDefault();
    setScore(0);
    fetchData();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    localStorage.setItem("score",0);
    if(score > maxScore){
      setMaxScore(score)
      localStorage.setItem('maxscore',score)
    }
  }, [score]);

  return (
    <div>
      {<HeaderContainer score={score} toggle={toggle} reset={reset} />}
      {data ? (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<MiniLoader />}
        >
          <div>
            {show && (
              <UserInfoContainer
                score={score}
                maxScore={maxScore}
                toggle={toggle}
                reset={reset}
              />
            )}
            <LayoutContainer data={data} score={score} setScore={setScore}/>
          </div>
        </InfiniteScroll>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
