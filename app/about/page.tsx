import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About'
}

export default function About() {
  return (
    <div>
      <h1>Hello About Page!</h1>
    </div>
  );
}