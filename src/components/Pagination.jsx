import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {
    const [page, setPage] = useState(pagination[0].startIndex);
    const { query } = useParams();
    const navigate = useNavigate();

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex)
        navigate(`/${query}/${startIndex}`)
    }

    useEffect(() => {
      setPage(pagination[0].startIndex)
    }, [query])
    

    return (
        <div className="flex flex-col items-center py-14 max-w-[700px]">

            <div className="relative text-[#4285f4]">
                {queries.previousPage && (
                    <div 
                        className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                        onClick={() => {
                            paginationClickHandler(queries.previousPage[0].startIndex)
                        }}
                    >
                        <FiChevronLeft size={20} className="cursor-pointer"/>

                        <div className="cursor-pointer">
                            prev
                        </div>

                    </div>
                )}

                <img src={Logo} alt="" className="w-[250px] md:w-[300px]"/>

                {queries.nextPage && (
                    <div 
                        className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                        onClick={() => {
                            paginationClickHandler(queries.nextPage[0].startIndex)
                        }}
                    >
                        <FiChevronRight size={20} className="cursor-pointer"/>

                        <div className="cursor-pointer">
                            Next
                        </div>

                    </div>
                )}
            </div>

            <div className="flex gap-3 text-[#4285f4] text-sm">
                {pagination.map((p, index) => (
                    <span 
                        key={p.pageNo}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`cursor-pointer ${page === p.startIndex ? "bg-blue-300 px-1 rounded-full text-black" : ""}`}
                    >
                        {p.pageNo}
                    </span>
                ))}
            </div>

        </div>
    );
};

export default Pagination;