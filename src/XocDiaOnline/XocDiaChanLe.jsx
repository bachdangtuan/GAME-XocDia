import React from 'react'
import QuanCuoc from './QuanCuoc'

export default function XocDiaChanLe() {
  return (
    <div className="row text-center">
      <div className="col-3">
        <h1>Chẵn</h1>
      </div>
      <div className="col-6">
        <div className='batDia'>
          <img src="./img/dia.png" alt="" style={{
            width: '65%'
          }} />
          <QuanCuoc></QuanCuoc>
          <img src="./img/bat.png" alt="" style={{
            cursor:'pointer'
          }}/>
        </div>
      </div>
      <div className="col-3">
        <h1>Lẻ</h1>
      </div>
    </div>
  )
}
