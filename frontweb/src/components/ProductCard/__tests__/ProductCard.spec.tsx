import { render, screen } from '@testing-library/react';
import { Product } from 'types/product';
import ProductCard from '..';

test('should render ProductCard', () => {
  const product : Product = {
    name: "Computador Dell",
    price: 2345.7,
    imgUrl: "https://google.com",
  } as Product;

  render(<ProductCard product={product} />);

  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByAltText(product.name)).toBeInTheDocument();
  expect(screen.getByText("R$")).toBeInTheDocument();
  expect(screen.getByText("2.345,70")).toBeInTheDocument();
});
