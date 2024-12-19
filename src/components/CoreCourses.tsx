import React from 'react';

const CoreCourses = () => {
  const courses = [
    { id: 1, imgSrc: '/images/core1.png', title: 'Programming Fundamentals' },
    { id: 2, imgSrc: '/images/core2.png', title: 'Web2 Using NextJS' },
    { id: 3, imgSrc: '/images/core3.png', title: 'Earn as You Learn' },
  ];

  return (
    <div className="container lg:ml-4 px-4">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-[#043873] font-bold mt-10">
        Core Courses Sequence
      </h1>
      <div className="flex flex-col sm:flex-row justify-start gap-6 mt-10">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col items-center">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="object-cover w-70 h-60 rounded-lg"
            />
            <p className="text-center mt-4 text-lg font-medium text-gray-600">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreCourses;
