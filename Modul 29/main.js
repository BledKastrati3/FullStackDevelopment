var teams = ['barcelona','real madrid','liverpool','man city','arsenal','inter','juventus','milan','atletico','psg']

console.log(teams);
console.log(teams[3]);

var average_age = [10,20,30,40,50,60]

//array functions
teams.push('bayern');
console.log(teams);

teams.pop();
console.log(teams);

teams.unshift('sevilla');
console.log(teams);

teams.shift();
console.log(teams);

teams.splice(0,2,'lens');
console.log(teams);

console.log(Math.random()*18);
console.log(Math.floor(Math.random()*10))


//destrekturimi i arrays

var players = ['Yamal', 'Raphinha' , 'Pedri', 'Gavi', 'Ferran', 'Fermin', 'Garcia', 'Cubarsi'];
var [p1,p2,p3] = players
var [first,second,third ,,,others] = players

console.log(p1);
console.log(first);
console.log(third);
console.log(others)
