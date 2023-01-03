const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");
result.textContent = [];
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mul = document.querySelector(".mul");
const divide = document.querySelector(".divide");
const ans = document.querySelector(".ans");
const del = document.querySelector(".del");
let arr1 = [];
let i;

one.addEventListener("click", function () {
  result.textContent = result.textContent + one.textContent;
  console.log(result.textContent);
});

two.addEventListener("click", function () {
  result.textContent = result.textContent + two.textContent;
  console.log(result.textContent);
});

three.addEventListener("click", function () {
  result.textContent = result.textContent + three.textContent;
  console.log(result.textContent);
});

four.addEventListener("click", function () {
  result.textContent = result.textContent + four.textContent;
  console.log(result.textContent);
});

five.addEventListener("click", function () {
  result.textContent = result.textContent + five.textContent;
  console.log(result.textContent);
});

six.addEventListener("click", function () {
  result.textContent = result.textContent + six.textContent;
  console.log(result.textContent);
});

seven.addEventListener("click", function () {
  result.textContent = result.textContent + seven.textContent;
  console.log(result.textContent);
});

eight.addEventListener("click", function () {
  result.textContent = result.textContent + eight.textContent;
  console.log(result.textContent);
});

nine.addEventListener("click", function () {
  result.textContent = result.textContent + nine.textContent;
  console.log(result.textContent);
});

zero.addEventListener("click", function () {
  result.textContent = result.textContent + zero.textContent;
  console.log(result.textContent);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "1") result.textContent = result.textContent + e.key;
  if (e.key == "2") result.textContent = result.textContent + e.key;
  if (e.key == "3") result.textContent = result.textContent + e.key;
  if (e.key == "4") result.textContent = result.textContent + e.key;
  if (e.key == "5") result.textContent = result.textContent + e.key;
  if (e.key == "6") result.textContent = result.textContent + e.key;
  if (e.key == "7") result.textContent = result.textContent + e.key;
  if (e.key == "8") result.textContent = result.textContent + e.key;
  if (e.key == "9") result.textContent = result.textContent + e.key;
  if (e.key == "0") result.textContent = result.textContent + e.key;
});

