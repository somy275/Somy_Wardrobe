import { Pagination } from "@heroui/pagination"
export const DashBoardPagination = ({ setCurrentPage, totalPages }) => {
    let onPage = (e) => {
        setCurrentPage(e)
    }


    return <Pagination classNames={{
        wrapper: "flex justify-center gap-[.7rem] overflow-hidden",
        item: "h-[1.8rem] w-[1.8rem] min-[450px]:h-[max(1.8rem,6vw)] min-[450px]:w-[max(1.8rem,6vw)] sm:h-[1.8rem] sm:w-[1.8rem]  text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3.5vw)] sm:text-[max(1.4rem,3.2vw)] md:text-[max(1.5rem,2.7vw)] lg:text-[clamp(0.9375rem,0.3473rem+0.9221vw,1.5rem)] sm:h-[2.6rem] sm:w-[2.6rem] data-[active=true]:bg-[#2B7FFF] data-[active=true]:text-[white] data-[disabled=true]:bg-[red] cursor-pointer text-small rounded-4xl border-[2px] data-active-page:text-white font-medium border-[#2B7FFF] bg-transparent",
        cursor:
            "hidden",
        prev: "cursor-pointer active:scale-[0.85] active:transition-transform active:duration-[200ms] data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        next: "cursor-pointer active:scale-[0.85] active:transition-transform active:duration-[200ms] data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 rotate-[180deg]"
    }} showControls initialPage={1} total={totalPages} onChange={onPage} />;
}
