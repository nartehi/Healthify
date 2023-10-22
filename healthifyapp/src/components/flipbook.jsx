import React, { useState } from "react";
import PageFlip from "react-pageflip";
import "./flipbook.css";

const HorizontalFlipbook = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="horizontal-flipbook-container">
      <PageFlip width={400} height={300} currentPage={page}>
                <div className="start" key="page-5">
                <p></p>
                </div>

                <div className="page1" key="page-1">
                <h3>Sunny lived in Happyville, a cheerful town.</h3>
                <h3>One day, his friends told him about the 'Happyville Festival'.</h3> 
                <h3>To join, Sunny needed 'Happyville Coins' earned by helping, saving, and finding treasures.</h3>
                </div>

                <div className="page2" key="page-2">
                <h3>Sunny painted, baked, and helped neighbors, filling his piggy bank.</h3>
                <h3>At the festival, he traded coins for cool stuff, including supporting his friends.</h3>
                </div>
                
                <div className="page3" key="page-3">
                <h3>Sunny learned to manage money wisely and found joy in helping others.</h3>
                <br />
                <h3>The End</h3>
                </div>

                <div className="end" key="page-4">
                <button>hi</button>
                </div>
      </PageFlip>

      <div className="navigation">
        <button onClick={prevPage} disabled={page === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={page === 4}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HorizontalFlipbook;
