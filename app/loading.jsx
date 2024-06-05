import { Container } from "@/components";

const loading = () => {
  return (
    <Container>
      <div className="animate-pulse flex flex-col gap-10">
        <div className="h-[23vh] md:h-[45vh] lg:h-[65vh] w-full bg-genesis-red/5"></div>
        <div className=" min-h-[40vh] w-full  bg-genesis-red/5 shadow shadow-genesis-red/10 p-6 md:p-12 md:py-20 flex flex-col justify-center gap-3">
          <div className=" w-[50%] lg:w-[25%] bg-genesis-red/10 py-2 rounded-md"></div>
          <div className="w-[100%] md:w-[80%] lg:w-[50%] bg-genesis-red/10 py-2 rounded-md"></div>
          <div className="w-[40%] md:w-[25%] lg:w-[20%] bg-genesis-red/10 py-5 my-2 rounded-md"></div>
        </div>
      </div>
    </Container>
  );
};

export default loading;
