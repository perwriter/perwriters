'use client'

import { MouseFollowCaption } from "@/components/MouseFollowCaption";

// import { MouseFollowCaption } from "./MouseFollowCaption";

const WebsiteDesign = () => {
  const images = [
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", caption: "Image 1 Creted in Lorem aicncoicoichcoicd" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", caption: "Image 2" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", caption: "Image 3" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", caption: "Image 4" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", caption: "Image 5" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", caption: "Image 6" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", caption: "Image 7" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", caption: "Image 8" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", caption: "Image 9" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", caption: "Image 10" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", caption: "Image 11" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", caption: "Image 12" },
  ];

  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Website Design <br /> that works
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing and developing websites that work for your business.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <div className="grid gap-4">
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" caption="Image 1 1 Creted in Lorem aicncoicoichcoicd" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" caption="Image 2" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" caption="Image 3" />
        </div>
        <div className="grid gap-4">
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" caption="Image 4" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" caption="Image 5" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" caption="Image 6" />
        </div>
        <div className="grid gap-4">
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" caption="Image 7" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" caption="Image 8" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" caption="Image 9" />
        </div>
        <div className="grid gap-4">
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" caption="Image 10" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" caption="Image 11" />
          <MouseFollowCaption src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" caption="Image 12" />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
