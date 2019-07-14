var jumlahAngkot = 10;
var angkotBeroprasi = 5;
var angkot = 1;

for ( ;angkot <= jumlahAngkot; angkot++) {
	if (angkot <= 6) {
		console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
	} else if (angkot === 8) {
		console.log('Angkot No. ' + angkot + ' sedang lembur');
	}
	 else {
		console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
	}
}