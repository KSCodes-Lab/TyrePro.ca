import React from 'react';
import Image from 'next/image';
import AntaresLogo from "@/assets/brands/Antares_Tires_Logo.jpg";
import BFGoodrichLogo from "@/assets/brands/BFGoodrich_logo.png";
import BridgestoneLogo from "@/assets/brands/Bridgestone_Logo.png";
import ContinentalLogo from "@/assets/brands/Continental_Logo_Social.jpg";
import FalkenLogo from "@/assets/brands/Falken_Tire_logo.png";
import FirestoneLogo from "@/assets/brands/Firestone_Logo.png";
import FuzionLogo from "@/assets/brands/Fuzion_Tires_logo.png";
import GeneralLogo from "@/assets/brands/General_Tire_Logo.png";
import GislavedLogo from "@/assets/brands/Hankook_Logo.png";
import HankookLogo from "@/assets/brands/Hankook_Logo.png";
import MichelinLogo from "@/assets/brands/Michelin_Corporate_Logo___color.jpg";
import NexenLogo from "@/assets/brands/Nexen_Tire_Logo.png";
import NittoLogo from "@/assets/brands/Nitto_Tires_logo.png";
import RadarLogo from "@/assets/brands/Radar_Tires_Logo_with_R_Colour_Logo.jpg";
// import ToyoLogo from "@ /assets/brands/"
import UniroyalLogo from "@/assets/brands/Uniroyal_logo.png";
// import WinterClawLogo from "@/assets/brands/"
import YokohamaLogo from "@/assets/brands/Yokohama_logo.jpg";
import maxresdefaultLogo from "@/assets/brands/maxresdefault.jpg";
import pirelliLogo from "@/assets/brands/pirelli_logo.png";

// const brands = [
//   "Antares",
//   "BFGoodrich",
//   "Bridgestone",
//   "Continental",
//   "Falken",
//   "Firestone",
//   "Fuzion",
//   "General",
//   "Gislaved",
//   "Hankook",
//   "Kumho",
//   "Laufenn",
//   "Michelin",
//   "Nexen",
//   "Nitto",
//   "Pirelli",
//   "Radar",
//   "Toyo",
//   "Uniroyal",
//   "Winter Claw",
//   "Yokohama",
// ];


const brands = [
  { name: "Antares", logo: AntaresLogo },
  { name: "BFGoodrich", logo: BFGoodrichLogo },
  { name: "Bridgestone", logo: BridgestoneLogo },
  { name: "Continental", logo: ContinentalLogo },
  { name: "Falken", logo: FalkenLogo },
  { name: "Firestone", logo: FirestoneLogo },
  { name: "Fuzion", logo: FuzionLogo },
  { name: "General", logo: GeneralLogo },
  { name: "Gislaved", logo: GislavedLogo },
  { name: "Hankook", logo: HankookLogo },
  { name: "Michelin", logo: MichelinLogo },
  { name: "Nexen", logo: NexenLogo },
  { name: "Nitto", logo: NittoLogo },
  { name: "Pirelli", logo: pirelliLogo },
  { name: "Radar", logo: RadarLogo },
  { name: "Uniroyal", logo: UniroyalLogo },
  { name: "Yokohama", logo: YokohamaLogo },
  // You can add placeholders for missing logos:
  // { name: "Toyo", logo: MaxresdefaultLogo },
  { name: "Winter Claw", logo: maxresdefaultLogo },
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
              <Image
                src={brand.logo}
                alt={brand.name}
                className="object-contain"
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandSection
