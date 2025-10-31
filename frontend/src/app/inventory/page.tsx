// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { FaChevronUp, FaSearch } from "react-icons/fa";
// import { RootState } from "@/store";
// import { fetchProducts } from "@/store/actions/products";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import Image from "next/image";
// import { FaChevronDown } from "react-icons/fa6";

// type ProductsType = {
//   itemNumber: string;
//   type: string;
//   brand: string;
//   size: string;
//   productImgURL?: string | null;  // allow Blob now
//   basePrice?: number;
//   price: number;
//   qtyAvailable?: number;
//   inStock?: boolean;
// };

// const Page: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const Products = useAppSelector(
//     (state: RootState) => state?.products?.productList
//   );
//   // const { productList, loading, error } = useSelector((state: RootState) => state.products);
//   const products: ProductsType[] = Products ?? []; // safe fallback
//   // console.log("Products", Products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // derive brand and size lists from actual products (memoized)
//   const ALL_BRANDS = useMemo(
//     () => Array.from(new Set(products.map((p) => p.brand))),
//     [products]
//   );
//   // const ALL_SIZES = useMemo(
//   //   () => Array.from(new Set(products.map((p) => p.size))),
//   //   [products]
//   // );

//   const [search, setSearch] = useState("");
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
//   const [showSidebar, setShowSidebar] = useState(true); // collapsed on small screens via css
//   const [onlyInStock, setOnlyInStock] = useState(false);

//   const toggleBrand = (brand: string) =>
//     setSelectedBrands((s) =>
//       s.includes(brand) ? s.filter((b) => b !== brand) : [...s, brand]
//     );

//   const toggleSize = (size: string) =>
//     setSelectedSizes((s) =>
//       s.includes(size) ? s.filter((x) => x !== size) : [...s, size]
//     );

//   const filteredProducts = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return Products.filter((product) => {
//       if (onlyInStock && !product.inStock) return false;
//       if (selectedBrands.length && !selectedBrands.includes(product.brand))
//         return false;
//       if (selectedSizes.length && !selectedSizes.includes(product.size))
//         return false;
//       if (!q) return true;
//       return (
//         product.type.toLowerCase().includes(q) ||
//         product.brand.toLowerCase().includes(q) ||
//         (product.size && product.size.toLowerCase().includes(q)) ||
//         product.size.toLowerCase().includes(q)
//       );
//     });
//   }, [products, search, selectedBrands, selectedSizes, onlyInStock]);

// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { FaChevronUp, FaSearch } from "react-icons/fa";
// import { RootState } from "@/store";
// import { fetchProducts } from "@/store/actions/products";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import Image from "next/image";
// import { FaChevronDown } from "react-icons/fa6";

// type ProductsType = {
//   itemNumber: string;
//   type: string;
//   brand: string;
//   size: string;
//   productImgURL?: string | null;
//   basePrice?: number;
//   price: number;
//   qtyAvailable?: number;
//   inStock?: boolean;
// };

// const Page: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const storeProducts = useAppSelector(
//     (state: RootState) => state?.products?.productList
//   );

//   // Make a stable memoized products array (prevents lint warning)
//   const products: ProductsType[] = useMemo(() => storeProducts ?? [], [
//     storeProducts,
//   ]);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // derive brand list from memoized products
//   const ALL_BRANDS = useMemo(
//     () => Array.from(new Set(products.map((p) => p.brand))),
//     [products]
//   );

//   const [search, setSearch] = useState("");
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [onlyInStock, setOnlyInStock] = useState(false);

//   const toggleBrand = (brand: string) =>
//     setSelectedBrands((s) =>
//       s.includes(brand) ? s.filter((b) => b !== brand) : [...s, brand]
//     );

//   // removed unused `toggleSize` (was causing eslint unused var warning)
//   // if you plan to re-enable the Sizes UI, re-add a toggleSize like above.

//   const filteredProducts = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     return products.filter((product) => {
//       if (onlyInStock && !product.inStock) return false;
//       if (selectedBrands.length && !selectedBrands.includes(product.brand))
//         return false;
//       if (selectedSizes.length && !selectedSizes.includes(product.size))
//         return false;
//       if (!q) return true;
//       return (
//         product.type.toLowerCase().includes(q) ||
//         product.brand.toLowerCase().includes(q) ||
//         (product.size && product.size.toLowerCase().includes(q))
//       );
//     });
//   }, [products, search, selectedBrands, selectedSizes, onlyInStock]);

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
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#2d1070] text-white hover:opacity-95 text-sm"
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
//             <h3
//               id="filter-heading"
//               className="text-lg font-semibold text-gray-900 mb-4"
//             >
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
//             {/* <div className="mb-6">
//               <h4 className="text-sm font-medium text-gray-700 mb-3">Sizes</h4>
//               <div className="flex flex-col gap-2">
//                 {ALL_SIZES.map((size) => (
//                   <label
//                     key={size}
//                     className="flex items-center gap-2 text-sm text-gray-700"
//                   >
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
//             </div> */}

