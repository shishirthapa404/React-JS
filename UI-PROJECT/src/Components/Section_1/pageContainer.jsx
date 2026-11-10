import imageLinks from "./imageLinks.jsx"
import Left_Text from "./Left_Text";
import Images from "./Images.jsx";

const PageContainer = () => {
  
  return (
    <div className="flex-1 bg-[#F3F4F6] w-[85%] my-13 rounded-xl flex flex-row items-center gap-6 px-6 overflow-hidden">

      {/* Left Side Text */}
      <div className="w-[25%] h-full shrink-0 flex items-center justify-center flex-col">
        <Left_Text />
      </div>

      {/* Right Side Images */}
      <div className="flex-1 min-w-0 h-full overflow-x-auto overflow-y-hidden">
        <div className="flex flex-nowrap items-center gap-5 w-max h-full">

          {imageLinks.map((link, index) => (
            <Images key={index} link={link} />
          ))}

        </div>
      </div>

    </div>
  );
};

export default PageContainer;