document.addEventListener("keydown", function (e) {
  if (e.key == "+") {
    result.textContent = result.textContent + "+";
    console.log(result.textContent.length);

    let indexofsecondlast = result.textContent.length - 2;
    //searching for index of op:
    for (i = indexofsecondlast; i > 0; i--) {
      if (
        result.textContent[i] == "+" ||
        result.textContent[i] == "-" ||
        result.textContent[i] == "*" ||
        result.textContent[i] == "/"
      ) {
        break;
      }
    }
    if (i == 0) {
      arr1.push(result.textContent.slice(0, result.textContent.length - 1));
    } else {
      arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
    }
    arr1.push("+");

    console.log(arr1);
  }
  if (e.key == "-") {
    result.textContent = result.textContent + "-";
    console.log(result.textContent.length);

    let indexofsecondlast = result.textContent.length - 2;
    //searching for index of op:
    for (i = indexofsecondlast; i > 0; i--) {
      if (
        result.textContent[i] == "-" ||
        result.textContent[i] == "+" ||
        result.textContent[i] == "*" ||
        result.textContent[i] == "/"
      ) {
        break;
      }
    }
    if (i == 0) {
      arr1.push(result.textContent.slice(0, result.textContent.length - 1));
    } else {
      arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
    }
    arr1.push("-");

    console.log(arr1);
  }

  if (e.key == "*") {
    result.textContent = result.textContent + "*";
    console.log(result.textContent.length);

    let indexofsecondlast = result.textContent.length - 2;
    //searching for index of op:
    for (i = indexofsecondlast; i > 0; i--) {
      if (
        result.textContent[i] == "-" ||
        result.textContent[i] == "+" ||
        result.textContent[i] == "*" ||
        result.textContent[i] == "/"
      ) {
        break;
      }
    }
    if (i == 0) {
      arr1.push(result.textContent.slice(0, result.textContent.length - 1));
    } else {
      arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
    }
    arr1.push("*");

    console.log(arr1);
  }

  if (e.key == "/") {
    result.textContent = result.textContent + "/";
    console.log(result.textContent.length);

    let indexofsecondlast = result.textContent.length - 2;
    //searching for index of op:
    for (i = indexofsecondlast; i > 0; i--) {
      if (
        result.textContent[i] == "-" ||
        result.textContent[i] == "+" ||
        result.textContent[i] == "*" ||
        result.textContent[i] == "/"
      ) {
        break;
      }
    }
    if (i == 0) {
      arr1.push(result.textContent.slice(0, result.textContent.length - 1));
    } else {
      arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
    }
    arr1.push("/");

    console.log(arr1);
  }

  if (e.key == "Enter") {
    let indexoflast = result.textContent.length - 1;
    for (i = indexoflast; i > 0; i--) {
      if (
        result.textContent[i] == "+" ||
        result.textContent[i] == "-" ||
        result.textContent[i] == "*" ||
        result.textContent[i] == "/"
      ) {
        break;
      }
    }

    if (i == 0) {
      arr1.push(result.textContent.slice(0, result.textContent.length));
    } else {
      arr1.push(result.textContent.slice(i + 1, result.textContent.length));
    }

    console.log(arr1);

    let count = 0;

    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] == "/" || arr1[i] == "*") count++;
    }

    function compute(arrlength) {
      for (i = 0; i < arrlength; i++) {
        if (arr1[i] == "/" || arr1[i] == "*") {
          if (arr1[i] == "/") {
            temp = Number(arr1[i - 1]) / Number(arr1[i + 1]);
            arr1.splice(i - 1, 3);
            arr1.splice(i - 1, 0, temp);
            break;
          }
          if (arr1[i] == "*") {
            temp = Number(arr1[i - 1]) * Number(arr1[i + 1]);
            arr1.splice(i - 1, 3);
            arr1.splice(i - 1, 0, temp);
            break;
          }
        }
      }

      return arr1;
    }

    for (let j = 0; j < count; j++) {
      arr1 = compute(arr1.length);
      console.log(arr1);
    }

    count = 0;

    for (let k = 0; k < arr1.length; k++) {
      if (arr1[k] == "+" || arr1[k] == "-") count++;
    }

    function compute1(arrlength) {
      for (let h = 0; h < arrlength; h++) {
        if (arr1[h] == "+" || arr1[h] == "-") {
          if (arr1[h] == "+") {
            temp = Number(arr1[h - 1]) + Number(arr1[h + 1]);
            arr1.splice(h - 1, 3);
            arr1.splice(h - 1, 0, temp);
            break;
          }
          if (arr1[h] == "-") {
            temp = Number(arr1[h - 1]) - Number(arr1[h + 1]);
            arr1.splice(h - 1, 3);
            arr1.splice(h - 1, 0, temp);
            break;
          }
        }
      }
      return arr1;
    }
    for (let m = 0; m < count; m++) {
      arr1 = compute1(arr1.length);
      console.log(arr1);
    }

    result.textContent = arr1;
    arr1.pop();
  }
});

plus.addEventListener("click", function () {
  result.textContent = result.textContent + "+";
  console.log(result.textContent.length);

  let indexofsecondlast = result.textContent.length - 2;
  //searching for index of op:
  for (i = indexofsecondlast; i > 0; i--) {
    if (
      result.textContent[i] == "+" ||
      result.textContent[i] == "-" ||
      result.textContent[i] == "*" ||
      result.textContent[i] == "/"
    ) {
      break;
    }
  }
  if (i == 0) {
    arr1.push(result.textContent.slice(0, result.textContent.length - 1));
  } else {
    arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
  }
  arr1.push("+");

  console.log(arr1);
});

minus.addEventListener("click", function () {
  result.textContent = result.textContent + "-";
  console.log(result.textContent.length);

  let indexofsecondlast = result.textContent.length - 2;
  //searching for index of op:
  for (i = indexofsecondlast; i > 0; i--) {
    if (
      result.textContent[i] == "-" ||
      result.textContent[i] == "+" ||
      result.textContent[i] == "*" ||
      result.textContent[i] == "/"
    ) {
      break;
    }
  }
  if (i == 0) {
    arr1.push(result.textContent.slice(0, result.textContent.length - 1));
  } else {
    arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
  }
  arr1.push("-");

  console.log(arr1);
});

