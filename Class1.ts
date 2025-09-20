// console.log("Playwright practice");

// //let variablename : type = value

// let username : string= "Jayesh";
// let age1 : number= 3;
// let age2 : number= 4.22;
// let isloggedin : boolean = true;
// const sitename : string = "Indiapost";

// console.log (username,age1,age2,isloggedin,sitename);



// let sequence= new Array (10,20,30,40,50,60 );
// let sum = 0;
// for (let i = 0; i < sequence.length; i++) 
    
// {
//   sum = sum+sequence[i];
// }

// let average = sum / sequence.length;
// console.log("average:", average);

// console.log (sequence);

// const breads : string []=["milkbread", "naan", "kulcha", "pitaa", "brownbread"];

// for (const bread of breads)
// {
//   if(bread.length <=4) 
//   {  
//     console.log (`${bread}this bread is small`);
// } 
// else if  (bread.length<=6)
//   console.log (`${bread}this bread is medium`);
// else {
//   console.log (`${bread}this bread is long`)
// }
// }

// const teachers= [
//   {teachername : "Ajit", Stanadard : 7},
//   {teachername : "Sujit", Stanadard : 5},
//   {teachername : "Vijit", Stanadard : 6},
// ];

// console.log(teachers[0].teachername, teachers[0].Stanadard);
// console.log(teachers[1].teachername, teachers[1].Stanadard);
// console.log(teachers[2].teachername, teachers[2].Stanadard);


// const nums : number[]=[1,9,3,46,17,6,8,19];
// let even : number []=[];
// let odd : number []=[];
// let prime : number []=[];

// for(const num of nums) 
//   {
// if (num%2===0)

//   {
//     console.log(`${num} this is even`);
//     even.push(num);
//   }
//   else {
//     console.log(`${num} this is odd`);
//     odd.push(num);
//   }

//   let isprime=true;
//   if (num<=1)
//   {
//     isprime=false;
//   }

//   else {
//     for (let i=2; i<num; i++)
//     {
//       if (num%i==0)
//       {
//         isprime=false;
//         break;
//       }
//     }
//   }
//   if (isprime)
//   {
//     console.log(`${num} this is prime`);
//     prime.push(num);
//   }

//   console.log (odd,even,prime)
// }


// let i:number=1;

// while (i<=10)
// {
//   console.log(`number:${i}`);
//   i++;
// }

// let j:number=10;
// do
// {
// console.log(j)
// }
// while(j<=10);

//Fibonacci series
// 0 1 1 2 3 5 8 13
let n:number=10;
let a:number=0;
let b:number=1, next:number;
let i:number=1;

while (i<n)
{
  console.log(a);
  next=a+b;
  a=b;
  b=next;
  i++;
  console.log(next);
}

do {
  next=a+b;
  a=b;
  b=next;
  console.log(next);
  i++;

} while (i<n)


  let browser: string = "firefox";

  switch (browser) {
    
  }

