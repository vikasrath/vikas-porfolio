


function generateSeatingPlan(studentUIDs, numClasses, rows = 8, cols = 6) {
    let seatingPlan = [];
    let studentIndex = 0;

    for (let i = 1; i <= numClasses; i++) {
        let classData = {
            className: `C${i}`,
            rows: rows,
            columns: cols,
            students: []
        };

        for (let r = 0; r < rows; r++) {
            let rowSeats = [];
            for (let c = 0; c < cols; c++) {
                if (studentIndex < studentUIDs.length) {
                    rowSeats.push(studentUIDs[studentIndex++]); 
                } else {
                    rowSeats.push(null); // Empty seat
                }
            }
            classData.students.push(rowSeats);
        }
        seatingPlan.push(classData);
    }

    return seatingPlan;
}


let studentUIDs = Array.from({length: 100}, (_, i) => 947540 + i); 

let numClasses = Math.ceil(studentUIDs.length / (6 * 8)); 

let seatingPlan = generateSeatingPlan(studentUIDs, numClasses);
console.log(seatingPlan);


