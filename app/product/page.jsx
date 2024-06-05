import { ProductData } from "@/_data";
import { Card, Container } from "@/components";

const page = () => {
  return (
    <Container>
      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl mx-auto gap-5">
        {ProductData.map((item, index) => (
          <Card key={item.name} {...item} index={index} />
        ))}
      </section>
    </Container>
  
  );
};

export default page;