//             {/* Price range quick links (visual only) */}
//             {/* <div className="mb-6">
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
//             </div> */}

//             {/* Reset Filters */}
//             <div>
//               <button
//                 className="w-full px-4 py-2 rounded-md bg-[#2d1070] text-white font-medium hover:opacity-95"
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
//                 Showing{" "}
//                 <span className="font-medium text-gray-800">
//                   {filteredProducts.length}
//                 </span>{" "}
//                 results
//               </p>

//               <div className="text-sm text-gray-600 hidden md:flex gap-4">
//                 <span className="px-3 py-1 bg-gray-100 rounded">
//                   Sort: Popular
//                 </span>
//                 <span className="px-3 py-1 bg-gray-100 rounded">
//                   View: Grid
//                 </span>
//               </div>
//             </div>
//             {/* product details from api */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map((p) => (
//                 <article
//                   key={p.itemNumber}
//                   className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
//                 >
//                   <div className="w-full h-48 overflow-hidden">
//                     <Image
//                       src={p.productImgURL ?? "/banner_bg.jpg"}
//                       alt={p.itemNumber}
//                       width={200}
//                       height={200}
//                       className="w-full h-full object-contain"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="p-4 flex flex-col flex-grow">
//                     <div className="flex items-start justify-between gap-3">
//                       <div>
//                         <h4 className="text-md font-semibold text-gray-900">
//                           {p.brand} ({p.qtyAvailable ?? 0})
//                         </h4>
//                         <p className="text-sm text-gray-500">{p.type}</p>
//                       </div>

//                       <div className="text-right">
//                         <p className="text-lg font-bold text-gray-900">
//                           ${p.price}
//                         </p>
//                         <p
//                           className={`text-xs ${
//                             p.inStock ? "text-green-600" : "text-red-500"
//                           }`}
//                         >
//                           {p.inStock ? "In stock" : "Out of stock"}
//                         </p>
//                       </div>
//                     </div>

//                     {/* <p className="text-sm text-gray-600 mt-3 flex-grow"> <b>Item Number:</b> {p.itemNumber}</p> */}
//                     <p className="text-sm text-gray-600 mt-3 flex-grow">
//                       {" "}
//                       <b>Size:</b> {p.size}
//                     </p>

//                     <div className="mt-4 flex items-center justify-between">
//                       {/* <div className="text-sm text-gray-600">Size: <span className="font-medium text-gray-800">{p.size}</span></div> */}

//                       <div className="flex items-center gap-2">
//                         {/* <button
//                           className="px-3 py-1 text-sm bg-[#2d1070] text-white rounded-md hover:opacity-95"
//                           onClick={() =>
//                             alert(`Added ${p.brand} to cart (demo)`)
//                           }
//                         >
//                           Add
//                         </button>

//                         <button
//                           className="px-3 py-1 text-sm border rounded-md text-gray-700 hover:bg-gray-50"
//                           onClick={() =>
//                             alert(`View details for ${p.brand} (demo)`)
//                           }
//                         >
//                           Details
//                         </button> */}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {/* Empty state */}
//             {filteredProducts.length === 0 && (
//               <div className="mt-8 bg-white rounded-2xl p-8 text-center">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   No results
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   Try adjusting your filters or search term.
//                 </p>
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaChevronUp, FaSearch } from "react-icons/fa";
import { RootState } from "@/store";
import { fetchProducts } from "@/store/actions/products";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";


type ProductsType = {
  itemNumber: string;
  type: string;
  model: string;
  brand: string;
  size: string;
  productImgURL?: string | null;
  basePrice?: number;
  price: number;
  qtyAvailable?: number;
  inStock?: boolean;
};


// 👇 add this line at the very top of your file (outside component)
let hasFetchedProducts = false;


