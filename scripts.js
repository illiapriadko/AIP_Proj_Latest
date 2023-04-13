const httpRequest = new XMLHttpRequest();

const contentBoxes = document.getElementsByClassName("ex-content");

const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");

const toggleOtherItem = (id) => {
    for (let box of contentBoxes) {
        if (box.id !== id) {
            box.classList.remove('show');
        }
    }
}

bt1.onclick = () => {
    const id = bt1.attributes["aria-controls"].value;
    toggleOtherItem(id);
};

bt2.onclick = () => {
    const id = bt2.attributes["aria-controls"].value;
    toggleOtherItem(id);
};

bt3.onclick = () => {
    const id = bt3.attributes["aria-controls"].value;
    toggleOtherItem(id);
};

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

// make sure page loads fully first
$(document).ready(function () {
    // define identifier for clicked button
    var $clickedButton = null;
    // select all .my-btn class elements and define click event
    $('.my-btn').click(function () {
        // index which button is pressed to later refer to in accessing the other set (header/footer)
        var index = $(this).index('.my-btn');
        var $buttonFooter = $('.my-btn-footer').eq(index);
        // if clicked button not used, retract to default width
        if ($clickedButton != null) {
            $clickedButton.removeClass('clicked');
            $clickedButton.animate({
                width: '-=50px'
            }, 100);
            var indexClicked = $clickedButton.index('.my-btn');
            $('.my-btn-footer').eq(indexClicked).removeClass('clicked');
            $('.my-btn-footer').eq(indexClicked).animate({
                width: '-=50px'
            }, 100);
        }
        // if clicked button is used, widen by 50 pixels
        if (!$(this).hasClass('clicked')) {
            $(this).addClass('clicked');
            $(this).animate({
                width: '+=50px'
            }, 100);
            $buttonFooter.addClass('clicked');
            $buttonFooter.animate({
                width: '+=50px'
            }, 100);
            $clickedButton = $(this);
        } else {
            $clickedButton = null;
        }
    });
});
