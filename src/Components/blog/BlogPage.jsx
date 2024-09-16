import React from 'react';
import plasticImage from './assestBlog/plastic.jpeg';
import ewasteImage from './assestBlog/ewaste.jpeg';
import metalImage from './assestBlog/metal.jpeg';

const blogPosts = [
    {
        title: 'The Future of Plastic Recycling',
        description: 'How innovations are changing plastic recycling processes.',
        image: plasticImage,
    },
    {
        title: 'Understanding e-Waste Management',
        description: 'Why e-waste is a growing concern and how to tackle it.',
        image: ewasteImage,
    },
    {
        title: 'Recycling Metal for a Greener World',
        description: 'The importance of recycling metals to reduce mining.',
        image: metalImage,
    },
];

const BlogCard = ({ title, description, image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

const BlogPage = () => {
    return (
        <div className="bg-green-900 min-h-screen p-4"> {/* Updated background color to carbon green */}
            <h1 className="text-4xl text-center font-bold my-8 text-white"> {/* Changed text color to white */}
                G-Cycle Blog
            </h1>
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
    );
};

export default BlogPage;
