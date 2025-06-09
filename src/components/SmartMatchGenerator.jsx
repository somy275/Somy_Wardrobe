// src/components/SmartMatchGenerator.js
import React, { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';

// Color harmony map (mocked)
const colorPairs = {
    Red: ['Green', 'White', 'Black'],
    Blue: ['Orange', 'White'],
    Black: ['White', 'Gray'],
    White: ['Black', 'Blue', 'Red'],
    Yellow: ['Purple', 'Blue'],
};

const SmartMatchGenerator = () => {
    const { clothes } = useWardrobe();
    const [outfit, setOutfit] = useState([]);

    const generateSmartOutfit = () => {
        const tops = clothes.filter((c) => c.type === 'T-shirt');
        const bottoms = clothes.filter((c) => c.type === 'Jeans');
        const shoes = clothes.filter((c) => c.type === 'Shoes');

        for (let top of tops) {
            const matchingBottom = bottoms.find((b) =>
                colorPairs[top.color]?.includes(b.color)
            );
            const matchingShoes = shoes.find((s) =>
                colorPairs[top.color]?.includes(s.color)
            );

            if (matchingBottom && matchingShoes) {
                setOutfit([top, matchingBottom, matchingShoes]);
                return;
            }
        }

        setOutfit([]); // no match found
    };

    return (
        <div className="p-4 bg-yellow-50 rounded w-full">
            <h2 className="font-bold text-[max(1.2rem,5.8vw)] min-[450px]:text-[max(1.6rem,4.8vw)] sm:text-[max(1.9rem,4.2vw)] md:text-[max(2rem,3.7vw)] lg:text-[clamp(1.3125rem,0.4668rem+1.3265vw,2.125rem)]  mb-2">🎯 Smart Match</h2>
            <button
                onClick={generateSmartOutfit}
                className="bg-yellow-500 text-white px-4 py-2 rounded mb-4 text-[max(.65rem,3.8vw)] min-[450px]:text-[max(1rem,3.3vw)] sm:text-[max(1.2rem,3.1vw)] md:text-[max(1.4rem,2.6vw)] lg:text-[clamp(0.9375rem,0.3173rem+0.9221vw,1.5rem)] active:scale-[.85] transition-transform duration-[200ms] ease-in-out cursor-pointer"
            >
                Generate Smart Match
            </button>
            {outfit.length > 0 ? (
                <div className="grid grid-cols-3 gap-2 mt-[2rem]">
                    {outfit.map((item) => (
                        <div key={item.id} className="text-center">
                            <img src={`${item.image}`} className="md:h-[max(12rem,24vw)] md:w-[max(12rem,24vw)] lg:h-[clamp(17.5rem,10.9426rem+5.1459vw,20.75rem)] lg:w-[clamp(17.5rem,10.9426rem+10.2459vw,23.75rem)] aspect-[1/1]" />
                            <div className='text-[max(.7rem,5vw)] min-[450px]:text-[max(1.5rem,4.5vw)] sm:text-[max(1.7rem,4vw)] md:text-[max(1.6rem,3.2vw)] lg:text-[clamp(1.125rem,0.3381rem+1.2295vw,1.875rem)] font-medium'>{item.type}</div>
                            <div className="text-[max(.5rem,3.8vw)] min-[450px]:text-[max(1.2rem,3.3vw)] sm:text-[max(1.4rem,3vw)] md:text-[max(1.3rem,2.3vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.332vw,1.625rem)] text-gray-500">{item.color}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-[max(.5rem,3.7vw)] min-[450px]:text-[max(1.1rem,3.2vw)] sm:text-[max(1.3rem,2.9vw)] md:text-[max(1.3rem,2.15vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.232vw,1.625rem)] text-gray-500">No smart match found.</p>
            )}
        </div>
    );
};

export default SmartMatchGenerator;
