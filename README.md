# Selección de ordenamiento en JavaScript

Este proyecto implementa el algoritmo de selección de ordenamiento (`Selection Sort`) en JavaScript. Es un algoritmo simple pero eficiente para ordenar un arreglo de números.

## Descripción del Código

El código `seleccionSort` es una función que ordena un arreglo de números utilizando el algoritmo de selección de ordenamiento. A continuación, se presenta una descripción detallada del funcionamiento del algoritmo:

### Función seleccionSort

```javascript
function seleccionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // encontrar el minimo en el array sin ordenar
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // intercambiar el minimo con el primer elemento
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
````
### Descripción Paso a Paso

1. **Inicialización**: Se determina la longitud del arreglo `n`.
2. **Bucle Externo**: Se recorre el arreglo desde el primer elemento hasta el penúltimo.
   - Para cada posición `i`, se asume inicialmente que el mínimo está en la posición `i` (`minIndex = i`).
3. **Bucle Interno**: Se recorre el arreglo desde la posición `i+1` hasta el último elemento.
   - Si se encuentra un elemento menor que el valor en `minIndex`, se actualiza `minIndex` con la nueva posición del mínimo.
4. **Intercambio**: Se intercambia el valor mínimo encontrado con el valor en la posición `i`.
5. **Repetición**: Los pasos 2-4 se repiten hasta que todo el arreglo esté ordenado.
6. **Retorno**: Finalmente, se retorna el arreglo ordenado.

## Ejecución

Para ejecutar el código, simplemente utiliza cualquier entorno de ejecución de JavaScript, como Node.js o el navegador, y copia y pega el código proporcionado anteriormente.

## Conclusión

El algoritmo de selección de ordenamiento es una técnica eficiente para ordenar pequeños arreglos. Aunque su complejidad temporal es O(n^2), es fácil de entender y de implementar.

