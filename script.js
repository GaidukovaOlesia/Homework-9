debugger;
arr = [];
arrLength = parseInt(prompt("Please, enter length of new array!"));

for(let i = 0; i < arrLength; i++) {
    arr.push(prompt("Please, enter elements of array!").replaceAll(" ", ""));
    if(!arr[i]) {
        alert("Enter elements!")
    }
}
alert(`You create array ${arr}`);
console.log(arr);
for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr.length - 1; j++){
        if(arr[j] > arr[j+1]) {
           let value = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = value
        }
    }
}
console.log(arr);


newArr = arr.splice(2, 3);
alert(`We removed elements from the array from 2 to 4: ${newArr}`);
console.log(arr);