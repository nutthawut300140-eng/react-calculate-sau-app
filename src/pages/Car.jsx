import carImg from "./../assets/car.png"
import { Link } from "react-router"
import Footer from "./../components/Footer"

export default function Car() {
  return (
    <>
      <div className="w-[90%] max-w-[500px] bg-white border border-gray-200 shadow-xl mt-16 rounded-3xl mx-auto flex flex-col items-center p-8 font-kanit">
        {/* แสดงชื่อการคำนวณภาษาอังกฤษ-ไทย */}
        <div className="flex flex-col items-center gap-1 mb-2">
          <h1 className="text-3xl font-extrabold text-gray-800">Car Installment Calculator</h1>
          <p className="text-gray-500 text-base">คำนวณ Car Installment</p>
        </div>

        {/* แสดงรูปภาพ */}
        <div className="my-4">
          <img src={carImg} alt="Car Icon" className="w-32 object-contain" />
        </div>

        {/* ฟอร์มรับข้อมูล */}
        <form className="w-full flex flex-col gap-4">
          {/* ชื่อผู้คำนวณ */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ชื่อผู้คำนวณ</label>
            <input
              type="text"
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* ราคารถ (บาท) */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ราคารถ (บาท)</label>
            <input
              type="number"
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* ดอกเบี้ยต่อปี (%) */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ดอกเบี้ยต่อปี (%)</label>
            <input
              type="number"
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* เงินดาวน์ (%) */}
          <div className="flex flex-col gap-2 text-left">
            <label className="font-bold text-gray-800 text-sm">เงินดาวน์ (%)</label>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-700">
              {["15", "20", "25", "30", "35"].map((rate) => (
                <label key={rate} className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="downPayment"
                    value={rate}
                    defaultChecked={rate === "15"}
                    className="accent-blue-600"
                  />
                  <span>{rate}%</span>
                </label>
              ))}
            </div>
          </div>

          {/* จำนวนเดือนที่ผ่อน */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">จำนวนเดือนที่ผ่อน</label>
            <select
              defaultValue="24"
              className="border border-gray-300 p-2.5 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          {/* ปุ่มคำนวณ และปุ่มล้างข้อมูล (แบ่ง 50-50) */}
          <div className="flex gap-4 mt-2">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg w-1/2 transition cursor-pointer"
            >
              คำนวณ
            </button>
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2.5 rounded-lg w-1/2 transition cursor-pointer"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* แสดงผลลัพธ์ */}
        <div className="w-full my-6 text-center">
          <p className="font-bold text-lg text-gray-800">
            ผ่อนชำระต่อเดือน: <span className="text-blue-600">0.00</span> บาท
          </p>
        </div>

        {/* ลิงก์กลับหน้าหลัก */}
        <Link
          to="/"
          className="w-full py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-center rounded-lg font-bold transition block"
        >
          กลับหน้าหลัก
        </Link>
      </div>

      <Footer />
    </>
  )
}
