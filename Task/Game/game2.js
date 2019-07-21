alert('Permainan Menebak Angka dari 0 - 10 \n\n Anda hanya mempunyai 3 kesempatan dan apabila lebih dari 3 kesalahan maka anda akan gagal');

// Random Number 0-10
var number = Math.floor(Math.random() * 11);
console.log(number);

// Rules
var chance = true;
var time = 3;
var hasil = '';

// Condition 1
while (chance) {
	if (time > 0) {
		// Player Make A Choice for 3 Time's
		var player = parseInt(prompt('Masukkan Angka (1 - 10)'));

		// Condition 2
		if (player == number) {
			hasil = 'Benar';
			time = 0;
			chance = false;
		} else if (player < number) {
			time--;
			hasil = 'Rendah';
		} else if (player > number) {
			time--;
			hasil = 'Tinggi';
		}

		// Condition 3
		if (hasil == 'Rendah') {
			alert('Angka Terlalu ' + hasil + '\n\n Kesempatan anda tersisa ' + time);
		} else if (hasil == 'Tinggi') {
			alert('Angka Terlalu ' + hasil + '\n\n Kesempatan anda tersisa ' + time);
		}

	} else {
		chance = false;
	}
}

// Show Results

alert((hasil == 'Benar') ? 'SELAMAT ! Angka yang anda pilih benar (' + number + ')' : 'Kesempatan Anda habis... \n\n Anda Kalah !!');

alert('Terima Kasih Sudah Mencoba Game Tebak Angka !');