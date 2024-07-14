import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <p className="text-3xl text-black font-bold">Welcome To Everest Astro</p>
      </div>
      <Image
        src="/everest.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />  
    </main>
  );
}
