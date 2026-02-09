function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    //can be called like array
    console.log(arguments[3]);
    console.log(arguments[0]);
}

add(23, 12, 56, 3, 1);