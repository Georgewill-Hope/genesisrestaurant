import { Container } from "@/components";
import ProductPageCard from "@/components/Card/ProductPageCard";
import { getProductData } from "@/utils";

const page = ({ params }) => {
  const product = decodeURIComponent(params.slug);
  const data = getProductData(product);
  const { name, price, pic } = data;
  return (
    <Container>
      <ProductPageCard name={name} price={price} pic={pic} />
    </Container>
  );
};

export default page;
