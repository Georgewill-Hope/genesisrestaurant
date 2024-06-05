import { Container } from "@/components";

const loading = () => {
  return (
    <div className="animate-pulse">
      <Container>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl mx-auto  gap-5">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div
              className="w-72 shadow-genesis-red/5 shadow rounded-md"
              key={item}
            >
              <div className="relative w-full h-52 bg-genesis-red/10 rounded-md"></div>
              <div className="px-2 py-4 w-full">
                <div className=" w-[85%] bg-genesis-red/10 p-1 rounded-full"></div>
                <div className=" w-[40%] bg-genesis-red/10 p-1 mt-2 rounded-full"></div>
                <div className=" w-[50%] bg-genesis-red/10 p-1 my-2 rounded-full"></div>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center justify-between">
                    <div className=" w-[50%] bg-genesis-red/10 p-1 my-2 rounded-md text-center py-4 px-4"></div>
                    <div className=" w-[50%] bg-genesis-red/10 px-2 py-2 mx-3 my-2 rounded-sm"></div>
                    <div className=" w-[50%] bg-genesis-red/10 p-1 my-2 rounded-md text-center py-4 px-4"></div>
                  </div>
                  <div className=" w-[50%] bg-genesis-red/10 p-1 my-2 rounded-md text-center py-4 px-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default loading;
