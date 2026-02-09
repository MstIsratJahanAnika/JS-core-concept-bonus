const student = {
    isName: 'Sakib',
    id: 24260,
    address: '24/11 abahoni street,uttara-1216',
    isMarried: false,
    movies:[
        {movie: 'no.1', release: 2014}, 
        {movie: 'varanasi', release: 2025}
    ],
    friends: ['lipa', 'raju', 'samar', 'ipshita', 'piyali'],

    //a function 
    act: function(){
        console.log('acting like sakib khan');
    },

    car: {
        carModel: 'Tesla',
        price: 5000000,
        production: 2023,

        manufacturer: {   //obj inside another obj 
            company: 'Tesla',
            ceo: 'Elon Musk',
            countryOrigin: 'USA'
        }
    }
}

//print the total object
console.log(student);

//printing each key with value 
console.log(student['car']);
console.log(student.friends[2]);
console.log(student['car']['manufacturer']['countryOrigin']);

console.log(student['movies']);

console.log(student.act);  //[Function: act]
//calling the function
student.act();