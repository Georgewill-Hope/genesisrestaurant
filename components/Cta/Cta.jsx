import Image from "next/image";
import advert from "@/public/images/cta_img.avif";
import { Button } from "..";

const Cta = () => {
  
  return (
    <article className="flex items-center justify-between w-full">
      <div className="min-h-full flex-1 bg-white px-3 md:px-14 lg:ps-10 lg:pe-28 py-14 md:py-20 rounded-3xl lg:-mr-36 shadow-sm">
        <p className="text-3xl font-semibold text-genesis-red">
          Fastest delivery
        </p>
        <h3 className="text-[#1E1D23] text-3xl md:text-4xl lg:text-3xl font-extrabold my-6">
          FASTEST DELIVERY ON YOUR DOOR STEP
        </h3>
        <Button text="ORDER NOW" />
      </div>
      <div className="hidden relative w-[430px] h-96  lg:flex">
        <Image
          src={advert}
          alt="cta image"
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority
          className="object-contain"
        />
      </div>
    </article>
  );
};

export default Cta;
