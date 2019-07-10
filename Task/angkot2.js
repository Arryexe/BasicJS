var jumlahAngkot = 10;
var angkotBeroprasi = 5;
var angkot = 1;

while (angkot <= angkotBeroprasi) {
	console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');

	angkot++;
}

for ( ;angkot <= jumlahAngkot; angkot ++) {
	console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
}