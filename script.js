function getDOB() {
    // Get the values from the input field
    const dobInput = document.getElementById('inputDob').value;


    // Check if date is  provided
    if (!dobInput) {
        alert('Please enter you Date of Birth.');
        return;
    }

    // Convert input value to Date object
   const dob = new Date(dobInput);
   
   // Getting current date in mm/dd/yyyy format
   const date = new Date();
   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();
   let cDate = `${month}/${day}/${year}`;
   // Convert current date value to Date object
   const currentDate = new Date(cDate);
   //console.log(currentDate); // "11/29/2024"
    // Calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('currentAge').textContent = `Congratulation! Your are ${age} years old.`;
}