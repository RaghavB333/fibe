import React from 'react';



const Blogs = ({data, heading}) => {
  const mainBlog = data.find((b) => b.layout === 'main');
  const sideBlogs = data.filter((b) => b.layout === 'side');

  return (
    <div className='items-center w-full mb-20 flex flex-col mt-32'>
      <h1 className='text-3xl font-semibold text-center mb-10 mr-3'>{heading}</h1>

      <div className='flex max-lg:flex-col px-6 lg:px-10 gap-8 mb-10'>

        {/* Main Blog */}
        {mainBlog && (
          <div className='flex flex-col max-lg:w-full w-[45vw] border border-gray-300 hover:border-[#079f9f] rounded-lg h-full p-5'>
            <img
              width={450}
              height={450}
              className='object-contain lg:object-cover h-full w-full max-lg:h-40 lg:max-h-[320px] rounded-lg'
              src={mainBlog.image}
              alt=""
            />
            <div className='flex gap-4 items-center mt-1 lg:ml-4'>
              <div className='text-[#079f9f] font-[550]'>{mainBlog.type}</div>
              <div className='w-px h-6 bg-gray-200'></div>
              <div>{mainBlog.date}</div>
            </div>
            <div className='lg:ml-4 my-4 text-lg font-semibold'>{mainBlog.title}</div>
            <div className='text-gray-400 font-light lg:ml-4  line-clamp-3 lg:line-clamp-2'>{mainBlog.description}</div>
            <div className='flex justify-between lg:ml-4 mt-2'>
              <span className='text-[#079f9f] font-semibold'>Read More</span>
              <span className='text-gray-400'>{mainBlog.readTime}</span>
            </div>
          </div>
        )}

        {/* Side Blogs */}
        <div className='w-1/2 flex flex-col gap-[6%] max-lg:gap-8 max-lg:w-full'>
          {sideBlogs.map((blog) => (
            <div key={blog.id} className='h-[47%] w-full border border-gray-300 hover:border-[#079f9f] rounded-lg p-5 flex max-lg:flex-col'>
              <div>
                <img
                  width={150}
                  height={150}
                  className='w-full lg:min-w-[15vw] lg:h-full object-contain lg:object-cover lg:w-[215px] max-lg:h-40'
                  src={blog.image}
                  alt=""
                />
              </div>
              <div className='flex flex-col'>
                <div className='flex gap-4 items-center mt-1 lg:ml-4'>
                  <div className='text-[#079f9f] font-[550]'>{blog.type}</div>
                  <div className='w-px h-6 bg-gray-200'></div>
                  <div>{blog.date}</div>
                </div>
                <div className='lg:ml-4 my-4 text-lg font-semibold'>{blog.title}</div>
                <div className='text-gray-400 font-light lg:ml-4  line-clamp-3 lg:line-clamp-2'>{blog.description}</div>
                <div className='flex justify-between lg:ml-4 mt-2'>
                  <span className='text-[#079f9f] font-semibold'>Read More</span>
                  <span className='text-gray-400'>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div>
        <button className='bg-[#079f9f] hover:bg-[#038787] flex justify-center items-center max-lg:w-[65vw] w-[23vw] h-14 lg:h-16 text-white font-semibold rounded-lg text-xl mt-5 hover:cursor-pointer'>
          Explore all blogs
        </button>
      </div>
    </div>
  );
};

export default Blogs;
