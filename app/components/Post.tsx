import Image from 'next/image'
import React from 'react'

type TPost = {
  id: string,
  title: string,
  artist: string,
  price: string,
  imageUrl: string
}

const Post = ({ post }: { post: TPost[] }) => {
  return (
    <div className="max-w-[90rem] mx-auto px-8 sm:px-12 py-10">
      <div className="flex overflow-x-auto pb-4 gap-6 snap-x scrollbar-hide">
        {post.map(({ id, title, artist, price, imageUrl }) => (
          <div
            key={id}
            className="flex-shrink-0 w-[150px] snap-start bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden border border-gray-100"
          >
            <div className="aspect-square w-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1" title={title}>
                {title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-1" title={artist}>
                By {artist}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3">
                <p className="text-indigo-600 font-extrabold text-lg whitespace-nowrap">${price}</p>
              </div>
              <button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-300 text-sm font-semibold whitespace-nowrap"
                >
                  Buy
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
