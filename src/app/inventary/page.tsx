import React from 'react'

const page = () => {
  return (
    <div>
      Inventary page
    </div>
  )
}

export default page


// "use client";

// import React, { useMemo, useState } from "react";
// import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

// type Product = {
//   id: string;
//   title: string;
//   brand: string;
//   size: string;
//   price: number;
//   image: string;
//   description?: string;
//   inStock?: boolean;
// };

// const SAMPLE_PRODUCTS: Product[] = [
//   {
//     id: "p1",
//     title: "All-Season Radial 205/55R16",
//     brand: "Michelin",
//     size: "205/55R16",
//     price: 129.99,
//     image: "https://source.unsplash.com/800x600/?tire,car",
//     description: "Premium all-season tire for everyday driving.",
//     inStock: true,
//   },
//   {
//     id: "p2",
//     title: "Sport Performance 225/40R18",
//     brand: "Pirelli",
//     size: "225/40R18",
//     price: 169.99,
//     image: "https://source.unsplash.com/800x600/?wheel,tire",
//     description: "High performance tire with great grip.",
//     inStock: true,
//   },
//   {
//     id: "p3",
//     title: "Budget Tire 195/65R15",
//     brand: "General",
//     size: "195/65R15",
//     price: 79.99,
//     image: "https://source.unsplash.com/800x600/?auto,repair",
//     description: "Affordable option for small cars.",
//     inStock: true,
//   },
//   {
//     id: "p4",
//     title: "Winter Claw Snow 205/55R16",
//     brand: "Winter Claw",
//     size: "205/55R16",
//     price: 149.99,
//     image: "https://source.unsplash.com/800x600/?snow,car",
//     description: "Excellent traction in snow and ice.",
//     inStock: false,
//   },
//   {
//     id: "p5",
//     title: "All-Terrain 235/70R16",
//     brand: "Bridgestone",
//     size: "235/70R16",
//     price: 189.99,
//     image: "https://source.unsplash.com/800x600/?truck,tire",
//     description: "Durable all-terrain tire for trucks and SUVs.",
//     inStock: true,
//   },
//   // add more sample products as needed
// ];

// const ALL_BRANDS = Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.brand)));
// const ALL_SIZES = Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.size)));

//  const page = () => {
//   const [search, setSearch] = useState("");
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
//   const [showSidebar, setShowSidebar] = useState(true); // collapsed on small screens via css
//   const [onlyInStock, setOnlyInStock] = useState(false);

//   const toggleBrand = (brand: string) =>
//     setSelectedBrands((s) => (s.includes(brand) ? s.filter((b) => b !== brand) : [...s, brand]));

//   const toggleSize = (size: string) =>
//     setSelectedSizes((s) => (s.includes(size) ? s.filter((x) => x !== size) : [...s, size]));

//   const filteredProducts = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return SAMPLE_PRODUCTS.filter((p) => {
//       if (onlyInStock && !p.inStock) return false;
//       if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
//       if (selectedSizes.length && !selectedSizes.includes(p.size)) return false;
//       if (!q) return true;
//       return (
//         p.title.toLowerCase().includes(q) ||
//         p.brand.toLowerCase().includes(q) ||
//         (p.description && p.description.toLowerCase().includes(q)) ||
//         p.size.toLowerCase().includes(q)
//       );
//     });
//   }, [search, selectedBrands, selectedSizes, onlyInStock]);

//   return (
//     <div className="py-16 px-6 md:px-12 lg:px-20">
//       <div className="container mx-auto px-6 lg:px-14">
//         {/* Header: search + toggle sidebar on mobile */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//           <div className="flex items-center gap-3 w-full md:w-1/2 bg-white rounded-lg shadow-sm px-3 py-2 border border-gray-100">
//             <FaSearch className="text-gray-400" />
//             <input
//               type="search"
//               placeholder="Search tires, brands, sizes..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full outline-none text-sm text-gray-800 bg-transparent"
//               aria-label="Search inventory"
//             />
//           </div>

//           <div className="flex items-center gap-3 justify-between md:justify-end">
//             <button
//               onClick={() => setShowSidebar((s) => !s)}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#2d1070] text-yellow-300 hover:opacity-95 text-sm"
//               aria-expanded={showSidebar}
//             >
//               {showSidebar ? <FaChevronUp /> : <FaChevronDown />}
//               <span>{showSidebar ? "Hide Filters" : "Show Filters"}</span>
//             </button>

//             <label className="inline-flex items-center gap-2 text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 checked={onlyInStock}
//                 onChange={(e) => setOnlyInStock(e.target.checked)}
//                 className="rounded"
//               />
//               <span>In stock only</span>
//             </label>
//           </div>
//         </div>

