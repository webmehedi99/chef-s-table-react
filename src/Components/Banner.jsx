const Banner = () => {
    return (
        <div
            className=" bg-cover bg-no-repeat md:w-full h-full md:h-[35.5rem] rounded-3xl  mx-auto text-center flex flex-col justify-center items-center "
            style={{ backgroundImage:'url(https://i.ibb.co.com/3kYtv41/banner.png)'  }}>

            <div className="w-[780px]  space-y-5">
                <h1 className="text-white text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-white text-lg">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
                <div className='mt-4'>
                    <button className=" bg-[#0BE58A] text-xl rounded-full text-black font-bold mr-2 py-4 px-7 text-center">Explore Now</button>
                    <button className="text-white border-2 border-white rounded-full text-xl py-3 px-7 ">Our Feedback</button>
                </div>
            </div>


        </div>
    );
};

export default Banner;
