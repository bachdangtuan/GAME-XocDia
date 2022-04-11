import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function CuaDatThem() {

  let dispatch = useDispatch();
  const [first, setfirst] = useState({
    diemCuoc:''
  })

  const danhSachCuoc = useSelector(state => state.XocDiaReducers.mangChonVi)
  const diemCuocXocDia = useSelector(state => state.XocDiaReducers.tongDiem)

  // render Danh Sách Quân Vị
  let renderDanhSachCuoc = danhSachCuoc.map((qc, index) => {
    return <td scope="row text-center w-100" key={index}>
      <img src={qc.hinhAnh} alt="" />
      <h5>{qc.ten}</h5>
    </td>
  })

  //HandleChange
  let handleChange = (event) => {
      let diemCuocXD = event.target.value
    if (diemCuocXD <= diemCuocXocDia ) {
      
      setfirst({
        diemCuoc: event.target.value
      });
    }else{
      alert('Số nhập phải nhỏ hơn tổng điểm đang có !')
    }
  }

  //HandleSubmit
  let handleSubmit = (qc) => {
    let diemCuoc = first.diemCuoc;
    let submitQC = {...qc, diemCuoc}
    
    dispatch({
      type: 'DAT_CUOC_XOC_DIA',
      submitQC
    })

  }

  //Render Điểm Cược
  let renderDiemCuoc = danhSachCuoc.map((qc, index) => {
    return <th key={index}>
      <h2 style={{
        fontSize: '35px'
      }}>{qc.diemCuoc.toLocaleString()}</h2>
        <input type="number" onChange={handleChange} placeholder='Nhập Tiền Vào Đây' />
        <button className="btn btn-danger" onClick={() =>handleSubmit(qc)}>Xác Nhận</button>
    </th>
  })


  return (
    <div className='row text-center datCuaThem'>
      <div className="col-12">
        <h1 className='p-2'>CHỌN VỊ</h1>
        <table class="table text-white table-bordered">
          <thead>
            <tr>
              {renderDanhSachCuoc}
            </tr>
          </thead>
          <tbody className='bg-dark'>
            <tr>
              {renderDiemCuoc}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
