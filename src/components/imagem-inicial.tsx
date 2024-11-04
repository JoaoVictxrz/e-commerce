import Image from "next/image";

const ImagemInicial = () => {
  return (
    <div className="w-full overflow-hidden md:h-screen">
      <div className="">
        <Image
          src="https://static.pingendo.com/cover-bubble-dark.svg"
          width={1920}
          height={1080}
          priority
          alt="fundo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImagemInicial;
