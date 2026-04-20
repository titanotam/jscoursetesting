let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


let groc1, groc2, groc3;
function groceryTracker() {
    groc1 = parseFloat(document.getElementById('grocery1').value);
    groc2 = parseFloat(document.getElementById('grocery2').value);
    groc3 = parseFloat(document.getElementById('grocery3').value);
    let result = groc1 + groc2 + groc3;
    document.getElementById('grocery-result').innerText = `The total amount is: ${result}`;
}