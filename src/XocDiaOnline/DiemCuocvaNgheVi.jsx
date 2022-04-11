import React from 'react'
import NgheVi from './NgheVi'

import { useSelector } from 'react-redux'

export default function DiemCuocvaNgheVi() {

  //Render điểm cược ban đầu
  const renderTongDiem = useSelector(state => state.XocDiaReducers.tongDiem)


  return (
    <div className='text-center'>
      <br />
      <h3 className='pb-3'>ĐIỂM: {renderTongDiem.toLocaleString()} VNĐ</h3>
      <div className='row'>
        <div className="col-12 pb-3">
          <h1 className='text-center'>Bảng Kết Quả</h1>
          <NgheVi></NgheVi>
        </div>
      </div>
    </div>

  )
}
