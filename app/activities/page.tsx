import Link from "next/link";

export default function Activities() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

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

      <div className="max-w-6xl mx-auto p-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Activities
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 shadow rounded border">
            <h2 className="text-xl font-bold mb-2">Education Programs</h2>
            <p>Providing books and educational support to children.</p>
          </div>

          <div className="bg-white p-6 shadow rounded border">
            <h2 className="text-xl font-bold mb-2">Health Camps</h2>
            <p>Free health checkups and medical awareness programs.</p>
          </div>

          <div className="bg-white p-6 shadow rounded border">
            <h2 className="text-xl font-bold mb-2">Food Distribution</h2>
            <p>Helping families with food and essential supplies.</p>
          </div>

        </div>

      </div>

    </main>
  );
}