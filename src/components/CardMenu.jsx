import bmi from './../assets/bmi.png'

export default function CardMenu({showTitle, showPic}) {
  return (
<div className='border border-gray-400 p-5 rounded-2xl w-75 shaodow-xl flex flex-col items-center gap-3'>
{/*แสดงรูปภาพ*/}
<img src={showPic} alt={`รูป ${showTitle}`} className='w-30' />

{/*แสดงชื่อการคำนวณ */}
<p className='font-kanit text-xl font-bold text-red-500'>
  {showTitle}
</p>
{/*แสดงคำอธิบาย */}
<p className='font-charm text-sm'>
    {showDetail}
</p>
</div>
  )
}
