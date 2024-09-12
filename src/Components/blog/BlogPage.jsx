import React from 'react';
import BlogCard from './Blogcard';

const blogPosts = [
    {
        title: 'Plastic',
        description: 'Plastic waste and its impact on the environment.',
        image: require(''),
    },
    {
        title: 'Metal',
        description: 'Recycling metal is crucial for reducing waste.',
        image: require(''),
    },
    {
        title: 'e-Waste',
        description: 'The rising problem of e-waste and how to tackle it.',
        image: require(''),
    },
    {
        title: 'Agent',
        description: 'Agents helping to pick waste materials for recycling.',
        image: require(''),
    },
    {
        title: 'Plastic',
        description: 'More about plastic waste and recycling efforts.',
        image: require(''),
    },
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-green-900 text-white"> {/* Carbon-green background */}
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

export default Blog;
