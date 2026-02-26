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
  return <CalculatorTestClient />;
}
