function calculator (a: number, b: number , operator: string) : number | string{
  switch (operator){
    case "add" :
      return a + b;
     
    case "sub" :
      return a - b;
      
    case "multiply":
      return a * b;
      
    case "divide":
      {
       if (b !==0) {
        return a /b
       }
      else {
        throw new Error ("cannot be devidby 0");
      }
      }  
      default:
        return "invalid input";
  }
}
console.log(calculator(8, 0,"add"));
console.log(calculator(8, 0, "sub"));
console.log(calculator(8, 0, "multiply"));
//console.log(calculator(8, 0, "divide"));


