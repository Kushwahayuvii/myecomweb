import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 ">
      <div className="max-w-9xl mx-auto px-4 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-[#ffba00]">MyShop</h2>
          <p className="mt-4">
            Your trusted online store for premium products.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-[#ffba00]">Home</Link></li>
            <li><Link className="hover:text-[#ffba00]">Shop</Link></li>
            <li><Link className="hover:text-[#ffba00]">About</Link></li>
            <li><Link className="hover:text-[#ffba00]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-l bg-[#1e293b] text-white outline-none"
            />
            <button className="bg-[#ffba00] text-black px-4 rounded-r font-semibold">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="text-center py-6 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
