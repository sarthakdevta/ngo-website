import Link from "next/link";

export default function Contact() {
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

      <div className="max-w-3xl mx-auto p-10">

        <h1 className="text-4xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="mb-3">Email: contact@hopefoundation.org</p>
        <p className="mb-3">Phone: +91 70007 72362</p>
        <p>Bhopal, Madhya Pradesh, India</p>

      </div>

    </main>
  );
}