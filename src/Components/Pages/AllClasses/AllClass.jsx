import { Helmet } from "react-helmet";
import { useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AllClassCard from "./AllClassCard";

const AllClass = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const classesPerPage = 6;

    const axiosPublic = useAxiosPublic();
    const { data: jymAddClass = [] } = useQuery({
        queryKey: ['jymAllClass'],
        queryFn: async () => {
            const res = await axiosPublic.get('/jymAllClass')
            return res.data;
        }
    });

    // Filter classes based on search query
    const filteredClasses = jymAddClass.filter(classAdd =>
        classAdd.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredClasses.length / classesPerPage);

    // Get current classes
    const indexOfLastClass = currentPage * classesPerPage;
    const indexOfFirstClass = indexOfLastClass - classesPerPage;
    const currentClasses = filteredClasses.slice(indexOfFirstClass, indexOfLastClass);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    return (
        <div className="mb-10">
            <Helmet>
                <title>GYM EDGE || All Class </title>
            </Helmet>
            <div className="container mx-auto mt-10 mb-10">
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Search by class name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="px-4 py-2 w-full border rounded-md"
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        Array.isArray(currentClasses) && currentClasses.length > 0 && currentClasses.map(classAdd => (
                            <AllClassCard key={classAdd._id} classAdd={classAdd}></AllClassCard>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-5">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 bg-gray-200 rounded-md disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 bg-gray-200 rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllClass;
