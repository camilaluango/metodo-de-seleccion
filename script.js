function seleccionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        // encontrar el minimo en el array sin ordenar
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        //intercambiar el minimo con el primer elemento
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    } return arr;
} 
let num = [3,4,1,2];
console.log("array organizado: ",seleccionSort(num));