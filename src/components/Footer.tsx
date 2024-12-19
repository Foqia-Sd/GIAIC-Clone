const Footer = () => {
  return (
    <div className="bg-gray-100 w-full h-auto mt-20">
      <div className="flex flex-col md:flex-row items-start justify-between py-10 px-5 space-y-5 md:space-y-0">
        
        {/* Core Courses Section */}
        <div className="flex flex-col gap-3 text-sm md:text-base">
          <h1 className="text-xl font-bold">Core Courses</h1>
          <p>Programming Fundamentals</p>
          <p>Web2 Using NextJS</p>
          <p>Earn as You Learn</p>
        </div>

        {/* Advanced Courses Section */}
        <div className="flex flex-col gap-3 text-sm md:text-base">
          <h1 className="text-xl font-bold">Advanced Courses</h1>
          <p>Web 3 and Metaverse</p>
          <p>Cloud-Native Computing</p>
          <p>Artificial Intelligence (AI)</p>
          <p>Ambient Computing and IoT</p>
          <p>Genomics and Bioinformatics</p>
          <p>Network Programmability and Automation</p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-start gap-3 mr-28">
          <h1 className="text-xl font-bold">Social Links</h1>
          <div className="flex gap-3">
            <a target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white" href="https://www.facebook.com/TeamKTessori">
              {/* Facebook Icon */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="h-5 w-5">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white" href="https://www.youtube.com/@KamranTessorikk">
              {/* YouTube Icon */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="h-5 w-5">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
            <a target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white" href="https://twitter.com/KamranTessoriPk">
              {/* Twitter Icon */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="h-5 w-5">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white" href="https://instagram.com/KamranTessoriPk">
              {/* Instagram Icon */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="h-5 w-5">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zm-56.9 177.5c-7.4 18.3-23.6 31.3-42.2 38.6-29.9 12.7-62.8 9.8-88.9-7.2-12.8-7.3-25.8-22.1-38.1-34.4-13.4-13.4-27.3-26.8-40.6-41-10.7-11.6-21.2-23.3-32.3-35.1-4.9-5.5-9.7-11.1-14.5-16.7-4.6-5.2-9.2-10.5-14.1-15.7-4.8-5.3-9.6-10.5-14.4-15.7z"></path>
              </svg>
            </a>
            <a target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171515] text-white" href="https://tiktok.com/@KamranTessoriPk"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg></a>
          </div>
          {/* Email */}
          <div>
            <a className="mt-4 flex items-center py-1 text-main underline" target="_blank" href="mailto:education@governorsindh.com"><div className="mr-3 h-6 w-6"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="h-6 w-6 text-main" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg></div>education@governorsindh.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;




