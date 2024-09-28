import React from "react";
import Container from "../../../components/common/Container";

const BuyingGuidesSection = () => {
  const latestReviewData = [
    {
      id: 1,
      image:
        "https://s.yimg.com/uu/api/res/1.2/4yPyF45EdRDLUF5ZzMrRxQ--~B/Zmk9ZmlsbDtoPTQ5NDtweW9mZj01MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-07/0033d7d0-37c4-11ef-bdf7-7f36196ac551.cf.webp",
      title: "The best Chromebook you can buy in 2024",
      author: "Nathan Ingraham",
      date: "27 September 2024",
    },
    {
      id: 2,
      image:
        "https://s.yimg.com/uu/api/res/1.2/Um2ExDdE6ytH52ZRZ0h_Hg--~B/Zmk9ZmlsbDtoPTQ5NDtweW9mZj01MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-07/5b567b80-48f0-11ef-afff-de19099238b9.cf.webp",
      title: "The best Apple Watch accessories for 2024",
      author: "Valentina Palladino",
      date: "27 September 2024",
    },
    {
      id: 3,
      image:
        "https://s.yimg.com/uu/api/res/1.2/u8zNPYetFKl9CT.bCGeTkQ--~B/Zmk9ZmlsbDtoPTQ5NDtweW9mZj01MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/131b1a60-75d2-11ef-9b57-8f4f141e82ea.cf.webp",
      title: "The best iPhone 16 and iPhone 16 Pro cases for 2024",
      author: "Valentina Palladino",
      date: "27 September 2024",
    },
    {
      id: 4,
      image:
        "https://s.yimg.com/uu/api/res/1.2/_bynz5bEmgFoCBDtiIgytA--~B/Zmk9ZmlsbDtoPTQ5NDtweW9mZj01MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-07/e57f2940-3f7e-11ef-bfc5-fac1373f2c32.cf.webp",
      title: "The best VR headsets for 2024",
      author: "Devindra Hardawar",
      date: "27 September 2024",
    },
  ];
  return (
    <div>
      <Container>
        <div className="w-full">
          <h1 className="hover:underline text-xl my-4 font-serif font-semibold">
            Buying Guides
          </h1>
          <div className="flex justify-between gap-5">
            <div className="w-[40%]">
              <div>
                <div className="w-[580px] h-[384px] ">
                  <img
                    className="w-full h-full rounded-xl"
                    src="https://s.yimg.com/uu/api/res/1.2/TzvQR7b0H0yY.C2rVNlvFw--~B/Zmk9ZmlsbDtoPTQ5NDtweW9mZj01MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-04/5c4c5960-f800-11ee-adb7-3a618847a2e9.cf.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-[28px] font-[700] hover:underline uppercase text-gray-700">
                    The best gaming laptops for 2024
                  </h1>
                  <p>
                    We reviewed dozens of portable PCs — these are our favorite
                    gaming laptops.
                  </p>
                  <p className="text-gray-600">Devindra Hardawar</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
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
                      <h1 className="hover:underline font-semibold">
                        {item.title}
                      </h1>
                      <p className="text-gray-600">{item.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuyingGuidesSection;
