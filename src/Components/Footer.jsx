// import React from 'react'
// import { IoBagHandle } from "react-icons/io5";

// export default function Footer() {
//   return (
//     <div>
//         <footer class="bg-blue-900 text-white pt-12 pb-8">
//   <div class="container mx-auto px-4">
//     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//       <div class="space-y-4">
//         <div class="flex items-center">
//           <IoBagHandle />
//                           <h3>Mart</h3>

//         </div>
//         <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nihil itaque. Laboriosam saepe non ut, provident aspernatur necessitatibus laborum expedita explicabo iusto cum quos soluta ullam illum blanditiis quam cumque.</p>
//         <div class="flex space-x-4">

//         </div>
//       </div>

//       <div class="space-y-4">
//         <h3 class="text-lg font-semibold">About Us</h3>
//         <ul class="space-y-2">
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Careers</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Our Stores</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Our Cares</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy and Policy</a></li>
//         </ul>
//       </div>

//       <div class="space-y-4">
//         <h3 class="text-lg font-semibold">Customer Care</h3>
//         <ul class="space-y-2">
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Help Center</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">How to Buy</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Track Your Order</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Corporate & Bulk Purchasing</a></li>
//           <li><a href="#" class="text-gray-400 hover:text-white transition">Returns & refunds</a></li>
//         </ul>
//       </div>

//       <div>
//         <h3 >Contact Us</h3>
//         <address >
//           <p>Rayachoty,Annamayya(dist),AP,516269</p>
//           <p>Email: poojariprasad630@gmail.com</p>
//           <p class="mt-2">Email: poojariprasad630@gmail.com</p>
//           <p>Phone: +91 6302175923</p>
//         </address>
//       </div>
//     </div>


//   </div>
// </footer>
//     </div>
//   )
// }



import React from 'react';
import { IoBagHandle } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <IoBagHandle className="text-3xl" />
                            <h3 className="text-3xl font-bold">Mart</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nihil itaque. Laboriosam saepe non ut, provident aspernatur necessitatibus laborum expedita explicabo iusto cum quos soluta ullam illum blanditiis quam cumque.
                        </p>
                    </div>

                    {/* About Us */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">About Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Our Stores</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Our Cares</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy and Policy</a></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Customer Care</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">How to Buy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Track Your Order</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Corporate & Bulk Purchasing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Returns & refunds</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-2 ">
                        <h3 className="text-2xl font-bold ">Contact Us</h3>
                        <div className="text-gray-300 leading-relaxed">
                            <p>Rayachoty, Annamayya(dist), AP, 516269</p>
                            <p className="mt-2">Email: poojariprasad630@gmail.com</p>
                            <p className="mt-2">Phone: +91 6302175923</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