const Page: React.FC = () => {

   const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [onlyInStock, setOnlyInStock] = useState(false);
  // const [loading, setLoading] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(() => {
  try {
    // If this tab already fetched products, we don't show the overlay again.
    return !sessionStorage.getItem("productsFetched");
  } catch {
    // If sessionStorage is unavailable for any reason, default to true.
    return true;
  }
});

  const dispatch = useAppDispatch();
  const storeProducts = useAppSelector(
    (state: RootState) => state?.products?.productList
  );

  // Make a stable memoized products array (prevents lint warning)
  const products: ProductsType[] = useMemo(
    () => storeProducts ?? [],
    [storeProducts]
  );

//   const searchParams = useSearchParams();
//    const query = searchParams.get('size');

//   useEffect(() => {
//   const sizeParam = query ?? "";
//   if (sizeParam && !search) {
//     setSearch(sizeParam);
//     // optional: reset pagination to page 1 when arriving with a search
//     setCurrentPage(1);
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [query]); 

useEffect(() => {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const sizeParam = params.get("size") ?? "";
  if (sizeParam && !search) {
    setSearch(sizeParam);
    setCurrentPage(1);
  }
  // If you want to react to URL changes (popstate), add a listener:
  const onPop = () => {
    const p = new URLSearchParams(window.location.search);
    const s = p.get("size") ?? "";
    if (s !== search) setSearch(s);
  };
  window.addEventListener("popstate", onPop);
  return () => window.removeEventListener("popstate", onPop);
}, []); // you can add `search` in deps if you prefer different behavior



  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

//   useEffect(() => {
//   let mounted = true;
//   setLoading(true);

//   // dispatch returns a promise — awaiting it ensures we hide the loader when done.
//   // We intentionally don't use `unwrap()` to avoid changing error handling
//   // in your current store logic — we simply catch and ignore here (optionally log).
//   dispatch(fetchProducts())
//     .catch((err) => {
//       // optional: console.error("Failed to fetch products:", err);
//     })
//     .finally(() => {
//       if (mounted) setLoading(false);
//     });

//   return () => {
//     mounted = false;
//   };
// }, [dispatch]);

