import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders proper text', function() {
  const data = {
    author: 'aaaaa',
    darkmode: true,
    id: 1,
    src: 'abc.jpg',
    subtitle: 'ssssss',
    title: 'tttttt',
    url: 'www.google.com',
  }

  render(<Card {...data} />);
  expect(screen.getByText(new RegExp(data.author, 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(data.id, 'i'))).toBeInTheDocument();
  // expect(screen.queryBy(new RegExp(`img[src*=${data.src}]`, 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(data.subtitle, 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(data.title, 'i'))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(data.url, 'i'))).toBeInTheDocument();
});

test('renders darkmode', function() {
  const data = {
    author: 'aaaaa',
    darkmode: true,
    id: 1,
    src: 'abc.jpg',
    subtitle: 'ssssss',
    title: 'tttttt',
    url: 'www.google.com',
  }

  render(<Card {...data} />);
  // expect(screen.queryBy(new RegExp(`.darkmode`, 'i'))).toBeInTheDocument();
});
