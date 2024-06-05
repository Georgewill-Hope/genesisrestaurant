import { Container } from "@/components";

const loading = () => {
  return <Container>
    <div className="bg-genesis-red/5 w-full h-[60vh] lg:h-fit  rounded-md overflow-x-auto animate-pulse">
      <div className="w-[1000px] py-10">

        <div className="flex justify-between px-8 gap-5 mb-5 w-full">
          {[1, 2, 3, 4].map(item => (
            <div className={`bg-genesis-red/10 h-3 rounded-md ${item === 1 ? "w-96" : "w-52"}`} key={item}>
            </div>
          ))}
        </div>
        <div className="px-8 flex flex-col gap-3 w-full">
          {[5, 6, 7, 8].map(item => (
            <div className={`py-1.5 w-full rounded-md  flex items-center justify-between gap-5`} key={item}>
              <div className="flex gap-3 items-center w-96">
                <div className="py-10 w-[60%] h-20 rounded-md bg-genesis-red/10"></div>
                <div className="w-[40%] flex flex-col gap-3">
                  <div className="w-[90%] h-2 rounded-md bg-genesis-red/10"></div>
                  <div className="w-[70%] h-2 rounded-md bg-genesis-red/10"></div>
                </div>
              </div>
              <div className="w-52 h-2 rounded-md bg-genesis-red/10 mx-auto"></div>
              <div className="w-52 h-2 rounded-md bg-genesis-red/10 mx-auto"></div>
              <div className="w-52 h-2 rounded-md bg-genesis-red/10 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
};

export default loading;
