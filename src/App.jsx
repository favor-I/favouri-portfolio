import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default function App() {
  return (
    <div className="bg-bg text-on-bg min-h-screen pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
