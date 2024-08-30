import { getData } from "@/app/helpers";
import Container from "@/components/Container";
import React from "react";
interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await getData(endpoint);
  console.log(product);

  return (
    <Container className="py-5">
      SingleProductPage {id} {product?.title}
    </Container>
  );
};

export default SingleProductPage;
