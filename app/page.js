import Reviews from "@/components/reviews/Reviews";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import Blogs from "@/components/blogs/Blogs";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="my-10 bg-[#fff5f8] flex flex-col items-center justify-center py-14 space-y-8">
          <h1 className="text-3xl font-semibold">
            Awards and Achievements
          </h1>
          <div className="text-xl text-gray-500 max-w-6xl mx-auto px-4 leading-relaxed text-center">
            The industry recognises us as much as our customers love us! And so, Fibe has been featured in multiple leading publications, documenting our efforts in making credit accessible to you!
          </div>
          <div className="grid grid-cols-2 gap-4 px-6 lg:flex lg:gap-10 lg:px-14 ">
            <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-1.jpg&w=640&q=75" alt="" />
            <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-2.jpg&w=640&q=75" alt="" />
            <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-3.jpg&w=640&q=75" alt="" />
            <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-4.jpg&w=640&q=75" alt="" />
            <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-5.jpg&w=640&q=75" alt="" />
            <img width={200} height={100} src="https://www.fibe.in/_next/image/?url=%2Fawards%2Faward-6.jpg&w=640&q=75" alt="" />
            

          </div>
        </div>
        <Reviews />
        <DownloadApp />
        <Blogs />
      </div>
    </>
  );
}
