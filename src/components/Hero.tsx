import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      {/* Background Image (not blurred and lightened) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/ghouse.png"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-60" // Lighten the image
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center ml-10 mt-20">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-2xl lg:text-6xl font-bold text-[#043873]">
            Governor Sindh
          </h1>
          <h2 className="mt-4 lg:text-[36px] text-xl text-[#043873] font-normal">
            Kamran Khan Tessori
          </h2>

          <p className="mt-8 text-4xl text-blue-400 font-bold">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
          </p>

          {/* Paragraph 2 */}
          <p className="mt-6 text-xl text-[#043873] font-bold">
            Earn up to $5,000 / month
          </p>

          {/* Paragraph 3 */}
          <p className="mt-4 text-2xl text-[#043873] font-bold">
            Now admissions are open in<br/> Hyderabad
          </p>
          
          <button className="w-full mt-10 mb-20 bg-[#043873] rounded-md py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
            Apply Now
          </button>
        </div>

        {/* Right Side - Increased Hero Poster Size */}
        <div className="flex-1 mt-10 md:mt-0">
          <Image
            src={"/images/governer.png"}
            alt="Hero Poster"
            width={1600} // Increased width for larger image
            height={1212} // Increased height for larger image
            className="lg:ml-32 min-w-[600px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
