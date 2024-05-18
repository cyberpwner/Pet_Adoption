import spinner from '../assets/imgs/spinner.gif';

function LoadingScreen() {
  return (
    <section className="grid grid-cols-1 place-items-center mt-20">
      <img src={spinner} alt="loading" className="w-32" />
    </section>
  );
}

export default LoadingScreen;
