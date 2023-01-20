import React from 'react';
import { useSelector } from 'react-redux';


export default function QuanCuoc() {
  const QuanCuocXocDia = useSelector(state => state.XocDiaReducers.mangXocDia)

  return (
    <div className='quanCuoc'>

        <img src={QuanCuocXocDia[0].hinhAnh} alt="chan2" />
    </div>
  )
}
