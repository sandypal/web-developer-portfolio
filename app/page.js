import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#020617] text-white min-h-screen">
      <section id="here" className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding">
        <p>Hero Section</p>
      </section>
      <section id="about" className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding">
        <p>About Section</p>
      </section>
      <section id="skills" className="bg-grey-900 relative min-h-screen w-full mx-auto overflow-hidden">
        <p>Skills Section</p>
      </section>
      <section id="project" className="bg-grey-900 relative min-h-screen w-full mx-auto overflow-hidden">
        <p>Project Section</p>
      </section>
      <section id="contact" className="bg-grey-900 relative min-h-screen w-full mx-auto overflow-hidden">
        <p>Contact Section</p>
      </section>
    </main>
  );
}
