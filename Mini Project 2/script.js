function acak() {
  const angka = document.getElementById("angka").value;
  const gambar = document.getElementById("gambar");
  const images = [];

  for (i = 0; i < angka; i++) {
    const hasilRandom = Math.floor(Math.random() * 6) + 1;
    images.push(`<img src="gambar/${hasilRandom}.jpg" width="40%">`);
  }

  gambar.innerHTML = images.join("");
}
