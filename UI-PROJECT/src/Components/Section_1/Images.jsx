
const Images = (props) => {
  return (
    <div className="w-[32%] h-[90%] bg-[#252b2b] rounded-2xl overflow-hidden">
      <img
        src={props.link}
        alt="Profile"
        className="w-full h-full object-cover object-center rounded-2xl"
      />
    </div>
  );
};

export default Images;
