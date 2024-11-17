import "/src/Style.css"

const LoadingScreen = () => {
  return (
    <div className="loading-screen fixed inset-0 bg-black flex items-center justify-center">
      <h1 className="deliciousness-text text-white text-5xl">Deliciousness</h1>
    </div>
  );
};

export default LoadingScreen;
