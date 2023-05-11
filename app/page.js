import Image from 'next/image';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Intro />
      <Timeline />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
