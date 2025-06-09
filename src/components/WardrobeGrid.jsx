// src/components/WardrobeGrid.js
import { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';
import { DashBoardPagination } from './WardrobePagination';

const WardrobeGrid = () => {
    const { clothes } = useWardrobe();
    const [filter, setFilter] = useState('All');
    const [CurrentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4;
    const StartIndex = (CurrentPage - 1) * itemsPerPage;
    const endIndex = StartIndex + itemsPerPage
    const filteredClothes =
        filter === 'All' ? clothes : clothes.filter((c) => c.type === filter);
    const totalPages = Math.ceil(filteredClothes.length / itemsPerPage);
    const CurrentPageClothes = filteredClothes.slice(StartIndex, endIndex)
    const onSetFilter = (data) => {
        setCurrentPage(1);
        setFilter(data)
    }


    return (
        <div className="p-4 mt-[4rem] mb-[2.5rem]">
            <div className="mb-4 space-x-2 relative flex flex-wrap gap-y-[.75rem] justify-center text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3.5vw)] sm:text-[max(1.4rem,3.2vw)] md:text-[max(1.5rem,2.7vw)] lg:text-[clamp(0.9375rem,0.3473rem+0.9221vw,1.5rem)]">
                {['All', 'T-shirt', 'Jeans', 'Shoes', 'Jackets'].map((data) => (
                    <button
                        key={data}
                        onClick={() => onSetFilter(data)}
                        className="relative px-3 py-1 border-[2px] border-solid border-[#2B7FFF]  text-black font-medium rounded cursor-pointer before:z-[-1] before:absolute before:w-full before:top-0 before:bottom-0 before:left-0 before:right-0 before:scale-y-0 before:bg-blue-500 before:origin-top before:transition-transform before:duration-[300ms] before:ease-in-out hover:text-white hover:before:scale-y-[1] hover:before:origin-bottom"
                    >
                        {data}
                    </button>
                ))}
            </div>
            <div className="grid my-[2rem] grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                {CurrentPageClothes.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 border rounded text-center bg-white drop-shadow-[2px_2px_3px_grey]"
                    >
                        <img src={`${item.image}`} className="  aspect-[1/1]" />
                        <div className="text-[max(.7rem,5vw)] min-[450px]:text-[max(1.5rem,4.5vw)] sm:text-[max(1.7rem,4vw)] md:text-[max(1.6rem,3.2vw)] lg:text-[clamp(1.125rem,0.3381rem+1.2295vw,1.875rem)] font-medium">{item.type}</div>
                        <div className="text-sm  text-gray-500 text-[max(.5rem,3.8vw)] min-[450px]:text-[max(1.2rem,3.3vw)] sm:text-[max(1.4rem,3vw)] md:text-[max(1.3rem,2.3vw)] lg:text-[clamp(0.8125rem,-0.04rem+1.332vw,1.625rem)]">{item.color}</div>
                    </div>
                ))}
            </div>
            <DashBoardPagination setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    );
};

export default WardrobeGrid;
