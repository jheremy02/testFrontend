// src/__tests__/CardItem.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';  // Import vitest's mock function
import CardItem from '../components/CardItem'; // Adjust the path to your component

// Sample product data
const product = {
  id: 'cGjFJlmqNPIwU59AOcY8H',
  model: 'Product Model',
  brand: 'Product Brand',
  price: '99.99',
  imgUrl: 'https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg'
};

describe('CardItem Component', () => {
  test('renders the product details correctly', async () => {
    render(
      <MemoryRouter>
        <CardItem product={product} />
      </MemoryRouter>
    );

    // Check if the product model is rendered
    expect(screen.getByText('Product Model')).toBeInTheDocument();
    // Check if the product brand is rendered
    expect(screen.getByText('Product Brand')).toBeInTheDocument();
    // Check if the product price is rendered
    expect(screen.getByText('S/. 99.99')).toBeInTheDocument();


    // Get all images
    const images = screen.getAllByRole('img');

    // Ensure the images array contains at least one image
    expect(images.length).toBeGreaterThan(0);

    // Check if each image has the correct src attribute
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', product.imgUrl);
    });

  });

  
});
