function generateTable() {
    let tableDiv = document.getElementById('table');
    let tableHTML = '<table>';
    tableHTML += '<tr><th>Multiplier</th><th>Result</th></tr>';
    
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>2 x ${i}</td><td>${2 * i}</td></tr>`;
    }
    
    tableHTML += '</table>';
    tableDiv.innerHTML = tableHTML;
}
