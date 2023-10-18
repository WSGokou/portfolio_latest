import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioItem = ({title, imgUrl, stack, link}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt="PortfolioItem"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      ) : (
        <div className="w-auto h-36 md:h-48 cursor-pointer bg-stone-900 dark:bg-white m-4"></div>
      )}

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md dark:text-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioItem;
