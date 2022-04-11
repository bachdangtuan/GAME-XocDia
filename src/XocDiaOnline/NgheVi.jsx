import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function NgheVi() {

  return (
    <div className='row ngheVi'>
      <div className="col-12">
        <table class="table text-white table-bordered">
          <thead>
            <tr>
              <th>Lần 1</th>
              <th>Lần 2</th>
              <th>Lần 3</th>
              <th>Lần 4</th>
              <th>Lần 5</th>
              <th>Lần 6</th>
              <th>Lần 7</th>
              <th>Lần 8</th>
              <th>Lần 9</th>
              <th>Lần 10</th>
            </tr>
            
          </thead>
          <tbody>
            <tr>
              <td scope="row text-center w-100">
                <img src="./img/chan2.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/chan4.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/le3.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/le3.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/le3.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/chan2.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/chan4.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/le3.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/le3.png" alt="" />
              </td>
              <td scope="row text-center w-100">
                <img src="./img/le3.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
