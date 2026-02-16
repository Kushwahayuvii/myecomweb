export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">

      {/* Hero Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffba00]">
          About MyShop
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          We are dedicated to providing high-quality products at unbeatable prices.
          Our mission is to make online shopping simple, secure, and enjoyable.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src="https://via.placeholder.com/500"
          alt="about"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#ffba00]">
            Our Story
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Founded with passion and innovation, MyShop started as a small idea
            to create a reliable online marketplace. Today, we serve thousands
            of happy customers across the country with premium quality products.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            We believe in trust, transparency, and top-notch customer service.
            Your satisfaction is our top priority.
          </p>
        </div>

      </section>

      {/* Features */}
      <section className="bg-[#1e293b] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold text-[#ffba00] mb-12">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-400">
                We carefully select high-quality products for our customers.
              </p>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-400">
                Quick and reliable shipping across the country.
              </p>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-400">
                100% secure payment system for safe transactions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#ffba00] mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {[1,2,3].map((member) => (
            <div
              key={member}
              className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src="https://via.placeholder.com/200"
                alt="team"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg">Team Member</h3>
              <p className="text-gray-400 text-sm">Founder & Developer</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
