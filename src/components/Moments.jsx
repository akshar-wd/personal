import React, { useState, useRef, useEffect } from 'react';
import style from './css/about.module.css'; // Import CSS file for styling

const pagesData = [
  { title: "Meet", subtitle: "Telegram", content: "Haha, We met on telegram in a unusual manner. No one can believe if we narrate our love story. Everything started from the small group of Telegram and today we are commpleting our 1 year. I feel lucky to be with you.", footerDate: "April 2023", pgNo: "1" },
  { title: "Mumbai", subtitle: "Trip 1", content: "I came to Mumbai to meet you. I was so nervous. I remember the day before i boarded the train. Lots of things were in head. I was nervous. I came and we met. We enjoyed and my tai died haha and i rushed back home.", footerDate: "November 2023", pgNo: "2" },
  { title: "Mumbai Again", subtitle: "Trip 2", content: "Promised you to meet within a month. Came back to mumbai to meet you. The way to mumbai was a nightmare haha. We enjoyed. Went to few places. Clicked lots of photos as memory. Fought a lot and lot more.", footerDate: "November 2023", pgNo: "3" },
  { title: "Pondicherry", subtitle: "Trip 3", content: "This was my best trip with you. Seriously enjoyed a lot. Got to know about you. Your anger issues and lot more. We spent 24 hours for few days together. Went to cafes. Went on long drive on scooty and What Not!!!", footerDate: "April 2024", pgNo: "4" },
  { title: "Likes", subtitle: "Baby Pigg", content: "What do i like about you?? I have answered this lot of times. Your nature, the way you care for me and your mom, your aura, your intelligence, your problem solving skills. I have 100 things to name. You are the besttt!!!", footerDate: "Sep 5", pgNo: "5" },
  { title: "Dislikes", subtitle: "Angry Bird", content: "You are a complete angry bird. Your mood swings are faster than cheetah's speed run. One minute you are angry and another you are sweet as sugar. You say bad bad bad when you are angry. I feel you should work on your calmness huh. Badddddd!!!", footerDate: "Sep 5", pgNo: "6" },
];

const Moments = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagesRef = useRef([]);

  useEffect(() => {
    const setIndex = () => {
      const pages = pagesRef.current;
      if (pages) {
        pages.forEach((page, index) => {
          page.style.zIndex = pages.length - index;
        });
      }
    };

    setIndex();
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage(prevPage => (prevPage > 0 ? prevPage - 1 : pagesData.length - 1));
  };

  const handleNext = () => {
    setCurrentPage(prevPage => (prevPage < pagesData.length - 1 ? prevPage + 1 : 0));
  };

  const page = pagesData[currentPage];

  return (
    <div name="Moments" className="h-screen w-full bg-gradient-to-b from-gray-800 via-gray to-black">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className={style.title_page}>Our Timeline</h1>
        </div>

        <div className={style.center}>
          <div className={style.book}>
            <div className={style.pages}>
              <div className={style.beads}>
                {pagesData.map((_, index) => (
                  <div key={index} className={style.bead}></div>
                ))}
              </div>
              <div className={`page ${currentPage === 0 ? 'active' : ''}`}>
                <div className={`${style.page_side} ${style.front}`}>
                  <div className={style.page_head}>
                    <div className={style.page_title}>
                      {page.title}
                      <span className="material-icons-outlined">
                        {page.title === "Meet" ? "groups_2" : page.title === "Mumbai" ? "train" : page.title === "Mumbai Again" ? "mode_of_travel" : page.title === "Pondicherry" ? "beach_access" : page.title === "Likes" ? "favorite" : "feed"}
                      </span>
                    </div>
                    <div className={style.page_subtitle}>{page.subtitle}</div>
                  </div>
                  <div className={style.page_content}>{page.content}</div>
                  <div className={style.page_footer}>
                    <span>{page.footerDate}</span>
                    <span className={style.pg_no}>{page.pgNo}</span>
                  </div>
                </div>
                <div className={`${style.page_side} ${style.back}`}>
                  <div className={style.page_head}>
                    <div className={style.page_title}>
                      {page.title === "Meet" ? "Mumbai" : page.title === "Mumbai" ? "Mumbai Again" : page.title === "Mumbai Again" ? "Pondicherry" : page.title === "Pondicherry" ? "Likes" : "Dislikes"}
                      <span className="material-icons-outlined">
                        {page.title === "Meet" ? "train" : page.title === "Mumbai" ? "mode_of_travel" : page.title === "Mumbai Again" ? "beach_access" : page.title === "Pondicherry" ? "favorite" : "school"}
                      </span>
                    </div>
                    <div className={style.page_subtitle}>{page.subtitle}</div>
                  </div>
                  <div className={style.page_content}>{page.content}</div>
                  <div className={style.page_footer}>
                    <span>{page.footerDate}</span>
                    <span className={style.pg_no}>{page.pgNo}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.controls}>
              <button type="button" className="btn" onClick={handlePrevious}>
                <span className="material-icons-outlined">arrow_back</span>
              </button>
              <button type="button" className="btn" onClick={handleNext}>
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moments;
