const professional = document.querySelectorAll('#professional path');

console.log(professional);

for (let i = 0; i < professional.length; i++){
	console.log(`Letter ${i} is ${professional[i].getTotalLength()}`);
}