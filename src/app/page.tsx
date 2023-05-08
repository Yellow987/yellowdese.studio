import Image from 'next/image';
import Footer from '../components/footer';
import test from '../markdown/test.md';

export default function Home() {
  return (
    <>
      
      hello world
      <Image src="/YellowVRC_1.png" alt="My Image" width={500} height={500} />
      end
    </>
  )
}
