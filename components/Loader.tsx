import Image from 'next/image';

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center my-auto">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={150}
        height={150}
      />
    </div>
  );
};

export default Loader;