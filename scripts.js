const httpRequest = new XMLHttpRequest();

function loadDoc(page) {
    httpRequest.onload = function () {
        document.getElementById("content").innerHTML = this.responseText;
    }
    if (page == 1) {
        httpRequest.open("GET", "./Pages/Proj1/index.html", true);
        httpRequest.send();
    }
    if (page == 2) {
        httpRequest.open("GET", "./Pages/Proj2/index.html", true);
        httpRequest.send();
    }
    if (page == 3) {
        httpRequest.open("GET", "./Pages/Proj41/index.html", true);
        httpRequest.send();
    }
    if (page == 4) {
        httpRequest.open("GET", "./Pages/index.html", true);
        httpRequest.send();
    }
}

function showpopup() {
    // Define the form to be reffered to in the future loop
    var myForm = document.getElementById("myForm");
    // Initialise and get values from user input of the form to store in variables
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    // Initialise variable and provide if-statements to populate it with either or neither value
    var sex = "Not selected";
    if (document.getElementById("male").checked == true) {
        sex = document.getElementById("male").value;
    }
    if (document.getElementById("female").checked == true) {
        sex = document.getElementById("female").value;
    }
    // Initialise variable and provide a for-loop to look for checked checkboxes
    var hobbies = "";
    var i;
    for (i = 0; i < myForm.hobby.length; i++) {
        if (myForm.hobby[i].checked == true) {
            // Concatenate found checkbox to the string of "hobbies"
            hobbies += myForm.hobby[i].value + " ";
        }
    }
    // Show popup with gathered info
    alert(`Form submission:\n\nName: ${fname} ${lname}\nAge: ${age}\nSex: ${sex}\nHobbies: ${hobbies}`);

}

        /* Generate and print initial list of numbers */
        function generateArray() {
            let arr = [];
            for (let i = 0; i < 1000; i++) {
            arr.push(Math.floor(Math.random() * 100) + 1);
            }
            document.getElementById("originalArray").innerHTML =
            "Original Array: " + arr.join(", ");
            return arr;
    }
        /* Merge two arrays function */
        function merge(lArray, rArray) {
            let sortedArr = [];
            while (lArray.length && rArray.length) {
            if (lArray[0] <= rArray[0]) {
                sortedArr.push(lArray[0]);
                lArray = lArray.slice(1);
            } else {
                sortedArr.push(rArray[0]);
                rArray = rArray.slice(1);
            }
            }
            while (lArray.length) sortedArr.push(lArray.shift());
            while (rArray.length) sortedArr.push(rArray.shift());
            return sortedArr;
        }
        /* Merge-sort algorithm function */
        function mergeSort(arr) {
            if (arr.length <= 1) {
            return arr;
            } 
            else {
            let mid = Math.floor(arr.length / 2);
            let lArray = arr.slice(0, mid);
            let rArray = arr.slice(mid, arr.length);
            return merge(mergeSort(lArray), mergeSort(rArray));
            }
        }
        
        /* Quick-sort algorithm function */
        function quickSort(arr) {
            if (arr.length <= 1) {
            return arr;
            } else {
            let pivotIndex = Math.floor(arr.length / 2);
            let pivot = arr.splice(pivotIndex, 1)[0];
            let lArray = [];
            let rArray = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < pivot) {
                lArray.push(arr[i]);
                } else {
                rArray.push(arr[i]);
                }
            }
            return quickSort(lArray).concat([pivot], quickSort(rArray));
            }
        }
        /* Action for when the button is pressed */
        function execute() {
            var tick = Date.now();
            let arr = generateArray();
            var tock = Date.now();
            document.getElementById("measure0").innerHTML = `Execution Time: ${tock - tick} ms`;
            let sorterMerge = mergeSort(arr);
            var tick = Date.now();
            document.getElementById("measure1").innerHTML = `Execution Time: ${tick - tock} ms`;
            let sortedQuick = quickSort(arr);
            var tock = Date.now();
            document.getElementById("measure2").innerHTML = `Execution Time: ${tock - tick} ms`;
            document.getElementById("sortedMerge").innerHTML =
            "Sorted Array (Merge Sort): " + sorterMerge.join(", ");
            document.getElementById("sortedQuick").innerHTML =
            "Sorted Array (Quick Sort): " + sortedQuick.join(", ");
    }
