import React, { useState } from "react";
import PageFlip from "react-pageflip";
import { Link } from "react-router-dom";
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
      <PageFlip width={600} height={500} currentPage={page}>
                <div className="start" key="page-5">
                  <div className="Sunny">
                    <img src="/public/images/Sunny.png" alt="Sunny" style={{ width: "500px", height: "400px" }}/>
                  </div>
                </div>

                <div className="page1" key="page-1">
                <div className="head1">
                  <h1>Sunny's Money</h1>
                </div>
                <h3>Sunny lived in Happyville, a cheerful town.</h3>
                <h3>One day, his friends told him about the 'Happyville Festival'.</h3>
                <h3>To join, Sunny needed 'Happyville Coins' earned by helping, saving, and finding treasures.</h3>
                <div className="pic1" key="page-5">
                  <div className="image-container">
                  <img src="/public/images/GoldCoins.png" alt="Gold Coins" />
                  </div>
                </div>
                </div>

                <div className="page2" key="page-2">
                <div className="head2">
                  <h3>Sunny painted, baked, and helped neighbors, filling his piggy bank.</h3>
                </div>
                <div className="piggybank">
                  <div className="image-container2">
                    <img src="/public/images/PiggyBank.png" alt="Piggy Bank" />
                   </div>
                </div>
                <div className="head3">
                  <h3>At the festival, he traded coins for cake and supported his friends.</h3>
                </div>
                </div>
               
                <div className="page3" key="page-3">
                  <div className="head4">
                    <h3>Sunny learned to manage money wisely and found joy in helping others.</h3>
                  </div>
                  <div className="head5">
                    <h3>The End!</h3>
                  </div>
                  <div className="GivingMoney">
                    <img src="/public/images/GivingMoney.png" alt="GivingMoney" />
                  </div>
                  <div className="TakeQuiz">
                  <Link to="/Quiz">
                  <button className="Quiz">Take The Quiz</button>
                  </Link>
                  </div>
                </div>

      </PageFlip>

      {/* <div className="navigation">
        <button onClick={prevPage} disabled={page === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={page === 4}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default HorizontalFlipbook;