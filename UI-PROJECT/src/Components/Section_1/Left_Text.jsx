
const Left_Text = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full min-w-0 h-full gap-20 px-2 sm:px-0">

      <div className="flex flex-col gap-4 items-center justify-center">
        {/* Heading */}
          <h1 className="w-full min-w-0 text-left text-5xl font-bold text-gray-900 leading-tight whitespace-normal break-normal md:break-all">
            Prospective <br/>
            <span className="bg-gray-200 h-12 w-67  px-0 py-0 inline-flex items-center justify-center rounded-full">
              Customer
            </span><br/>
            Segmentation
          </h1>


          {/* Description */}
          <p className="w-full min-w-0 text-left text-sm sm:text-base font-normal text-gray-600 leading-6 sm:leading-7 break-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Saepe at voluptates nostrum, suscipit qui excepturi ut assumenda
            est et quisquam dolor fugit animi iusto voluptas voluptatem optio
            dolorum illo nemo.
          </p>
      </div>
      
      

      {/* Learn More Button */}
      <button
        type="button"
        className="mt-2 inline-flex max-w-full shrink-0 items-center justify-center gap-3 bg-black text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 cursor-pointer"
      >
        <span>Learn More</span>

        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
        </svg>

      </button>

    </div>
  );
};

export default Left_Text;
