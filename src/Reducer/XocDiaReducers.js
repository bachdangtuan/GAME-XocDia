const initialState = {
  mangChonVi: [
    { ma: 'chan0', hinhAnh: './img/chan0.png', diemCuoc: 0, ten: 'Tứ Tử Đen' },
    { ma: 'chan2', hinhAnh: './img/chan2.png', diemCuoc: 0, ten: 'Nguyên Vị' },
    { ma: 'chan4', hinhAnh: './img/chan4.png', diemCuoc: 0, ten: 'Tứ Trắng' },
    { ma: 'le1', hinhAnh: './img/le1.png', diemCuoc: 0, ten: 'Bạch Thủ Lẻ Đen' },
    { ma: 'le3', hinhAnh: './img/le3.png', diemCuoc: 0, ten: 'Bạch Thủ Lẻ Trắng' },
  ],
  tongDiem: 100000,

  mangXocDia: [
    { ma: 'chan2', hinhAnh: './img/chan2.png' },
  ],
  mangKetQua: [

  ]

}

export const XocDiaReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC_XOC_DIA': {
      let mangChonViUpdate = [...state.mangChonVi]
      console.log('action', action);

      // Tìm index trong mảng update vị trí index trùng với action index
      let indexQC = mangChonViUpdate.findIndex(qc =>
        qc.ma === action.submitQC.ma
      )
      console.log('indexQC', indexQC);
      // console.log('indexQC', Number(action.submitQC.diemCuoc));
      if (indexQC !== -1) {
        if (state.tongDiem > 0) {
          state.tongDiem -= Number(action.submitQC.diemCuoc);
          mangChonViUpdate[indexQC].diemCuoc += Number(action.submitQC.diemCuoc);
        }
        // if (action.tangGiam === false && action.qc.diemCuoc > 0) {
        //   state.tongDiem += 50000;
        //   mangChonViUpdate[indexQC].diemCuoc -= 50000;
        // }
        state.mangChonVi = mangChonViUpdate;
        return { ...state }
      }
    }
    case 'XOC_DIA': {
      console.log('test', action);
      const mangXocDiaNgauNhien = [];
      let soNgauNhien = Math.floor(Math.random() * 5);
      const XucXacNgauNhien = state.mangChonVi[soNgauNhien];

      mangXocDiaNgauNhien.push(XucXacNgauNhien)

      //Render lại màn hình
      state.mangXocDia = mangXocDiaNgauNhien
      console.log('mangXocDiaNgauNhien', mangXocDiaNgauNhien);

      // Xử lý tính tiền cược
      mangXocDiaNgauNhien.forEach((sp, index) => {
        let indexXD = state.mangChonVi.findIndex(qc => qc.ma === sp.ma)

        if (indexXD !== -1) {
          state.tongDiem += state.mangChonVi[indexXD].diemCuoc
        
        }
        // Xử lý hoàn tiền mỗi lượt chơi
        state.mangChonVi.forEach((sp, index) => {
          let indexXXNH = mangXocDiaNgauNhien.findIndex((xucxac, index2) => {
            return xucxac.ma === sp.ma
          })
          if (indexXXNH !== -1) {
            state.tongDiem += sp.diemCuoc
          }
        })
        // Làm mới lượt đặt
        state.mangChonVi = state.mangChonVi.map((sp2, index) => {
          return { ...sp2, diemCuoc: 0 }
        })
      })
    }
    default:
      return { ...state }
  }
}
