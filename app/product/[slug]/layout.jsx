import { Container } from "@/components";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <Container>
      <div className="ms-5 md:ms-20 lg:ms-10 mb-2">
        <Link href={"/product"}>{"<-"} Back</Link>
      </div>
      {children}
    </Container>
  );
};

export default layout;
