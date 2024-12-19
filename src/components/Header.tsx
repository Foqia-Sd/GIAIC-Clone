import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className="sticky top-0 z-30 w-full bg-[#043873] text-white backdrop-blur-3xl print:hidden lg:p-3">
      {/* Logo Positioned Over Header */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <a href="/">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain mt-20 lg:ml-8 ml-2"
          />
        </a>
      </div>

      {/* Header Content */}
      <div className="flex flex-col items-center justify-between px-4 py-3 lg:flex-row lg:px-8">
        {/* Heading Section */}
        <div className="text-center flex-grow lg:order-2">
          <h1 className="text-[12px] font-extrabold text-[#b9d8f3] lg:text-xl xl:text-2xl hidden lg:block">
            Tuition Free Education Program on Latest Technologies
          </h1>
          {/* Heading on small screen */}
          <div className="flex items-center">
          <h1 className="text-[#b9d8f3] lg:hidden text-[14px] ml-16">Tuition Free Program</h1>
          <MdMenu className="lg:hidden ml-10" size={16} />
          </div>
        
        </div>

        {/* Navigation Links Section */}
        <div className="flex-shrink-0 lg:order-3 hidden lg:block">
          <ul className="flex gap-4 lg:gap-8 items-center">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/apply"}>Apply</Link>
            </li>
            <li>
              <Link href={"/jobs"}>Jobs</Link>
            </li>
            <li>
              <Link href={"/result"}>Result</Link>
            </li>
            <li className="flex items-center">
              <Link href={"/courses"}>Courses</Link>
              <SlArrowDown className="ml-2 mt-1" size={10} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
