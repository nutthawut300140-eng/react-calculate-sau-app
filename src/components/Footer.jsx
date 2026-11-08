import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-col items-center mt-20">
            <p className="font-itim text-gray-600">
                © 2026 React App. All rights reserved.
            </p>
            <p className="font-itim text-gray-600">
                Created by 6952D10014 NUTTHAWAT DEV SOFT.
            </p>



            <div className="flex justify-center gap-5">
                <FaFacebook className="text-blue-700" />
            </div>

        </div>
    )
}