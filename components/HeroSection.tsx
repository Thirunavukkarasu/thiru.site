import { userData } from "constants/data";
import { FaAws, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";

function HeroIconWrapper({ children, className }) {
  const commonCls =
    "bg-gray-800 absolute rounded-full w-24 h-24 flex flex-row items-center justify-center";

  return <div className={`${commonCls} ${className}`}>{children}</div>;
}

export default function HeroSection() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-row py-10 space-x-10 justify-between">
          {/* Text container */}
          <div className="mt-5">
            <div className="bg-green-300 w-72 text-gray-700 px-4 py-1 rounded-3xl font-semibold">
              Full Stack Developer & Architect
            </div>
            <h1 className="text-5xl leading-tight font-medium text-gray-200 mt-5">
              Talk is Cheap. <br />
              Show me the code!
            </h1>
            <p className="text-lg leading-loose text-gray-400 mt-4">
              I design and develop products from scratch, <br />
              and love building teams for startups.
            </p>
            <div className="text-green-300 underline px-4 py-2 rounded-xl mt-10 w-44 uppercase cursor-pointer font-semibold leading-loose">
              Let's Chat
            </div>
          </div>
          {/* Image container */}
          <div className="mr-10 w-[40%]">
            <div className="relative">
              <img
                src={userData.avatarUrl}
                alt="avatar"
                className="shadow rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
              />
              <HeroIconWrapper className="text-teal-400 top-[20%] left-[3%]">
                <FaReact size={46} />
              </HeroIconWrapper>
              <HeroIconWrapper className="absolute text-green-400 top-[10%] right-[5%] bg-gray-700">
                <FaDatabase size={46} />
              </HeroIconWrapper>
              <HeroIconWrapper className="absolute text-green-300 bottom-[5%] left-[5%] bg-gray-600">
                <FaNodeJs size={46} />
              </HeroIconWrapper>
              <HeroIconWrapper className="absolute text-yellow-500 bottom-[10%] right-[10%] bg-gray-500">
                <FaAws size={46} />
              </HeroIconWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
