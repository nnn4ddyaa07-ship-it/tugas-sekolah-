let nomor = 1;

document.getElementById("formSiswa").addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value.trim();
    const jurusan = document.getElementById("jurusan").value.trim();

    if (nama === "" || kelas === "" || jurusan === "") {
        alert("Data belum lengkap!");
        return;
    }

    const tabel = document.getElementById("tabelSiswa");

    const baris = document.createElement("tr");

    baris.innerHTML = `
        <td>${nomor}</td>
        <td>${nama}</td>
        <td>${kelas}</td>
        <td>${jurusan}</td>
        <td>
            <button onclick="hapusData(this)">Hapus</button>
        </td>
    `;

    tabel.appendChild(baris);

    nomor++;

    document.getElementById("formSiswa").reset();
});

function hapusData(button) {
    button.parentElement.parentElement.remove();
}