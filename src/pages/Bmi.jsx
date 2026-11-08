import { useState } from "react"
import bmiImg from "./../assets/bmi.png"
import { Link } from "react-router"
import Footer from "./../components/Footer"
import Swal from "sweetalert2"

export default function Bmi() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmiResult, setBmiResult] = useState("0.00")

  // ฟังก์ชันคำนวณ BMI
  const handleCalculate = (e) => {
    e.preventDefault()

    if (!weight || !height) {
      Swal.fire({
        icon: "warning",
        title: "แจ้งเตือน",
        text: "กรุณาป้อนน้ำหนักและส่วนสูงให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      })
      return
    }

    const w = parseFloat(weight)
    const h = parseFloat(height) / 100 // แปลงเป็นเมตร

    if (w <= 0 || h <= 0) {
      Swal.fire({
        icon: "error",
        title: "ข้อมูลไม่ถูกต้อง",
        text: "น้ำหนักและส่วนสูงต้องมากกว่า 0",
        confirmButtonText: "ตกลง",
      })
      return
    }

    const result = (w / (h * h)).toFixed(2)
    setBmiResult(result)
  }

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setWeight("")
    setHeight("")
    setBmiResult("0.00")
  }

  return (
    <>
      <div className="w-[90%] max-w-[480px] bg-white border border-gray-200 shadow-xl mt-16 rounded-3xl mx-auto flex flex-col items-center p-8 font-kanit">
        {/* แสดงชื่อการคำนวณภาษาอังกฤษ-ไทย */}
        <div className="flex flex-col items-center gap-1 mb-2">
          <h1 className="text-3xl font-extrabold text-gray-800">BMI Calculator</h1>
          <p className="text-gray-500 text-base">คำนวณ BMI</p>
        </div>

        {/* แสดงรูปภาพ */}
        <div className="my-4">
          <img src={bmiImg} alt="BMI Icon" className="w-28 object-contain" />
        </div>

        {/* ส่วนของ Form เพื่อให้ผู้ใช้ป้อนข้อมูล */}
        <form onSubmit={handleCalculate} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              step="any"
              placeholder="เช่น 65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              type="number"
              step="any"
              placeholder="เช่น 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* ปุ่มคำนวณและปุ่มรีเซ็ต */}
          <div className="flex flex-col gap-3 mt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg w-full transition cursor-pointer"
            >
              คำนวณ BMI
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2.5 rounded-lg w-full transition cursor-pointer"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* แสดงผลลัพธ์ */}
        <div className="w-full my-6 text-center">
          <p className="font-bold text-lg text-gray-800">
            ค่า BMI ที่คำนวณได้: <span className="text-blue-600">{bmiResult}</span>
          </p>
        </div>

        {/* แสดงลิงก์กลับไปหน้าหลัก */}
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