useEffect(() => {
  let mounted = true;

  // Show loading only on first time visit
  if (!hasFetchedProducts) {
    setLoading(true);
  }

  dispatch(fetchProducts())
    .catch((err) => {
      // optional: console.error("Failed to fetch products:", err);
    })
    .finally(() => {
      if (mounted && !hasFetchedProducts) {
        setLoading(false);
        hasFetchedProducts = true; // ✅ mark as fetched so next time won't show loader
      }
    });

  return () => {
    mounted = false;
  };
}, [dispatch]);



  // derive brand list from memoized products
  const ALL_BRANDS = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );

 
  const toggleBrand = (brand: string) =>
    setSelectedBrands((s) =>
      s.includes(brand) ? s.filter((b) => b !== brand) : [...s, brand]
    );

  // removed unused `toggleSize` (was causing eslint unused var warning)
  // if you plan to re-enable the Sizes UI, re-add a toggleSize like above.

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((product) => {
      if (onlyInStock && !product.inStock) return false;
      if (selectedBrands.length && !selectedBrands.includes(product.brand))
        return false;
      if (selectedSizes.length && !selectedSizes.includes(product.size))
        return false;
      if (!q) return true;
      return (
        product.type.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        (product.size && product.size.toLowerCase().includes(q))
      );
    });
  }, [products, search, selectedBrands, selectedSizes, onlyInStock]);

  // ---------- Pagination (client-side) ----------
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9); // default items per page

  // Reset page to 1 when filters/search change so user won't land on an empty page
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedBrands.join(","), selectedSizes.join(","), onlyInStock]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // clamp currentPage if totalPages shrinks
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage, pageSize]);

  const goToPage = (n: number) => {
    const page = Math.min(Math.max(1, n), totalPages);
    setCurrentPage(page);
    // optionally scroll to top of list:
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to render simple page buttons (shows neighbors)
  const getPageNumbers = () => {

    const pages: number[] = [];
    const maxButtons = 7; // how many page numbers to show
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    // show first, last, and sliding window around current
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);
    if (start === 1) end = Math.min(totalPages, maxButtons);
    if (end === totalPages) start = Math.max(1, totalPages - maxButtons + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  // ---------- JSX ----------
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20">

      {/* Loading overlay (visible while loading) */}
{loading && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm"
    aria-hidden={!loading}
    aria-busy={loading}
  >
    <div className="flex flex-col items-center gap-3">
      {/* simple spinner */}
      <svg
        className="h-12 w-12 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div className="text-sm text-gray-700">Loading products…</div>
    </div>
  </div>
)}


      <div className="container mx-auto px-6 lg:px-14">
        {/* Header: search + toggle sidebar on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 w-full md:w-1/2 bg-white rounded-lg shadow-sm px-3 py-2 border border-gray-100">
            <FaSearch className="text-gray-400" />
            <input
              type="search"
              placeholder="Search tires, brands, sizes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-sm text-gray-800 bg-transparent"
              aria-label="Search inventory"
            />
          </div>

          <div className="flex items-center gap-3 justify-between md:justify-end">
            <button
              onClick={() => setShowSidebar((s) => !s)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#2d1070] text-white hover:opacity-95 text-sm"
              aria-expanded={showSidebar}
            >
              {showSidebar ? <FaChevronUp /> : <FaChevronDown />}
              <span>{showSidebar ? "Hide Filters" : "Show Filters"}</span>
            </button>

            <label className="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="rounded"
              />
              <span>In stock only</span>
            </label>
          </div>
        </div>

        {/* Main grid: sidebar + products */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - on large screens show as col-span-3, products col-span-9 */}
          <aside
            className={`lg:col-span-3 bg-white rounded-2xl border p-6 shadow-sm transition-all ${
              showSidebar ? "block" : "hidden"
            } lg:block`}
            aria-labelledby="filter-heading"
          >
            <h3
              id="filter-heading"
              className="text-lg font-semibold text-gray-900 mb-4"
            >
              Filters
            </h3>

            {/* Brands */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Brands</h4>
              <div className="grid grid-cols-2 gap-2">
                {ALL_BRANDS.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-4 h-4"
                    />
                    <span className="truncate">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            <div>
              <button
                className="w-full px-4 py-2 rounded-md bg-[#2d1070] text-white font-medium hover:opacity-95"
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedSizes([]);
                  setSearch("");
                  setOnlyInStock(false);
                }}
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <section className="lg:col-span-9">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-medium text-gray-800">{totalItems}</span>{" "}
                results
              </p>

              <div className="text-sm text-gray-600 hidden md:flex gap-4 items-center">
                <span className="px-3 py-1 bg-gray-100 rounded">
                  Sort: Popular
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded">
                  View: Grid
                </span>

                {/* Page size selector */}
                <label className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Per page</span>
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="ml-2 text-sm rounded border px-2 py-1 bg-white"
                  >
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    {/* <option value={50}>50</option> */}
                  </select>
                </label>
              </div>
            </div>

            {/* product details from api */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((p) => (
                <article
                  key={p.itemNumber}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  <div className="w-full h-48 py-3 overflow-hidden">
                    <Image
                      src={p.productImgURL ?? "/banner_bg.jpg"}
                      alt={p.itemNumber}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">
                          {p.brand}
                        </h4>
                        <p className="text-sm text-gray-500">{p.model}</p>

                        <p className="text-xs text-gray-500 mt-1">
                          Quantity Available:{" "}
                          <span className="font-medium text-gray-700">
                            {p.qtyAvailable ?? 0}
                          </span>
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          ${p.price}{" "}
                          <span className="text-sm font-normal text-gray-500">
                            / tire
                          </span>
                        </p>
                        <p
                          className={`text-xs ${
                            p.inStock ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {p.inStock ? "In stock" : "Out of stock"}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-3 flex-grow">
                      <b>Size:</b> {p.size}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2"></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {filteredProducts.length === 0 && (
              <div className="mt-8 bg-white rounded-2xl p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No results
                </h3>
                <p className="text-sm text-gray-600">
                  Try adjusting your filters or search term.
                </p>
              </div>
            )}

            {/* Pagination controls */}
            {filteredProducts.length > 0 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-medium text-gray-800">
                    {(currentPage - 1) * pageSize + 1}
                  </span>{" "}
                  -{" "}
                  <span className="font-medium text-gray-800">
                    {Math.min(currentPage * pageSize, totalItems)}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-gray-800">
                    {totalItems}
                  </span>
                </div>

                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded border bg-white text-sm disabled:opacity-50 cursor-pointer"
                  >
                    Prev
                  </button>

                  {getPageNumbers().map((p) => (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      className={`px-3 py-1 rounded border text-sm cursor-pointer ${
                        p === currentPage
                          ? "bg-[#2d1070] text-white"
                          : "bg-white"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded border bg-white text-sm disabled:opacity-50 cursor-pointer"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
