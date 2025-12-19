import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] lg:mt-20 px-4 lg:px-16">
      {/* Text Section */}
      <div className="max-w-xl z-10 mt-10 lg:mt-0">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base">
            <i className="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR <br /> DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          The best way to reach humans instead of spam folders, deliver
          transactional and marketing emails at scale.
        </p>

        <div className="flex items-center mt-6">
          <a
            className="font-semibold tracking-wider text-gray-300 hover:text-[#e99b63] transition-colors duration-300 flex items-center gap-1"
            href="#">
            DOCUMENTATION <i className="bx bx-link-external"></i>
          </a>
          <a
            className="ml-8 font-semibold tracking-wider text-gray-300 hover:text-[#e99b63] transition-colors duration-300 flex items-center gap-1"
            href="#">
            GET STARTED <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* Spline Model */}
      <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-full lg:flex-1 mb-10 lg:mb-30">
        <Spline
          scene="https://prod.spline.design/UioVj4xbYLM3vnXD/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </main>
  );
};

export default Hero;
