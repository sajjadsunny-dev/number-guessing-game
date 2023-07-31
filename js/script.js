// variables for first page
let heading = document.querySelector(".heading");
let heading2 = document.querySelector(".heading2");
let sub_btn = document.querySelector(".sub_btn");

// variables for second page
let p1error = document.querySelector(".p1error");
let p1input = document.querySelector(".p1input");
let p1sub_btn = document.querySelector(".p1sub_btn");

// variables for third page
let p1_numinput = document.querySelector(".p1_numinput");
let p1_numsub_btn = document.querySelector(".p1_numsub_btn");
let p1_numerror = document.querySelector(".p1_numerror");

// variables for fourth page
let p2input = document.querySelector(".p2input");
let p2sub_btn = document.querySelector(".p2sub_btn");
let p2error = document.querySelector(".p2error");

// variables for fifth page
let p2_numinput = document.querySelector(".p2_numinput");
let p2_numsub_btn = document.querySelector(".p2_numsub_btn");
let p2_numerror = document.querySelector(".p2_numerror");
let p2_numP = document.querySelector(".p2_numP");
let p2_numchances = document.querySelector(".p2_numchances");

let rematch = document.querySelector(".rematch");

let count = 3;

sub_btn.addEventListener("click", function () {
    heading.innerHTML = "Player - 1 Name";
    heading2.style.display = "none";
    sub_btn.style.display = "none";
    p1input.style.display = "block";
    p1input.value = "";
    p1sub_btn.style.display = "block";
})

p1sub_btn.addEventListener("click", function () {
    if (p1input.value == "") {
        p1error.innerHTML = "Please enter Name";
        p1error.style.display = "block";
    } else {
        p1_numinput.value = "";
        p1error.style.display = "none";
        heading.style.textTransform = "uppercase";
        heading.innerHTML = p1input.value;
        p1input.style.display = "none";
        p1sub_btn.style.display = "none";
        p1_numinput.style.display = "block";
        p1_numsub_btn.style.display = "block";
    }
})

p1_numsub_btn.addEventListener("click", function () {
    if (p1_numinput.value > 10 || p1_numinput.value < 1) {
        p1_numerror.style.display = "block";
        p1_numerror.innerHTML = "Please Enter number between 1 to 10";
    } else {
        if (p1_numinput.value - 15) {
            p1_numerror.style.display = "none";
            heading.innerHTML = "Player - 2 Name";
            heading.style.textTransform = "capitalize";
            p1_numinput.style.display = "none";
            p1_numsub_btn.style.display = "none";
            p2input.style.display = "block";
            p2sub_btn.style.display = "block";
            p2input.value = "";
        } else {
            p1_numerror.style.display = "block";
            p1_numerror.innerHTML = "Please Enter Number";
        }
    }
})

p2sub_btn.addEventListener("click", function () {
    if (p2input.value == "") {
        p2error.innerHTML = "Please enter Name";
        p2error.style.display = "block";
    } else {
        p2_numinput.value = "";
        p2error.style.display = "none";
        p2error.style.display = "none";
        heading.innerHTML = p2input.value;
        heading.style.textTransform = "uppercase";
        p2input.style.display = "none";
        p2sub_btn.style.display = "none";
        p2_numinput.style.display = "block";
        p2_numsub_btn.style.display = "block";
        p2_numP.style.display = "block";
    }
})

p2_numsub_btn.addEventListener("click", function () {
    if (p2_numinput.value > 10 || p2_numinput.value < 1) {
        p2_numerror.style.display = "block";
        p2_numerror.innerHTML = "Please Enter number between 1 to 10";
    } else {
        if (p1_numinput.value == p2_numinput.value) {
            heading.innerHTML = `${p2input.value} wins`;
            heading.style.textTransform = "capitalize";
            p2_numP.style.display = "none"
            p2_numerror.style.display = "none";
            p2_numinput.style.display = "none";
            p2_numsub_btn.style.display = "none";
            rematch.style.display = "block";
        } else {
            count--
            p2_numchances.innerHTML = count;
            p2_numinput.value = "";
            p2_numerror.style.display = "block";
            p2_numerror.innerHTML = `Try again`;
            if (count == 0) {
                heading.innerHTML = `${p1input.value} Wins`;
                p2_numP.style.display = "none"
                p2_numerror.style.display = "none";
                p2_numinput.style.display = "none";
                p2_numsub_btn.style.display = "none";
                rematch.style.display = "block";
            }
        }
    }
})

rematch.addEventListener("click", function () {
    heading.innerHTML = "Welcome in Game";
    heading2.style.display = "block";
    sub_btn.style.display = "block";
    rematch.style.display = "none";
})