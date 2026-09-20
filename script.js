let nomor = 1;

function tambahData() {

    let nama = document.getElementById("nama").value;
    let nis = document.getElementById("nis").value;
    let kelas = document.getElementById("kelas").value;
    let jurusan = document.getElementById("jurusan").value;

    // Mengecek data
    if (nama === "" || nis === "" || kelas === "" || jurusan === "") {
        alert("Data siswa harus diisi lengkap!");
        return;
    }

    // Membuat baris baru
    let tabel = document.getElementById("tabelSiswa");

    let baris = tabel.insertRow();

    baris.insertCell(0).innerHTML = nomor;
    baris.insertCell(1).innerHTML = nama;
    baris.insertCell(2).innerHTML = nis;
    baris.insertCell(3).innerHTML = kelas;
    baris.insertCell(4).innerHTML = jurusan;

    let aksi = baris.insertCell(5);

    aksi.innerHTML =
        '<button class="hapus" onclick="hapusData(this)">Hapus</button>';

    nomor++;

    // Mengosongkan form
    document.getElementById("nama").value = "";
    document.getElementById("nis").value = "";
    document.getElementById("kelas").value = "";
    document.getElementById("jurusan").value = "";

    alert("Data siswa berhasil ditambahkan!");
}

function hapusData(tombol) {

    let baris = tombol.parentElement.parentElement;

    baris.remove();

    alert("Data siswa berhasil dihapus!");
}