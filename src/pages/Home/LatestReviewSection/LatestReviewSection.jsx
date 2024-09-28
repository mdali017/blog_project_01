import React from "react";
import Container from "../../../components/common/Container";

const LatestReviewSection = () => {
  const latestReviewData = [
    {
      id: 1,
      image:
        "https://s.yimg.com/uu/api/res/1.2/m_DWj7LpJRYuD.dm_pC1ew--~B/Zmk9ZmlsbDtoPTM2MTtweW9mZj01MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/b9cdc4d0-756d-11ef-b5e6-49e7b9de5265.cf.webp",
      title: "iPhone 16 Pro and Pro Max review: Cameras and customization",
      author: "Cherlynn Low",
      date: "27 September 2024",
    },
    {
      id: 2,
      image:
        "https://s.yimg.com/uu/api/res/1.2/IkCz.33j9qSgA8a.x9ZxqQ--~B/Zmk9ZmlsbDtoPTM2MTtweW9mZj01MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/bd6c15c0-74b3-11ef-b7de-5adf1836ab5a.cf.webp",
      title: "Apple Watch Series 10 review: Legacy and sequel in equal measure",
      author: "Cherlynn Low",
      date: "27 September 2024",
    },
    {
      id: 3,
      image:
        "https://s.yimg.com/uu/api/res/1.2/1mGSn9QabPhiCbJnkdsQlA--~B/Zmk9ZmlsbDtoPTM2MTtweW9mZj01MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/a37b2fb1-7397-11ef-bfff-e7404f6ac13f.cf.webp",
      title: "Apple AirPods 4 review: Pro features for everyone",
      author: "Billy Steele",
      date: "27 September 2024",
    },
    {
      id: 4,
      image:
        "https://s.yimg.com/uu/api/res/1.2/W3.hQN_gBk4hcNPnBbfjgw--~B/Zmk9ZmlsbDtoPTM2MTtweW9mZj01MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/60701f40-6a0b-11ef-9fee-3ba54be00e25.cf.webp",
      title: "Engadget review recap: Foldable, wearable, floatable",
      author: "Cherlynn Low",
      date: "27 September 2024",
    },
  ];
  return (
    <div className="my-10">
      <Container>
        <h1 className="hover:underline text-xl my-4 font-serif font-semibold">
          Latest Review
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-7">
          {latestReviewData.map((item, index) => (
            <div key={index}>
              <div className="w-[300px] h-[170px] ">
                <img
                  className="w-full h-full rounded-xl"
                  src={item.image}
                  alt=""
                />
              </div>
              <div>
                <h1 className="hover:underline font-semibold">{item.title}</h1>
                <p className="text-gray-600">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestReviewSection;
