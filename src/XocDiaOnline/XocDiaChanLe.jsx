import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import QuanCuoc from './QuanCuoc'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import async from "async";


export default function XocDiaChanLe() {
    const dispatch = useDispatch();
    const select = useSelector(state => state.XocDiaReducers.mangKetQua)
    console.log('select', select)
    useEffect(() => {
        if (select[0]) {
            toastr.options = {
                positionClass: 'toast-top-full-width',
                hideDuration: 3000,
                timeOut: 1000
            };
            toastr.warning(`
        <div style="padding-left: 100px">
        <h1 class="text-dark">Thắng được + ${select?.tienThang }</h1>
        </div>
      `)
            toastr.success(`
        <div style="padding-left: 100px">
        <h1 class="text-dark">${select[0]?.ten }</h1>
        <img style=' width: 180px; height: 120px' src="${select[0]?.hinhAnh}">
        </div>
      `);
        }
    }, [select]);
    return (
        <div className="row text-center container m-auto">
            <div className="col-3">
                <button className='btn btn-dark' id='moBat' style={{
                    margin: 'auto',
                    display: 'none',
                    margin: '50%'
                }} onClick={async () => {
                    document.getElementById('moBat').style.display = 'none';
                    document.getElementById('bat').classList.add('hieuUngmoBat');
                    document.getElementById('upBat').style.display = 'block';
                    document.getElementById('bat').style.display = 'none';
                    dispatch({
                        type: 'XOC_DIA'
                    })
                }
                }>
                    <h1>Mở Bát</h1>
                </button>
            </div>
            <div className="col-6">
                <div className='batDia'>
                    <img src="./img/dia.png" alt="" style={{
                        width: '65%'
                    }}/>
                    <QuanCuoc></QuanCuoc>
                    <img src="./img/bat.png" className='image' id='bat' alt="" style={{
                        cursor: 'pointer'
                    }} onClick={() => {
                        document.getElementById('moBat').style.display = 'block';
                    }}/>
                </div>
            </div>
            <div className="col-3" id='upBat'>
                <button className='btn btn-dark' onClick={() => {
                    document.getElementById('bat').style.display = 'block';
                    document.getElementById('upBat').style.display = 'none';
                }} style={{
                    margin: 'auto',
                    margin: '50%'
                }}>
                    <h1>Úp Bát</h1>
                </button>
            </div>
        </div>
    )
}
