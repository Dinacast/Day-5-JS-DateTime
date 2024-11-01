import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var tanggal = new Date();
console.log(tanggal);

var sekarang = Date.now();
console.log(sekarang);

var epoch_milisecond = new Date(1675669834119);

var date_daftarSBMPTN = new Date("Feb 6, 2023 2:50 AM");
console.log(date_daftarSBMPTN);
