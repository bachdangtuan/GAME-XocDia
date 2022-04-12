import React from 'react'
import CuaDatThem from './CuaDatThem'
import DiemCuocvaNgheVi from './DiemCuocvaNgheVi'
import LuatChoi from './LuatChoi'
import XocDiaChanLe from './XocDiaChanLe'

export default function GameXocDia() {

  return (
    <div>
      <div className="text-center pt-5">
        <h1 className='pt-5'>XÓC ĐĨA XANH CHÍN</h1>
      </div>
      <DiemCuocvaNgheVi></DiemCuocvaNgheVi>
      <XocDiaChanLe></XocDiaChanLe>
      <CuaDatThem></CuaDatThem>
      <LuatChoi></LuatChoi>
    </div>


  )
}
