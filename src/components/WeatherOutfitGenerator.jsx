// src/components/WeatherOutfitGenerator.js
import React, { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const WeatherOutfitGenerator = () => {
    const { clothes } = useWardrobe();
    const [season, setSeason] = useState('Summer');
    const [outfit, setOutfit] = useState([]);

    const generateWeatherOutfit = () => {
        const filtered = clothes.filter((item) => item.season === season);

        const top = filtered.find((c) => c.type === 'T-shirt');
        const bottom = filtered.find((c) => c.type === 'Jeans');
        const shoes = filtered.find((c) => c.type === 'Shoes');
        const jackets = filtered.find((c) => c.type === 'Jackets')

        const result = [top, bottom, shoes, jackets].filter(Boolean);

        setOutfit(result);
    };

    return (
        <div className="p-4 bg-blue-50 rounded mt-[3rem] w-full">
            <h2 className="font-bold text-[max(1.2rem,5.8vw)] min-[450px]:text-[max(1.6rem,4.8vw)] sm:text-[max(1.9rem,4.2vw)] md:text-[max(2rem,3.7vw)] lg:text-[clamp(1.3125rem,0.4668rem+1.3265vw,2.125rem)] mb-2">🌤️ Weather Outfit</h2>
            <div className="mb-[1rem]">
                <label className="mr-2">Season:</label>
                <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="border p-1 rounded text-[max(.5rem,3.8vw)] min-[450px]:text-[max(1.2rem,3.3vw)] sm:text-[max(1.4rem,3vw)] md:text-[max(1.3rem,2.3vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.332vw,1.625rem)]"
                >
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>

            <button
                onClick={generateWeatherOutfit}
                className="bg-blue-500 text-white  text-[max(.65rem,3.8vw)] min-[450px]:text-[max(1rem,3.3vw)] sm:text-[max(1.2rem,3.1vw)] md:text-[max(1.4rem,2.6vw)] lg:text-[clamp(0.9375rem,0.3173rem+0.9221vw,1.5rem)] px-4 py-2 rounded mb-4"
            >
                Generate Weather-Based Outfit
            </button>

            {outfit.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-[2rem]">
                    {outfit.map((item) => (
                        <div key={item.id} className="text-center">
                            <img src={`${item.image}`} className="md:h-[max(12rem,24vw)] md:w-[max(12rem,24vw)] lg:h-[clamp(17.5rem,10.9426rem+5.1459vw,20.75rem)] lg:w-[clamp(17.5rem,10.9426rem+10.2459vw,23.75rem)] aspect-[1/1]" />
                            <div className='text-[max(.7rem,5vw)] min-[450px]:text-[max(1.5rem,4.5vw)] sm:text-[max(1.7rem,4vw)] md:text-[max(1.6rem,3.2vw)] lg:text-[clamp(1.125rem,0.3381rem+1.2295vw,1.875rem)] font-medium'>{item.type}</div>
                            <div className="text-[max(.5rem,3.8vw)] min-[450px]:text-[max(1.2rem,3.3vw)] sm:text-[max(1.4rem,3vw)] md:text-[max(1.3rem,2.3vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.332vw,1.625rem)] text-gray-500">{item.color}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeatherOutfitGenerator;
