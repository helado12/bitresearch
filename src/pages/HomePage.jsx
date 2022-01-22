import DownloadIcon from "../assets/download_icon.svg";
import ProfileIcon from "../assets/profile_icon.svg";

const HomePage = () => {
  return (
    <div className="max-w-7xl px-10 mx-auto mt-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl">BitResearch</h1>
        <button className="bg-white py-4 px-8 rounded-xl shadow-black hover:shadow-black-lg">
          Connected to wallet
        </button>
      </nav>

      <div className="grid grid-cols-1 mt-10 gap-6 xl:grid-cols-2">
        <div className="flex rounded-3xl shadow-light gap-4">
          <img
            className="w-44 h-64 rounded-3xl"
            src="https://unsplash.it/400"
            alt="paper"
          />
          <div className="flex h-full flex-col justify-evenly pr-4">
            <h2 className="text-xl font-bold">Research Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nemo pariatur accusamus est recusandae vero cum a, molestiae dicta
              assumenda iste autem id corrupti rem aliquam.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={DownloadIcon} alt="download" />
                <span>Download PDF</span>
              </button>
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={ProfileIcon} alt="profile" />
                View Author
              </button>
            </div>
          </div>
        </div>
        <div className="flex rounded-3xl shadow-light gap-4">
          <img
            className="w-44 h-64 rounded-3xl"
            src="https://unsplash.it/401"
            alt="paper"
          />
          <div className="flex h-full flex-col justify-evenly pr-4">
            <h2 className="text-xl font-bold">Research Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nemo pariatur accusamus est recusandae vero cum a, molestiae dicta
              assumenda iste autem id corrupti rem aliquam.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={DownloadIcon} alt="download" />
                <span>Download PDF</span>
              </button>
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={ProfileIcon} alt="profile" />
                View Author
              </button>
            </div>
          </div>
        </div>
        <div className="flex rounded-3xl shadow-light gap-4">
          <img
            className="w-44 h-64 rounded-3xl"
            src="https://unsplash.it/401"
            alt="paper"
          />
          <div className="flex h-full flex-col justify-evenly pr-4">
            <h2 className="text-xl font-bold">Research Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nemo pariatur accusamus est recusandae vero cum a, molestiae dicta
              assumenda iste autem id corrupti rem aliquam.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={DownloadIcon} alt="download" />
                <span>Download PDF</span>
              </button>
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={ProfileIcon} alt="profile" />
                View Author
              </button>
            </div>
          </div>
        </div>
        <div className="flex rounded-3xl shadow-light gap-4">
          <img
            className="w-44 h-64 rounded-3xl"
            src="https://unsplash.it/401"
            alt="paper"
          />
          <div className="flex h-full flex-col justify-evenly pr-4">
            <h2 className="text-xl font-bold">Research Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              nemo pariatur accusamus est recusandae vero cum a, molestiae dicta
              assumenda iste autem id corrupti rem aliquam.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={DownloadIcon} alt="download" />
                <span>Download PDF</span>
              </button>
              <button className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition-all flex items-center gap-2">
                <img src={ProfileIcon} alt="profile" />
                View Author
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
