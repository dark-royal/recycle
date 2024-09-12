import React from 'react';
import BlogCard from './Blogcard';

const blogPosts = [
    {
        title: 'Plastic',
        description: 'plastic ',
        image: require(''),
    },
];

const BlogPage = () => {
    return (
        <div className="bg-green-900 min-h-screen">
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">G-Cycle Blog</h1>
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

export default BlogPage;
