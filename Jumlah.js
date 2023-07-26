const jumlahInput = document.getElementById('addJumlahInput')

function plus() {
  if (jumlahInput.value === "") {
    jumlahInput.value = 1
  } else {
    jumlahInput.value++
  }
}

function minus() {
  if (jumlahInput.value != "") {
    jumlahInput.value--
  } else {
    console.log(false)
  }
}