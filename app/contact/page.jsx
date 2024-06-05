import { Form } from "@/components";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const page = () => {
  return (
    <section className="min-h-[77vh] rounded-2xl bg-white w-full py-3 md:py-10 max-w-[95%] lg:max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0">
        <div className="w-full md:w-fit flex items-center lg:justify-center gap-4 px-3">
          <div className="bg-[#8D8D8D]/5 rounded-lg flex items-center justify-center p-6">
            <MdOutlineEmail className="text-5xl" />
          </div>
          <div>
            <p className="text-[#8D8D8D] break-all">
              georgewillhopeolilenya@gmail.com
            </p>
          </div>
        </div>
        <div className="w-full md:w-fit flex items-center justify-start lg:justify-center gap-4 px-3">
          <div className="bg-[#8D8D8D]/5 rounded-lg flex items-center justify-center p-6">
            <AiOutlinePhone className="text-5xl" />
          </div>
          <div>
            <h3 className=" md:text-xl font-bold text-[#1E1D23]">
              PHONE NUMBERS
            </h3>
            <p className="text-[#8D8D8D]">+2348051073722</p>
            <p className="text-[#8D8D8D]">+2349******570</p>
          </div>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default page;
