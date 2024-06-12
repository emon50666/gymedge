import { useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ForumCard from "./ForumCard";

const Forum = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const classesPerPage = 6;

    const axiosPublic = useAxiosPublic();
    const { data: blogData = [], isLoading, error } = useQuery({
        queryKey: ['blogData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blog')
            return res.data;
        }
    });

    console.log(blogData);

    // Calculate total pages
    const totalPages = Math.ceil(blogData.length / classesPerPage);

    // Get current blog posts
    const indexOfLastBlog = currentPage * classesPerPage;
    const indexOfFirstBlog = indexOfLastBlog - classesPerPage;
    const currentBlogData = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

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

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div className="mb-10">
            <Helmet>
                <title>GYM EDGE || Forum</title>
            </Helmet>
            <div className="container mx-auto mt-10 mb-10 grid md:grid-cols-3 gap-5">
                {
                    currentBlogData.map(blog => (
                        <ForumCard key={blog._id} blog={blog}></ForumCard>
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
    );
};

export default Forum;
