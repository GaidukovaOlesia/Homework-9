
arr = [];
arrLength = parseInt(prompt("Please, enter length of new array!"));
arrItem = prompt("Please, enter elements of array!").replaceAll(" ", "");
for(i = 0; i < arrLength; i++) {
    arr[i] = prompt("Please, enter elements of array!").replaceAll(" ", "");
    if(arr[i] === null) {
        alert("Enter elements!")
    } else if( arr[i] === " ") {
        alert("You must enter element!")
    }
}
alert(`You create array ${arr}`);
console.log(arr);

sortArr = arr.sort();
alert((`We have sorted the array in ascending order ${sortArr}`));
console.log(sortArr);

newArr = sortArr.splice(2, 3);
alert(`We removed elements from the array from 2 to 4: ${newArr}`);
console.log(sortArr);