mul.addEventListener("click", function () {
  result.textContent = result.textContent + "*";
  console.log(result.textContent.length);

  let indexofsecondlast = result.textContent.length - 2;
  //searching for index of op:
  for (i = indexofsecondlast; i > 0; i--) {
    if (
      result.textContent[i] == "-" ||
      result.textContent[i] == "+" ||
      result.textContent[i] == "*" ||
      result.textContent[i] == "/"
    ) {
      break;
    }
  }
  if (i == 0) {
    arr1.push(result.textContent.slice(0, result.textContent.length - 1));
  } else {
    arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
  }
  arr1.push("*");

  console.log(arr1);
});

divide.addEventListener("click", function () {
  result.textContent = result.textContent + "/";
  console.log(result.textContent.length);

  let indexofsecondlast = result.textContent.length - 2;
  //searching for index of op:
  for (i = indexofsecondlast; i > 0; i--) {
    if (
      result.textContent[i] == "-" ||
      result.textContent[i] == "+" ||
      result.textContent[i] == "*" ||
      result.textContent[i] == "/"
    ) {
      break;
    }
  }
  if (i == 0) {
    arr1.push(result.textContent.slice(0, result.textContent.length - 1));
  } else {
    arr1.push(result.textContent.slice(i + 1, result.textContent.length - 1));
  }
  arr1.push("/");

  console.log(arr1);
});

ans.addEventListener("click", function () {
  let indexoflast = result.textContent.length - 1;
  for (i = indexoflast; i > 0; i--) {
    if (
      result.textContent[i] == "+" ||
      result.textContent[i] == "-" ||
      result.textContent[i] == "*" ||
      result.textContent[i] == "/"
    ) {
      break;
    }
  }

  if (i == 0) {
    arr1.push(result.textContent.slice(0, result.textContent.length));
  } else {
    arr1.push(result.textContent.slice(i + 1, result.textContent.length));
  }

  console.log(arr1);

  let count = 0;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] == "/" || arr1[i] == "*") count++;
  }

  function compute(arrlength) {
    for (i = 0; i < arrlength; i++) {
      if (arr1[i] == "/" || arr1[i] == "*") {
        if (arr1[i] == "/") {
          temp = Number(arr1[i - 1]) / Number(arr1[i + 1]);
          arr1.splice(i - 1, 3);
          arr1.splice(i - 1, 0, temp);
          break;
        }
        if (arr1[i] == "*") {
          temp = Number(arr1[i - 1]) * Number(arr1[i + 1]);
          arr1.splice(i - 1, 3);
          arr1.splice(i - 1, 0, temp);
          break;
        }
      }
    }

    return arr1;
  }

  for (let j = 0; j < count; j++) {
    arr1 = compute(arr1.length);
    console.log(arr1);
  }

  count = 0;

  for (let k = 0; k < arr1.length; k++) {
    if (arr1[k] == "+" || arr1[k] == "-") count++;
  }

  function compute1(arrlength) {
    for (let h = 0; h < arrlength; h++) {
      if (arr1[h] == "+" || arr1[h] == "-") {
        if (arr1[h] == "+") {
          temp = Number(arr1[h - 1]) + Number(arr1[h + 1]);
          arr1.splice(h - 1, 3);
          arr1.splice(h - 1, 0, temp);
          break;
        }
        if (arr1[h] == "-") {
          temp = Number(arr1[h - 1]) - Number(arr1[h + 1]);
          arr1.splice(h - 1, 3);
          arr1.splice(h - 1, 0, temp);
          break;
        }
      }
    }
    return arr1;
  }
  for (let m = 0; m < count; m++) {
    arr1 = compute1(arr1.length);
    console.log(arr1);
  }

  result.textContent = arr1;
  arr1.pop();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Backspace") {
    result.textContent = result.textContent.substring(
      0,
      result.textContent.length - 1
    );
  }
  if (e.key == "Delete") {
    result.textContent = [];
    arr1 = [];
  }
});

reset.addEventListener("click", function () {
  result.textContent = [];
  arr1 = [];
});

del.addEventListener("click", function () {
  result.textContent = result.textContent.substring(
    0,
    result.textContent.length - 1
  );
});
