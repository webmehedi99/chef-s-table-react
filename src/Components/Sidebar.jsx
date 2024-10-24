import React from 'react';

const Sidebar = ({ recipeQueue }) => {
    return (
        <div className='md:w-1/3 border-2 p-2'>

            <div className="overflow-x-auto p-2">
                <h2 className='text-2xl font-bold text-center border-b-2 pb-4'>Want To Cook : {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipeQueue.map((recipe, index) =>
                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td >{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td>{<button onClick={() => } className=" rounded-full px font-semibold bg-[#0BE58A] text-black px-4 py-2 ">Prepairing</button>}</td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;