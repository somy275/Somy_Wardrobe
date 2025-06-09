// src/components/AddClothingForm.js
import React, { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const AddClothingForm = () => {
    const { addClothingItem } = useWardrobe();
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [season, setSeason] = useState('Summer');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!type || !color || !image || !season) return;

        addClothingItem({ type, color, image, season });
        setType('');
        setColor('');
        setImage('');
        setSeason('Summer');
    };

    return (
        <form onSubmit={handleSubmit} className="text-[max(.6rem,4vw)] min-[450px]:text-[max(1.3rem,3.5vw)] sm:text-[max(1.5rem,3.2vw)] md:text-[max(1.4rem,2.5vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.482vw,1.625rem)] p-4 my-[1.3rem] bg-gray-100 rounded  space-y-4 lg:max-w-none lg:w-[70%] ">
            <h2 className="text-lg text-center font-semibold mb-2 text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3.5vw)] sm:text-[max(1.4rem,3.2vw)] md:text-[max(1.5rem,2.7vw)] lg:text-[clamp(0.9375rem,0.3473rem+0.9221vw,1.5rem)]">➕ Add New Clothing</h2>

            <div>
                <label className="block">Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-2 border rounded" autoFocus
                >
                    <option value="">Select type</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Jacket">Jacket</option>
                </select>
            </div>

            <div>
                <label className="block">Color:</label>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="e.g. Red"
                    className="text-[max(.5rem,3.8vw)] min-[450px]:text-[max(1.2rem,3.3vw)] sm:text-[max(1.4rem,3vw)] md:text-[max(1.3rem,2.3vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.332vw,1.625rem)] w-full p-2 border rounded"
                />
            </div>

            <div>
                <label className="block">Mock Image (Emoji or URL):</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="e.g. 👕"
                    className="text-[max(.5rem,3.8vw)] min-[450px]:text-[max(1.2rem,3.3vw)] sm:text-[max(1.4rem,3vw)] md:text-[max(1.3rem,2.3vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.332vw,1.625rem)] w-full p-2 border rounded"
                />
            </div>

            <div>
                <label className="block">Season:</label>
                <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-green-600 flex mx-auto cursor-pointer text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3.5vw)] sm:text-[max(1.4rem,3.2vw)] md:text-[max(1.5rem,2.7vw)] lg:text-[clamp(0.9375rem,0.3473rem+0.9221vw,1.5rem)] active:scale-[.85] transition-transform duration-[200ms] ease-in-out text-white px-4 py-2 rounded mt-2"
            >
                Add Item
            </button>
        </form>
    );
};

export default AddClothingForm;
