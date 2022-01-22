const LandingPage = () => {
  return (
    <div className="bg-mesh w-full h-screen">
      <div className="max-w-6xl mx-auto px-10 pt-10 h-5/6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl">BitResearch</h1>
          <button className="bg-white py-4 px-8 rounded-xl shadow-black hover:shadow-black-lg">
            Connect to wallet
          </button>
        </nav>
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-center leading-tight">
            A place to appreciate interesting, independent research
          </h1>
          <h2 className="text-2xl font-semibold text-center mt-4">
            Completely runs on decentralized network
          </h2>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
