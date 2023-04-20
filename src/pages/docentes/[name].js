import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

export async function getStaticPaths() {
  const paths = ['Bob Smith', 'Alice Roberts', 'Sofia Stone', 'Johnson Lara']
  .map(person => { return { params: { name: person } }});
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // from params we can get params.name, then we can fetch the corresponding person from a JSON object / array where we store the rest of the data
  const profileData = { 
    name: 'Bob Smith', 
    image: '/profile-placeholder.png',
    contact: 'jhon.smith@mail.udes',
    courses: ['Fundamentos de Programación', 'Configuración y Mantenimiento de Software', 'Calidad de Software', 'Minería de Datos'],
    position: 'Docente - Líder Semillero',
    phone: '300 520 8181',
    description: 'Donec fermentum justo non facilisis bibendum. Morbi massa magna, mattis at cursus sit amet, malesuada vel magna. Praesent suscipit massa vitae tellus dictum, in semper purus tincidunt. Morbi elit velit, scelerisque non commodo et, rhoncus nec nunc. Curabitur pulvinar fringilla ultrices. Sed ut nisl eu est blandit laoreet id nec tellus. Etiam vitae metus libero. Morbi ac cursus nulla. Donec sed eros ultrices nisl tincidunt varius. Suspendisse pellentesque quam in elit congue mattis. Ut est turpis, egestas et felis eu, volutpat interdum tellus. Pellentesque sit amet libero at ipsum aliquet tincidunt non sed quam. Proin blandit, elit quis hendrerit fermentum, justo ante molestie dolor, in aliquet massa velit quis lorem. Donec facilisis lacinia justo ac lobortis. Quisque iaculis massa id tortor rutrum, rutrum malesuada mi sodales. Donec et nulla a mi mollis feugiat at id felis.'
  };

  return { props: { profileData } };
}

export default function Profile({ profileData }) {
  
  const { name, image, contact, courses, position, phone, description } = profileData;

  return (<>
    <Head>
      <title>{name}</title>
    </Head>
    <div className="mx-[2rem]">
      <Link className="relative top-[2rem]" href="/#equipo" scroll={false}><img src="/arrow.svg"/></Link>

      {/* Profile Quick Info */}
      <Image className='rounded-full mt-[5rem] mx-auto'
        width={152} height={152} src={image} alt={`Foto de perfil de ${name}`}
      />
      <h1 className="text-center pt-[2rem]">{name}</h1>
      <section className="pt-[2rem]">
        <p><strong>Contacto: </strong><span className="float-right">{contact}</span></p>
        <p className="pt-[.5rem]"><strong>Asignaturas: </strong></p>
        {courses.map(course => 
          <p key={nanoid()} className="pt-[.5rem]">
            {course}
          </p>)
        }
        <p className="pt-[.5rem]"><strong>Cargo: </strong><span className="float-right">{position}</span></p>
        <p className="pt-[.5rem]"><strong>Teléfono: </strong><span className="float-right">{phone}</span></p>
      </section>
      
      {/* Description */}
      <section>
        <h2 className="font-semibold">Descripción</h2>
        <p className="pt-[2rem]">{description}</p>
      </section>
    </div>
  </>);
}