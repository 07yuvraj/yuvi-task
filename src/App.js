import { useState, useEffect, useRef } from 'react';
import colleges from './assests/colleges.json';
import CollegeDetails from './CollegeDetails';

function App() {
  const loader = useRef(null);
  const [fetchTimes, setFetchTimes] = useState(0);
  const [collegeInfo, setCollegeInfo] = useState([]);

  const fetchData = (fetchTime) => {
    let tempArr = [];
    for (let i = 10 * fetchTime; i < 10 * (fetchTime + 1); i++) {
      tempArr.push(colleges.colleges[i]);
    }
    setCollegeInfo(collegeInfo.concat(tempArr));
  }

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setFetchTimes((page) => page + 1)
    }
  }

  useEffect(() => {
    fetchData(fetchTimes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTimes]);

  return (
    <div>
      <div class="text">
        <h1>Colleges in North India</h1>
      </div>
      <div className="outer-container">
        {collegeInfo.map((value, index) => (
          <CollegeDetails key={index} collegeData={value} />
        ))}
      </div>
      {fetchTimes < 4 ? (
        <div className="loading" ref={loader}>
          <h2>Load More</h2>
        </div>
      ) : (
        <h3>End of List</h3>
      )}
    </div>
  );
}

export default App;
