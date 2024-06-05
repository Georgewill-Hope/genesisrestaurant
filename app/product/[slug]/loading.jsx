import { Container } from "@/components";

const loading = () => {
  return <Container>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 animate-pulse">
        <div className="relative h-72 w-72 lg:h-[400px] lg:w-[400px] bg-genesis-red/10 rounded-lg"></div>

        <div className="">
          <div className="w-72 md:w-96 bg-genesis-red/10 p-1 md:my-2 rounded-md text-center py-1 md:py-2 px-4"></div>
          <div className=" w-[70%] bg-genesis-red/10 px-2 py-1 rounded-md my-2 md:my-4"></div>

          <div className="flex items-center gap-5 ">
            <div className=" w-[100%] bg-genesis-red/10 p-1 md:my-2 rounded-md text-center py-4 px-4"></div>
            <div className=" w-[80%] bg-genesis-red/10 p-1 my-2 rounded-md text-center py-4 px-4"></div>
          </div>
          <div className=" w-[70%] bg-genesis-red/10 px-2 py-1 md:py-1.5 rounded-md md:my-3"></div>

          <div className="flex items-center gap-3 mt-5">
            <div className="w-10 h-10 bg-genesis-red/10 rounded-lg"></div>
            <div className="w-10 h-10 bg-genesis-red/10 rounded-lg"></div>
            <div className="w-10 h-10 bg-genesis-red/10 rounded-lg"></div>
            <div className="w-10 h-10 bg-genesis-red/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </Container>
};

export default loading;
