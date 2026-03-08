import Link from "next/link";

export default function Donate() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-900 text-center">

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

      <div className="py-20">

        <h1 className="text-4xl font-bold mb-6 text-green-900">
          Support Our Mission
        </h1>

        <p className="mb-6">
          Scan the QR code or use UPI to donate.
        </p>

        <img src="/qr.png" className="mx-auto w-64 border rounded"/>

        <p className="mt-6 font-bold">
          UPI ID : ngo@upi
        </p>

      </div>

    </main>
  );
}