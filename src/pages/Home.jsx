import calculate from './../assets/calculate.png'
import CardMenu from './../components/CardMenu'
import bmi from './../assets/bmi.png'
import bmr from './../assets/bmr.png'
import car from './../assets/car.png'
import Footer from '../components/Footer'
import { Link } from 'react-router'


export default function Home() {

  return (
    <>
      {/*ส่วนแสดงรูปภาพ*/}
      <div className='flex justify-center mt-30'>
        <img src={calculate} alt="Calculate" className='w-30' />
      </div>

      {/* ส่วนแสดงขชื่อแอป */}
      <div className='flex flex-col items-center mt-8'>
        <p className='font-kanit text-3xl font-bold text-blue-700'>เครื่องมือคำนวณออนไลน์</p>
        <p className='font-itim text-xl text-blue-500'>เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง</p>
      </div>

      {/* ส่วนของแสดงการ์ดเมนูที่สร้างไว้ */}
      <div className='flex justify-center mt-15 gap-5'>
        <Link to="/bmi">
          <CardMenu showTitle="BMI (ดัชนีมวลกาย)" showPic={bmi} showDetail="คำนวนค่าน้ำหนักของคุณว่าเหมาะสมหรือไม่" />
        </Link>
        <Link to="/bmr">
          <CardMenu showTitle="BMR (อัตราการเผาผลาญ)" showPic={bmr} showDetail="คำนวนอัตราการเผาผลาญที่ร่างกายต้องการ" />
        </Link>
        <Link to="/car">
          <CardMenu showTitle="การผ่อนชำระรถยนต์" showPic={car} showDetail="คำนวนการผ่อนชำระรถยนต์ต่อเดือน" />
        </Link>
      </div>

      {/* ส่วนท้าย Footer */}
      <Footer />
    </>
  )
}
