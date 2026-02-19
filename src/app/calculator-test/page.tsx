import type { Metadata } from 'next';
import CalculatorTestClient from './CalculatorTestClient';

export const metadata: Metadata = {
  title: 'Calculator Test - lend.ro',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CalculatorTestPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Rubik', sans-serif;
        }
      `}</style>
      <CalculatorTestClient />
    </>
  );
}
