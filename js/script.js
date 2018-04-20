function my () {
	var p = document.getElementById("ejemplo");

	var q = document.createElement("div");
	q.style.width = '150px';
	q.style.height = '150px';
	q.style.background = 'red';   

	p.appendChild(q);
}