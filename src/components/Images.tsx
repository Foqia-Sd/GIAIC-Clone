const Image = () => {
    return (
      <div className="px-0 mt-8">
        {/* First Row of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <img
            src="/images/img1.png"
            alt="Image 1"
            className="object-cover w-full h-64"
          />
          <img
            src="/images/img2.png"
            alt="Image 2"
            className="object-cover w-full h-64 "
          />
          <img
            src="/images/img3.png"
            alt="Image 3"
            className="object-cover w-full h-64"
          />
        </div>
      </div>
    );
  };
  
  export default Image;
  