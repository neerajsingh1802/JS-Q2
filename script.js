// 1.  WAP to find sum of first 5 natural numbers??
// let sum=0;
// let i=1;
// let abtakkasum=0;
 

// for(i=1;i<=5;i++){
//    abtakkasum=sum+i;
//    sum=abtakkasum;
//    console.log(abtakkasum)
// }
// alert(abtakkasum);

// 2.  WAP to find sum of first n-natural numbers??
// let sum=0;
// let i=1;
// let abtakkasum=0;
// let n=prompt("first n natural number");
 

// for(i=1;i<=n;i++){
//    abtakkasum=sum+i;
//    sum=abtakkasum;
//    console.log(abtakkasum)
// }
// alert(abtakkasum);

// 3.  WAP to find product of first 5 natural numbers??
// let prod=1;
// let i=1;
// let abtakkaprod=1;
 

// for(i=1;i<=5;i++){
//    abtakkaprod=prod*i;
//    prod=abtakkaprod;
//    console.log(abtakkaprod)
// }
// alert(abtakkaprod); 

// 4.  WAP to find product of first n-natural numbers??
// let prod=1;
// let i=1;
// let abtakkaprod=1;
// let n=prompt("first n natural number");
 

// for(i=1;i<=n;i++){
//    abtakkaprod=prod*i;
//    prod=abtakkaprod;
//    console.log(abtakkaprod)
// }
// alert(abtakkaprod); 

// 5.  WAP that will take input N(no. of days).

// O/P:- Print the day after these many days.


let N=prompt("it will take input N(no.of days");
let rem=N%7;

if(rem==0){
alert("sunday");
}
else if(rem==1){
   alert("Monday");
   }
   else if(rem==2){
      alert("Tuesday");
      }
      else if(rem==3){
         alert("Wednesday");
         }
         else if(rem==4){
            alert("Thursday");
            }
            else if(rem==5){
               alert("Friday");
               }
               else if(rem==6){
                  alert("saturday");
                  }
