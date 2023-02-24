const LandingPage = () => {
    return (
      <div className="h-screen text-black p-[30px]">
        <div className="landing_page_header flex items-center justify-between">
          <p className="text-[50px] font-bold italic"> R.C </p>
          {/* <div>Home</div> */}
        </div>
        <div className="landing_page_body h-4/6 flex justify-between items-center">
          <div className="left_side flex flex-col flex-1">
            <div className="mb-[20px] last:md:mb-[50px]">
              <p className="text-[40px] md:text-[4vw] leading-1">
                Don't know how to monitor your business ?
              </p>
            </div>
            <div className="text-[20px]">
              <p className="leading-1 w-[80%]">
                Well, we got you covered. Subscribe to our waitlist so that you
                don't miss out on this opportunity. Curious to know what we
                offer ? <br />
              </p>
              <p className="my-[20px]">
                Signup to our waitlist an get a mail of what is coming.
              </p>
            </div>
            <div className="email_form">
                <button className="bg-blue-500 px-[40px] py-[10px] rounded-[20px] shadow-2xl font-bold cursor-pointer text-white">Sign Up</button>
            </div>
          </div>
          <div className="right_side hidden md:flex bg-gray-500 flex-1">right side</div>
        </div>
      </div>
    );
};

export default LandingPage;
 