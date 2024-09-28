import React from "react";
import Container from "../../../components/common/Container";

const PopularReadSection = () => {
  const handleAndNewsData = [
    {
      id: 1,
      image:
        "https://www.goodfinancialcents.com/wp-content/uploads/2024/06/Screenshot-2024-06-13-at-3.14.12%E2%80%AFPM-1024x450.png",
      title:
        "Financial Peace University vs. True Financial Freedom vs. Crown Financial MoneyLife",
      description:
        "I recently completed three of the top Christian financial education programs for churches: SeedTime’s True Financial Freedom, Dave Ramsey’s Financial Peace University, and Crown Financial’s MoneyLife",
      date: "August 15, 2024",
    },
    {
      id: 2,
      image:
        "https://www.goodfinancialcents.com/wp-content/uploads/2024/02/College-Ave-Ambition-Card-1024x549.png.webp",
      title: "6 Ways to Help Your Child Build Credit During College",
      description:
        "College students have a lot on their plate already, including the need to study to get good grades, participating in any number of on-campus activities and potentially working part-time to have some spending money.",
      date: "September 5, 2024",
    },
    {
      id: 3,
      image:
        "https://www.goodfinancialcents.com/wp-content/uploads/2018/05/outsite-co-R-LK3sqLiBw-unsplash-248x145.jpg",
      title: "How to Make a Budget (And Actually Stick To It Every Month)",
      description:
        "How to Make a Budget (And Actually Stick To It Every Month)",
      date: "October 12, 2024",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ264xOWM8B7icEDq3g2wU1-sjce7cMCSX3jw&s",
      title:
        "QUANTUM COMPUTING STARTUPS GAIN MOMENTUM WITH MAJOR INVESTMENTS IN 2024",
      description:
        "Quantum computing startups attract significant investments as the technology gains momentum globally.",
      date: "November 2, 2024",
    },
    {
      id: 5,
      image:
        "https://www.goodfinancialcents.com/wp-content/uploads/2022/08/High-yield-investments-248x145.jpeg",
      title: "The 9 Best Ways to Invest $1,000",
      description:
        "Making the most of your money by investing wisely is a goal shared by many. But how can you ensure your $1,000 investment not only grows but also provides the financial security and returns you desire?",
      date: "November 22, 2024",
    },
    {
      id: 6,
      image:
        "https://www.goodfinancialcents.com/wp-content/uploads/2020/02/shutterstock_2001229691-248x145.jpg",
      title: "Best Tax Software Programs for 2024",
      description:
        "Uncover the top-rated tax software programs for 2024, designed to streamline your tax filing process and maximize your returns. Which of these cutting-edge tools will help you conquer tax season with ease and accuracy?",
      date: "December 15, 2024",
    },
  ];
  return (
    <div>
      <div className="bg-[#F5F5F5] mt-8 w-full">
        <Container>
          <div className="py-7">
            <div>
              <h1 className="text-[30px] uppercase text-[#1e293b] font-bold py-5">
                Popular Read And Write
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {handleAndNewsData.map((item, index) => (
                <div key={index}>
                  <div className="w-full h-[192px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-[15px] uppercase text-[#1e293b] font-bold pt-5">
                      {item.title}
                    </h1>
                    <h1 className="text-[12px] uppercase text-[#343e51] font-bold pt-1 pb-2">
                      {item.date}
                    </h1>
                    <p className="text-[16px] text-[#343e51] ">
                      {item.description}...
                    </p>
                    <button className="text-[#1e293b] border px-3 py-1 border-[#1e293b] my-4 ">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PopularReadSection;
