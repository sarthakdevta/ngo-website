import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      <nav className="bg-green-700 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
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

      <section className="text-center py-24 bg-green-100">
        <h1 className="text-5xl font-bold mb-4 text-green-900">
          Helping People. Changing Lives.
        </h1>

        <p className="text-lg mb-8">
          Support our NGO in education, healthcare and social welfare.
        </p>

        <Link
          href="/donate"
          className="bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Donate Now
        </Link>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Activities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-md p-6 rounded-lg border">
            <h3 className="font-bold text-xl mb-2">Education</h3>
            <p>Helping children access quality education.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg border">
            <h3 className="font-bold text-xl mb-2">Healthcare</h3>
            <p>Providing medical support and health camps.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg border">
            <h3 className="font-bold text-xl mb-2">Food Support</h3>
            <p>Distributing food and essentials to families.</p>
          </div>

        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center p-6">
        © 2026 Hope Foundation NGO
      </footer>

    </main>
  );
}