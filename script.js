document.getElementById('calculate').addEventListener('click', function() {
    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    
    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert('Please fill in all fields with valid values');
        return;
    }

    if (startDate >= endDate) {
        alert('End date must be after start date');
        return;
    }

    // Calculate time period in months
    const timeInMs = endDate - startDate;
    const timeInMonths = Math.round(timeInMs / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
    
    // Calculate interest and amount
    const interest = (principal * rate * timeInMonths) / 100;
    const amount = principal + interest;
    
    // Format dates for display
    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Calculation Results:</h3>
        <p><span>Principal Amount:</span> ₹${principal.toFixed(2)}</p>
        <p><span>Rate of Interest:</span> ${rate.toFixed(2)}%</p>
        <p><span>Time Period:</span> ${timeInMonths}(${formattedStartDate} to ${formattedEndDate})</p>
        <p><span>Simple Interest:</span> ₹${interest.toFixed(2)}</p>
        <p><span>Total Amount:</span> ₹${amount.toFixed(2)}</p>
    `;
    resultDiv.style.display = 'block';
});
