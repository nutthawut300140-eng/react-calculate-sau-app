import bmr from "./../assets/bmr.png"
import { Link } from "react-router"
import Footer from "./../components/Footer"

export default function Bmr() {
  return (
    <>
      <div className="w-[65%] border-gray-200 shadow-xl mt-20 rounded-2xl mx-auto flex flex-col items-center p-10">
        {/*แสดงชื่อการคำนวณภาษาไทย-อังกฤษ */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <p className="font-kanit font-bold text-2xl text-purple-800">BMR Calculator</p>
          <p className="font-kanit text-lg text-gray-600">คำนวณ BMR</p>
        </div>

        {/*แสดงรูป*/}
        <div>
          <img src={bmr} alt="รูป bmr" className="w-25" />
        </div>

        {/*แสดงส่วนของ Form เพื่อให้ผู้ใช้ป้อนหรือเลือกหรือคลิก*/}
        <div className="w-full flex flex-col">
          <form className="flex flex-col gap-3">
            <label className="font-kanit font-bold">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input type="number" className="border border-gray-500 p-2 rounded-lg" />

            <label className="font-kanit font-bold">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input type="number" className="border border-gray-500 p-2 rounded-lg" />

            <label className="font-kanit font-bold">ป้อนอายุ (ปี)</label>
            <input type="number" className="border border-gray-500 p-2 rounded-lg" />

            <label className="font-kanit font-bold">เลือกเพศ</label>
            <div className="flex gap-4">
              <label><input type="radio" name="gender" /> ชาย</label>
              <label><input type="radio" name="gender" /> หญิง</label>
            </div>
            <div className="flex mt-5 gap-5">
              <button type="button" className="bg-purple-800 text-white p-2 rounded-lg w-full font-kanit cursor-pointer">
                คำนวณ
              </button>
              <button type="button" className="bg-red-500 text-white p-2 rounded-lg w-full font-kanit cursor-pointer">
                ยกเลิก
              </button>
            </div>
          </form>
        </div>

        {/*แสดงผลลัพธ์*/}
        <div className="w-full mt-5 flex gap-5 justify-center">
          <p className="font-kanit font-bold text-lg text-purple-800">0.00</p>
        </div>

        {/*แสดงลิงค์กลับไปหน้าหลัก*/}
        <Link to="/" className="w-full mt-5 p-3 bg-gray-300 text-center rounded-lg font-kanit font-bold">กลับไปหน้าหลัก</Link>
      </div>

      <Footer />
    </>
  )
}
