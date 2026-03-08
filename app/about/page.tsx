import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <nav className="bg-green-700 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <h1 className="font-bold text-xl">Hope Foundation</h1>

          <div className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/activities">Activities</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-6">About Our NGO</h1>

        <p className="mb-4">
          Hope Foundation works to support underprivileged communities through
          education, healthcare and food distribution.
        </p>

        <p className="mb-4">
          Our mission is to create social impact by helping people access basic
          resources and opportunities.
        </p>

        <p>
          We organize community programs, health camps and educational
          initiatives through volunteers and donations.
        </p>
      </div>

    </main>
  );
}