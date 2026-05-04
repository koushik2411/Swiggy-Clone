import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full bg-gray-100 flex flex-col items-center">

      <div className=" py-5 max-w-230 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-items-center gap-5 border-b">

        <div className=" w-full pb-5 flex flex-col gap-1 col-span-2 md:col-span-3 lg:col-span-1">
            <img
                src="https://res.cloudinary.com/dcfjexbss/image/upload/v1777822201/swiggy_logo_white_yvjxtd.avif"
                className=" h-14 w-fit bg-orange-600 p-2 rounded-2xl"
            />

            <p className=" text-gray-500">© 2026 Swiggy Limited</p>
        </div>

        <div>
            <ul>
                <h1 className=" font-semibold text-gray-800">Company</h1>
                <li><Link>About Us</Link></li>
                <li><Link>Swiggy Corporate</Link></li>
                <li><Link>Careers</Link></li>
                <li><Link>Team</Link></li>
                <li><Link>Swiggy One</Link></li>
                <li><Link>Swiggy Instamart</Link></li>
                <li><Link>Swiggy Dineout</Link></li>
                <li><Link>Minis</Link></li>
                <li><Link>Pyng</Link></li>
            </ul>
        </div>

        <div className=" flex flex-col gap-5">
            <ul>
                <h1 className=" font-semibold text-gray-800">Contact us</h1>
                <li><Link>Help & Support</Link></li>
                <li><Link>Partner With Us</Link></li>
                <li><Link>Ride With Us</Link></li>
            </ul>

            <ul>
                <h1 className=" font-semibold text-gray-800">Legal</h1>
                <li><Link>Terms & Conditions</Link></li>
                <li><Link>Cookie Policy</Link></li>
                <li><Link>Privacy Policy</Link></li>
            </ul>
        </div>

        <div>
            <ul>
                <h1 className=" font-semibold text-gray-800">Available in:</h1>
                <li><Link>Bangalore</Link></li>
                <li><Link>Gurgaon</Link></li>
                <li><Link>Hyderabad</Link></li>
                <li><Link>Delhi</Link></li>
                <li><Link>Mumbai</Link></li>
                <li><Link>Pune</Link></li>
            </ul>
        </div>

        <div className=" flex flex-col gap-5">
            <ul>
                <h1 className=" font-semibold text-gray-800">Life at Swiggy</h1>
                <li><Link>Explore With Swiggy</Link></li>
                <li><Link>Swiggy News</Link></li>
                <li><Link>Snackables</Link></li>
            </ul>

            <ul>
                <h1 className=" font-semibold text-gray-800">Social Links</h1>
                <div className=" flex gap-3 text-gray-700">
                    <a href="">
                        <FaLinkedin/>
                    </a>
                    <a href="">
                        <FaInstagram/>
                    </a>
                    <a href="">
                        <FaFacebookF/>
                    </a>
                    <a href="">
                        <FaPinterest/>
                    </a>
                    <a href="">
                        <FaTwitter/>
                    </a>
                </div>
            </ul>
        </div>

      </div>

      <div className=" py-4 flex flex-col lg:flex-row items-center justify-center gap-5">

        <p className=" font-semibold text-xs md:text-lg">
            For better experience, download the Swiggy app now
        </p>

        <div className=" flex gap-3 items-center">
            
            <Link>
                <button className=" p-1 flex items-center gap-1 bg-linear-to-b from-gray-900 to-black text-gray-50 rounded-lg cursor-pointer">
                    <IoLogoApple className=" text-3xl"/>
                    <p>
                        <p className=" text-[8px] text-left">Download on the</p>
                        <p className=" text-sm font-semibold">App Store</p>
                    </p>
                </button>
            </Link>

            <Link>
                <button className=" p-1 flex items-center gap-1 bg-linear-to-b from-gray-900 to-black text-gray-50 rounded-lg cursor-pointer">
                    <IoLogoGooglePlaystore className=" text-2xl"/>
                    <p>
                        <p className=" text-[8px] text-left">GET IT ON</p>
                        <p className=" text-sm font-semibold">Google Play</p>
                    </p>
                </button>
            </Link>
        </div>

      </div>

    </div>
  );
}

export default Footer;
