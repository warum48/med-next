import { render, screen } from '@testing-library/react';
import { DataPreview } from './DataPreview';

describe('DataPreview', () => {
  test('renders data preview component', () => {
    const data = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
    };

    render(<DataPreview data={data} />);

    const previewElement = screen.getByText(/Debug/i);
    expect(previewElement).toBeInTheDocument();

    const dataElement = screen.getByText(
      /{"name": "John Doe", "age": 30, "email": "johndoe@example.com"}/i
    );
    expect(dataElement).toBeInTheDocument();
  });
});