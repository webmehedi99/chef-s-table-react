import React, { useEffect, useState } from 'react';

const Recipes = ({addRecipeToQueue}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('../recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='md:w-2/3 mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    recipes.map(recipe => (<div key={recipe.recipe_id} className="card bg-base-100  shadow-xl">
                        <figure className='px-8 pt-6'>
                            <img
                                className='w-full md:h-52 rounded-xl'
                                src={recipe.recipe_image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{recipe.recipe_name}</h2>
                            <p className='text-base font-normal text-gray-500'>{recipe.short_description}</p>
                            <h3 className='text-xl font-semibold'>Ingrediants : {recipe.ingredients.length}</h3>
                            {
                                recipe.ingredients.map((item, index) => <li className='text-lg ml-8 text-gray-600' key={index}>{item}</li>)
                            }
                            <hr className='mt-6' />
                            <div className='flex flex-row justify-center items-center'>
                                <p className='text-base text-gray-600 mt-4 pb-4'><i className="fa-regular fa-clock  "></i> {recipe.preparing_time} minutes</p>
                                <p className='text-base text-gray-600 mt-4 pb-4'><i className="fa-solid fa-fire-flame-curved"></i> {recipe.calories} Calories</p>
                            </div>
                            <div className="">
                                <button onClick={() => addRecipeToQueue(recipe)} className="text-lg font-semibold bg-[#0BE58A] text-black px-6 py-3 rounded-full">Want To Cook</button>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Recipes;