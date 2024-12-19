import React from 'react';

const AdvancedCourses = () => {
  const courses = [
    { id: 1, imgSrc: '/images/adv1.png', title: 'Artificial Intelligence' },
    { id: 2, imgSrc: '/images/adv2.png', title: 'Web3 and Metaverse' },
    { id: 3, imgSrc: '/images/adv3.png', title: 'Cloud-Native Computing' },
    { id: 4, imgSrc: '/images/adv4.png', title: 'Ambient Computing and IoT' },
    { id: 5, imgSrc: '/images/adv5.png', title: 'Genomics and Bioinformatics' },
    { id: 6, imgSrc: '/images/adv6.png', title: 'Network Programmability and Automation' },
  ];

  return (
    <div className="w-full px-6">
      <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-[#043873] mt-10">
        Advanced Courses
      </h1>
      
      {/* First Row: 4 Images (Responsive to 1 or 2 based on screen size) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {courses.slice(0, 4).map((course) => (
          <div key={course.id} className="flex flex-col items-center">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-60 rounded-lg object-cover"
            />
            <p className="text-center mt-4 text-lg font-medium text-gray-700">
              {course.title}
            </p>
          </div>
        ))}
      </div>
      
      {/* Second Row: 2 Images (Responsive to 1 on smaller screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 mt-6">
        {courses.slice(4).map((course) => (
          <div key={course.id} className="flex flex-col items-center col-span-2">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-60 rounded-lg object-cover"
            />
            <p className="text-center mt-4 text-lg font-medium text-gray-700">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedCourses;
