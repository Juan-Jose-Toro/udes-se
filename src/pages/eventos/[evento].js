import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = ['evento1','evento2']
  .map(person => { return { params: { evento: person } }});

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Replace this with an actual fetching function
  const eventData = {
    name: 'Graduación clase 2023',
    image: `/${params.evento}.png`,
    description: 'Donec fermentum justo non facilisis bibendum. Morbi massa magna, mattis at cursus sit amet, malesuada vel magna. Praesent suscipit massa vitae tellus dictum, in semper purus tincidunt. Morbi elit velit, scelerisque non commodo et, rhoncus nec nunc. Curabitur pulvinar fringilla ultrices. Sed ut nisl eu est blandit laoreet id nec tellus. Etiam vitae metus libero. Morbi ac cursus nulla. Donec sed eros ultrices nisl tincidunt varius. Suspendisse pellentesque quam in elit congue mattis. Ut est turpis, egestas et felis eu, volutpat interdum tellus. Pellentesque sit amet libero at ipsum aliquet tincidunt non sed quam. Proin blandit, elit quis hendrerit fermentum, justo ante molestie dolor, in aliquet massa velit quis lorem. Donec facilisis lacinia justo ac lobortis. Quisque iaculis massa id tortor rutrum, rutrum malesuada mi sodales. Donec et nulla a mi mollis feugiat at id felis.'
  }

  return { props: { eventData } }
}

export default function Evento({ eventData }) {
  const { name, image, description } = eventData;

  return (<>
    <Head>
      <title>{name}</title>
    </Head>
    <div className="mx-auto max-w-[20rem] md:max-w-[40rem] lg:max-w-[65rem]">
      <Link className="relative top-[2rem]" href="/#eventos" scroll={false}><img src="/arrow.svg"/></Link>
      <div className="md:mx-[4rem]">
        <Image className="mt-[5rem] mx-auto" width={152} height={152} src={image} alt={`Brochure de evento: ${name}`}/>
        <h2 className="text-center pt-[2rem] font-bold">{name}</h2>
        <p className="pt-[2rem]">{description}</p>
        <div className='relative h-36 bg-red-400 rounded-md overflow-hidden my-[2rem]'>
          <Image
            className='object-cover'
            fill
            src="/workshop.jpeg"
            alt="workshop image"
          />
        </div>
      </div>
    </div>
  </>)
}