# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 5
   var f = function (a, b, c) {
      b = a;
      console.log(b); //5
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
```

```javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // nan
"2" * "3" // nan
4 + 5 + "px" //9px
"$" + 4 + 5 //$9
"4" - 2 // 2
"4px" - 2 // nan
7 / 0 //infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2 (devuelve el ultimo valor por que el prrimero es true, y ambos deben ser true)
2 && 5// 5 (devuelve el ultimo valor por que el prrimero es true, y ambos deben ser true)
5 || 0 ()// devuelve 5 pq es el primer valor que tiende a true
0 || 5// devuelve 5 pq es el primer valor que tiende a true
[3]+[3]-[10] // undefined
3>2>1 //false 
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}
/*retorna undefined  y 2 porque la variable esta inicializada luedo de la ejecucion del console.log, previo a eso en la creation phase esta declarada pero su valor es undefined, caso contrario es con el console.log de la function foo(), recordemos que en la creation phase las funciones pasan completas al language environment por lo que el console.log de esa funcion simplemente esta pidiendo la ejecicion  de la misma, y como ya esta completa se ejecuta*/
test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);// no retorna nada pq el argumento de la funcion es false, por lo tanto el if no se ejecuta. devuelve undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```
