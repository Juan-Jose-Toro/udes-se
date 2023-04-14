import Image from 'next/image';
import { Inter } from 'next/font/google';
import BurgerMenu from '../components/BurgerMenu';
import ProfileGraph from '../components/ProfileGraph';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto pt-[3rem] px-[2rem]'>
      <header className='flex justify-between pb-[3rem]'>
        <img className='relative' src="/sm-logo.svg" alt="Logo"/>
        <BurgerMenu/>
      </header>
      <main>
        {/* Hero */}
        <header className='mb-[12rem]'>
          <h1 className='mb-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis, est id tincidunt mattis, nibh lorem finibus odio, at sagittis ante libero id erat. Ut ut lectus in nisi interdum dictum ac sed tortor. Mauris eget turpis ligula. In hac habitasse platea dictumst.</p>
        </header>

        {/* Nuestro Equipo */}
        <section>
          <h1 className='pb-[3rem]'>Nuestro Equipo</h1>
          <ProfileGraph/>
        </section>
      </main>
   </div>
  )
}