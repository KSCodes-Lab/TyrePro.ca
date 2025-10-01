import React from 'react';

const brands = [
  "Antares",
  "BFGoodrich",
  "Bridgestone",
  "Continental",
  "Falken",
  "Firestone",
  "Fuzion",
  "General",
  "Gislaved",
  "Hankook",
  "Kumho",
  "Laufenn",
  "Michelin",
  "Nexen",
  "Nitto",
  "Pirelli",
  "Radar",
  "Toyo",
  "Uniroyal",
  "Winter Claw",
  "Yokohama",
];


const BrandSection = () => {
  return (
     <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-8 lg:px-14 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Our <span className="text-[#2d1070]">Brands</span>
        </h2>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center border rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition bg-gray-50 text-gray-700 font-medium"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandSection
