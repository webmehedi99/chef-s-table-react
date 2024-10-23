import React from 'react';

const Header = () => {
    return (
        <div className="navbar p-10">
            <div className="navbar-start">
                <a className="font-extrabold text-3xl text-black">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-base text-gray-500"><a>Home</a></li>
                    <li className="text-gray-500 text-base"><a>Recipes</a></li>
                    <li className="text-gray-500 text-base"><a>About</a></li>
                    <li className="text-gray-500 text-base"><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost flex items-center justify-center md:hidden lg:hidden">
                        <div className="w-[56px] h-[56px] rounded-full border-2 p-2">
                            <img src="https://img.icons8.com/?size=100&id=uOoIUTYvxnso&format=png&color=000000" alt="home icon" />
                        </div>
                    </div>
                    <ul tabIndex="0"
                        className="menu menu-sm -mr-10 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow w-[120px] h-[100px] -ml-[60px]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div>
                    <label className="input rounded-full px-3 py-6 border-none  bg-gray-100  flex items-center gap-2 mr-2">
                        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                        <input type="text" className="grow placeholder:text-gray-500"  placeholder="Search" />
                    </label>
                </div>
                <div className="w-[56px] h-[56px] hidden md:block lg:block rounded-full p-2">
                    <img  src="https://img.icons8.com/?size=100&id=uOoIUTYvxnso&format=png&color=000000" alt="home icon" />
                </div>
            </div>
        </div>
    );
};

export default Header;
