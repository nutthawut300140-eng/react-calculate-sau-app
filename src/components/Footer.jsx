import { FaFacebook, FaLine, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center my-10 gap-3">
            {/* ส่วนแสดงไอคอน Social Media */}
            <div className="flex justify-center items-center gap-6 text-3xl">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
                    <FaFacebook />
                </a>
                <a href="https://line.me" target="_blank" rel="noreferrer" className="text-green-500 hover:scale-110 transition-transform">
                    <FaLine />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-600 hover:scale-110 transition-transform">
                    <FaInstagram />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:scale-110 transition-transform">
                    <FaGithub />
                </a>
            </div>

            {/* ส่วนแสดงข้อความลิขสิทธิ์ */}
            <p className="font-itim text-gray-600 text-center">
                © 2026 React App. All rights reserved.
            </p>
            <p className="font-itim text-gray-600 text-center">
                Created by 6952D10014 NUTTHAWAT DEV SOFT.
            </p>
        </footer>
    )
}