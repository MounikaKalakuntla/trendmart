import React from "react";

const Categories: React.FC = () => {
    return ( 
      <>
   
         <section className="bg-white py-8 w-full">
         <div className="max-w-6xl mx-auto px-6">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
           {/* <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 px-4"></div> */}
           <div className="flex flex-wrap gap-4">
             <button className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition border border-gray-200 shadow-sm">
               Clothing
             </button>
             <button className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition border border-gray-200 shadow-sm">
               Groceries
             </button>
             <button className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition border border-gray-200 shadow-sm">
               Gadgets
             </button>
             <button className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition border border-gray-200 shadow-sm">
               Women's
             </button>
           </div>
         </div>
       </section>
       </>
    );
};

export default Categories;