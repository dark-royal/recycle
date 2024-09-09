import React from 'react';
import BlogCard from "./Blogcard";

const blogPosts = [
    {
        title: 'Plastic',
        description: 'plastic ',
        image: 'https://via.placeholder.com/600x400',
    },
    {
        title: 'Metal',
        description: '',
        image: 'https://via.placeholder.com/600x400',
    },
    {
        title: 'Blog Post 3',
        description: 'This is a short description of blog post 3.',
        image: 'https://via.placeholder.com/600x400',
    },
];

const Blog = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>
                <div className="flex flex-wrap justify-center">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
