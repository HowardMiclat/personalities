import { useState } from 'react';
import { CelebrityList } from './data.tsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < CelebrityList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(CelebrityList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let Celebrity = CelebrityList[index];
  return (
    <>
    <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{Celebrity.name} </i>
        ( {Celebrity.career} )
      </h2>
      <h3>
        ({index + 1} of {CelebrityList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{Celebrity.description}</p>}
      <img
        src={Celebrity.url}
        alt={Celebrity.alt}
      />
    </>
  );
}
