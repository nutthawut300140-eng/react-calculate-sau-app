import { useState } from "react"
import bmr from "./../assets/bmr.png"
import { Link } from "react-router"
import Footer from "./../components/Footer"
import Swal from "sweetalert2"

export default function Bmr() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("male")
  const [bmrResult, setBmrResult] = useState("0.00")

  // ฟังก์ชันคำนวณ BMR
  const handleCalculate = (e) => {
    e.preventDefault()

    if (!weight || !height || !age) {
      Swal.fire({
        icon: "warning",
        title: "แจ้งเตือน",
        text: "กรุณาป้อนน้ำหนัก ส่วนสูง และอายุให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      })
      return
    }

    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseFloat(age)

    if (w <= 0 || h <= 0 || a <= 0) {
      Swal.fire({
        icon: "error",
        title: "ข้อมูลไม่ถูกต้อง",
        text: "ค่าน้ำหนัก ส่วนสูง และอายุต้องมากกว่า 0",
        confirmButtonText: "ตกลง",
      })
      return
    }

    // คำนวณตามสูตร Mifflin-St Jeor
    const result =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161

    setBmrResult(
      result.toLocaleString("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    )
  }

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setWeight("")
    setHeight("")
    setAge("")
    setGender("male")
    setBmrResult("0.00")
  }

  return (
    <>
      <div className="w-[90%] max-w-[480px] bg-white border border-gray-200 shadow-xl mt-16 rounded-3xl mx-auto flex flex-col items-center p-8 font-kanit">
        {/* แสดงชื่อการคำนวณภาษาไทย-อังกฤษ */}
        <div className="flex flex-col items-center gap-1 mb-2">
          <h1 className="text-3xl font-extrabold text-purple-800">BMR Calculator</h1>
          <p className="text-gray-500 text-base">คำนวณ BMR</p>
        </div>

        {/* แสดงรูปภาพ */}
        <div className="my-4">
          <img src={bmr} alt="รูป bmr" className="w-28 object-contain" />
        </div>

        {/* ส่วนของ Form เพื่อให้ผู้ใช้ป้อนหรือเลือก */}
        <form onSubmit={handleCalculate} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              type="number"
              step="any"
              placeholder="เช่น 60"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">ป้อนอายุ (ปี)</label>
            <input
              type="number"
              placeholder="เช่น 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 p-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="font-bold text-gray-800 text-sm">เลือกเพศ</label>
            <div className="flex gap-6 text-sm font-medium text-gray-700">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="accent-purple-700"
                />
                ชาย
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="accent-purple-700"
                />
                หญิง
              </label>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2.5 rounded-lg w-1/2 transition cursor-pointer"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-lg w-1/2 transition cursor-pointer"
            >
              ยกเลิก
            </button>
          </div>
        </form>

        {/* แสดงผลลัพธ์ */}
        <div className="w-full my-6 text-center">
          <p className="font-bold text-lg text-purple-800">
            ค่า BMR ที่คำนวณได้: {bmrResult} แคลอรี่
          </p>
        </div>

        {/* แสดงลิงค์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className="w-full py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-center rounded-lg font-bold transition block"
        >
          กลับไปหน้าหลัก
        </Link>
      </div>

      <Footer />
    </>
  )
}
