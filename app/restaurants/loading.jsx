import { Container } from "@/components";

const loading = () => {
  return (
    <Container>
      <div className="animate-pulse">
        <div className="bg-genesis-red/30 p-10 rounded-xl">
          <div className=" w-[50%] lg:w-[15%] bg-genesis-red/10 py-2 rounded-md"></div>
          <div className=" w-full bg-genesis-red/10 py-5 rounded-md my-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-10 lg:px-0">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div
              className="bg-genesis-red/50 h-36 rounded-xl flex flex-col justify-center px-5"
              key={item}
            >
              <div>
                <div className="flex gap-3 items-center mb-2">
                  <div className=" w-[50%] lg:w-[10%]  bg-genesis-red/10 py-4 rounded-md"></div>
                  <div className=" w-[50%] lg:w-[100%] bg-genesis-red/10 py-2 rounded-md"></div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className=" w-[50%] lg:w-[10%]  bg-genesis-red/10 py-4 rounded-md"></div>
                  <div className=" w-[50%] lg:w-[100%] bg-genesis-red/10 py-2 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default loading;
