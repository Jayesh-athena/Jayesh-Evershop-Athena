 //Exercise 2: Print the second fruit
  const fruits : string []=["apple", "bannana", "mango"];

  //console.log("second fruit is", fruits[1]); // using index
  console.log("second fruit is", fruits[fruits.length-2]);



  //Exercise 3: Create an array of 3 products pass it to a function that prints product names.

  const Assest= [
   {Assetname : "House", id : "T1-101", price :100000},
   {Assetname : "Car", id : "MH-6345", price :20000},
   {Assetname : "laptop", id :"L-305" , price :30000},
 ];

 console.log(Assest[0].Assetname, Assest[0].id, Assest[0].price);
 console.log(Assest[1].Assetname, Assest[1].id, Assest[1].price);
 console.log(Assest[2].Assetname, Assest[2].id, Assest[2].price);



//Exercise 4: Create an array of 3 products pass it to a function that prints product names.
const getAverage = (numbers: number[]): number => {
 
  let sum = 0;    // Step 1: Add numbers 
  for (let i = 0; i < numbers.length; i++) 
    {
    sum = sum+ numbers[i];
    }

  let average = sum / numbers.length;  // Step 2: Addition divded by total number 

  return average;  // Step 3: printing average
};

const values: number[] = [19, 22, 55, 75, 99, 102, 44];  // Step 4 : providing values
console.log(getAverage(values));     


// let sum = 0;
// for (let i = 0; i < sequence.length; i++) 
    
// {
//   sum = sum+sequence[i];
// }

// let average = sum / sequence.length;
// console.log("average:", average);

// console.log (sequence);


//Exercise 5 (Advanced) Store an array of login users (username & password) in const, and write a function that prints Testing login for <username>.

const loginuser= [
 {username : "Ajit",  password : "Test@123"},
 {username : "Sujit", password : "Test@456"},
 {username : "Vijit", password : "Test@789"},
];

const testLogin = (user: { username: string, password: string }) => {
console.log(`Testing login for ${user.username}`);
};

for (const user  of loginuser)
    {
testLogin(user);
};


// console.log(teachers[0].teachername, teachers[0].Stanadard);
// console.log(teachers[1].teachername, teachers[1].Stanadard);
// console.log(teachers[2].teachername, teachers[2].Stanadard);


















