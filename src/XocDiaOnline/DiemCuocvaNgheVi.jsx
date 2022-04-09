import React from 'react'
import NgheVi from './NgheVi'

export default function DiemCuocvaNgheVi() {
  return (
    <div className='row'>
      <div className="col-6">
        <h1 className='text-center'>Điểm cược</h1>
        <h3>Điểm ban đầu</h3>
      </div>
      <div className="col-6">
        <h1 className='text-center'>Nghe Vị</h1>
          <NgheVi></NgheVi>
      </div>
    </div>
  )
}
