import React from 'react';

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

const AboutChoice = () => {
  const features = [
    {
      title: "Next Day as Standard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae?",
    },
    {
      title: "Next Day as Standard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae?",
    },
    {
      title: "Next Day as Standard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae?",
    },
    {
      title: "Next Day as Standard",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae?",
    }
  ];

  return (
    <>
      <div className="w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-center m-auto py-10">
        <div className="text-2xl font-bold">Featured Available</div>
      </div>

      <div className="flex w-[80vw] m-auto gap-2 text-[#007580] max-md:w-[90vw] max-md:flex-col max-md:gap-5 md:justify-between">
        {features.map((feature, index) => (
          <div key={index} className="p-3 h-[30vh] flex flex-col justify-center gap-3 bg-[#F9F9F9] rounded-xl">
            <div className="icon">
              <TruckIcon />
            </div>
            <div className="font-semibold">
              {feature.title}
            </div>
            <div className="text-sm">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutChoice;
