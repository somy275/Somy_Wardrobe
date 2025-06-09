// src/components/OutfitGenerator.js
import { useState, useEffect } from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const OutfitGenerator = () => {
  const { clothes } = useWardrobe();
  const [outfit, setOutfit] = useState([]);
  const [Like, setLike] = useState("")
  const [Dislike, setDislike] = useState("")
  const [LikeDislike, setLikeDislike] = useState("")
  const generateOutfit = () => {
    const tShirt = clothes.find((c) => c.type === 'T-shirt');
    const jeans = clothes.find((c) => c.type === 'Jeans');
    const shoes = clothes.find((c) => c.type === 'Shoes');

    const result = [tShirt, jeans, shoes].filter(Boolean);
    setOutfit(result);
  };

  useEffect(() => {
    if (LikeDislike == "like") {
      setLike("like")
      setDislike("")
    }
    else if (LikeDislike == "dislike") {
      setDislike("dislike")
      setLike("")
    }
  }, [LikeDislike])
  return (
    <div className="p-4 flex flex-col items-center mb-[2rem]">
      <button onClick={generateOutfit} className="bg-purple-600 text-white text-[max(.65rem,3.8vw)] min-[450px]:text-[max(1rem,3.3vw)] sm:text-[max(1.2rem,3.1vw)] md:text-[max(1.4rem,2.6vw)] lg:text-[clamp(0.9375rem,0.3173rem+0.9221vw,1.5rem)] px-4 py-2 rounded mb-4 active:scale-[.85] transition-transform duration-[200ms] ease-in-out cursor-pointer">
        Generate Outfit
      </button>

      <div className="grid grid-cols-3 gap-2 ">
        {outfit.map((item) => (
          <div key={item.id} className="text-center mt-[4rem] ">
            <div className='text-center'>
              <img src={`${item.image}`} className="text-4xl aspect-[1.1/1]" />
              <div>{item.type}</div>
            </div>
          </div>
        ))}
      </div>

      {outfit.length > 0 && (
        <div className="mt-4 space-x-4">
          <button className={`px-3 py-1 border-[2px] border-[#00C951] ${Like == "like" ? "bg-green-500" : ""} text-white rounded active:scale-[.85] transition-transform duration-[200ms] ease-in-out cursor-pointer`} onClick={() => setLikeDislike("like")}>👍</button>
          <button className={`px-3 py-1 border-[2px] border-[#FB2C36] ${Dislike == "dislike" ? "bg-red-500" : ""} text-white rounded active:scale-[.85] transition-transform duration-[200ms] ease-in-out cursor-pointer`} onClick={() => setLikeDislike("dislike")}>👎</button>
        </div>
      )}
    </div>
  );
};

export default OutfitGenerator;
