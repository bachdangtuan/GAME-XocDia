import React from 'react'

export default function CuaDatThem() {
  return (
    <div className='row text-center datCuaThem'>
      <div className="col-12">
        <h1>Cửa Đặt Thêm</h1>
        <table class="table text-white table-bordered">
          <thead>
            <tr>
       
                <td scope="row text-center w-100">
                  <img src="./img/chan0.png" alt="" />
                </td>
                <td scope="row text-center w-100">
                  <img src="./img/chan2.png" alt="" />
                </td>
                <td scope="row text-center w-100">
                  <img src="./img/le3.png" alt="" />
                </td>
                <td scope="row text-center w-100">
                  <img src="./img/le1.png" alt="" />
                </td>
                <td scope="row text-center w-100">
                  <img src="./img/chan4.png" alt="" />
                </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Tiếng 1</th>
              <th>Tiếng 2</th>
              <th>Tiếng 3</th>
              <th>Tiếng 4</th>
              <th>Tiếng 5</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