//         {/* Main grid: sidebar + products */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* Sidebar - on large screens show as col-span-3, products col-span-9 */}
//           <aside
//             className={`lg:col-span-3 bg-white rounded-2xl border p-6 shadow-sm transition-all ${
//               showSidebar ? "block" : "hidden"
//             } lg:block`}
//             aria-labelledby="filter-heading"
//           >
//             <h3 id="filter-heading" className="text-lg font-semibold text-gray-900 mb-4">
//               Filters
//             </h3>

//             {/* Brands */}
//             <div className="mb-6">
//               <h4 className="text-sm font-medium text-gray-700 mb-3">Brands</h4>
//               <div className="grid grid-cols-2 gap-2">
//                 {ALL_BRANDS.map((brand) => (
//                   <label
//                     key={brand}
//                     className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedBrands.includes(brand)}
//                       onChange={() => toggleBrand(brand)}
//                       className="w-4 h-4"
//                     />
//                     <span className="truncate">{brand}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Sizes */}
//             <div className="mb-6">
//               <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
//               <div className="flex flex-col gap-2">
//                 {ALL_SIZES.map((size) => (
//                   <label key={size} className="flex items-center gap-2 text-sm text-gray-700">
//                     <input
//                       type="checkbox"
//                       checked={selectedSizes.includes(size)}
//                       onChange={() => toggleSize(size)}
//                       className="w-4 h-4"
//                     />
//                     <span>{size}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Price range quick links (visual only) */}
//             <div className="mb-6">
//               <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Price</h4>
//               <div className="flex gap-2 flex-wrap">
//                 {["< $100", "$100 - $150", "$150 - $200", "> $200"].map((label) => (
//                   <button
//                     key={label}
//                     className="text-sm px-3 py-1 rounded-md border bg-gray-50 hover:bg-gray-100"
//                     onClick={() => {
//                       // quick filter example: apply search for price range string (you can implement numeric filter)
//                       setSearch(label);
//                     }}
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Reset Filters */}
//             <div>
//               <button
//                 className="w-full px-4 py-2 rounded-md bg-[#2d1070] text-yellow-300 font-medium hover:opacity-95"
//                 onClick={() => {
//                   setSelectedBrands([]);
//                   setSelectedSizes([]);
//                   setSearch("");
//                   setOnlyInStock(false);
//                 }}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           </aside>

//           {/* Product grid */}
//           <section className="lg:col-span-9">
//             <div className="mb-4 flex items-center justify-between">
//               <p className="text-sm text-gray-600">
//                 Showing <span className="font-medium text-gray-800">{filteredProducts.length}</span> results
//               </p>

//               <div className="text-sm text-gray-600 hidden md:flex gap-4">
//                 <span className="px-3 py-1 bg-gray-100 rounded">Sort: Popular</span>
//                 <span className="px-3 py-1 bg-gray-100 rounded">View: Grid</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map((p) => (
//                 <article
//                   key={p.id}
//                   className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
//                 >
//                   <div className="w-full h-48 overflow-hidden">
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="p-4 flex flex-col flex-grow">
//                     <div className="flex items-start justify-between gap-3">
//                       <div>
//                         <h4 className="text-md font-semibold text-gray-900">{p.title}</h4>
//                         <p className="text-sm text-gray-500">{p.brand}</p>
//                       </div>

//                       <div className="text-right">
//                         <p className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}</p>
//                         <p className={`text-xs ${p.inStock ? "text-green-600" : "text-red-500"}`}>
//                           {p.inStock ? "In stock" : "Out of stock"}
//                         </p>
//                       </div>
//                     </div>

//                     <p className="text-sm text-gray-600 mt-3 flex-grow">{p.description}</p>

//                     <div className="mt-4 flex items-center justify-between">
//                       <div className="text-sm text-gray-600">Size: <span className="font-medium text-gray-800">{p.size}</span></div>

//                       <div className="flex items-center gap-2">
//                         <button
//                           className="px-3 py-1 text-sm bg-[#2d1070] text-yellow-300 rounded-md hover:opacity-95"
//                           onClick={() => alert(`Added ${p.title} to cart (demo)`)}
//                         >
//                           Add
//                         </button>

//                         <button
//                           className="px-3 py-1 text-sm border rounded-md text-gray-700 hover:bg-gray-50"
//                           onClick={() => alert(`View details for ${p.title} (demo)`)}
//                         >
//                           Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {/* Empty state */}
//             {filteredProducts.length === 0 && (
//               <div className="mt-8 bg-white rounded-2xl p-8 text-center">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">No results</h3>
//                 <p className="text-sm text-gray-600">Try adjusting your filters or search term.</p>
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;