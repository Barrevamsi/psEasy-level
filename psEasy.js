// problem 1

// function add(a,b){
//     return a+b
// }
// console.log(add(10,20))

// 2nd problem

// function conSeconds(a){
//     return a*60;
// }
// console.log(conSeconds(5))

// 3rd problem

// function inc(num){
//     return num+1
// }
// console.log(inc(10));

// 4th problem

// function age(years){
//     return years*356
// }
// console.log(age(22))

// 5th problem

// function power(voltage,current){
//     console.log("the voltage is :"+voltage)
//     console.log("the current is " +current)
//     console.log("the power is "+(voltage*current))
// }
// power(15,35)

// 6th pronblem

// function str(a){
//     return "the string is"+" "+a
// }
// console.log(str(10))

// 7th problem

// function fun(a,b){
//     if(a==10||b==10||a+b==10){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(fun(-5,15))

// 8th problem

// function str(str1,str2){
//     console.log(str1)
//     console.log(str2)
//     console.log("both strings hase same charecters:")
//     if(str1.length==str2.length){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(str("vamsi","pavan"))

// 9th problem

// var a=(str)=> "hello "+str;
// console.log(a("vamsi"))

// 10th proble
// let arr=[5,5,5,5,5,5,5,5,5,5]
// function fn(){
//     console.log(`(${arr[0]}${arr[1]}${arr[2]})${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`)

// }
// fn()

// 11th problem
// var arr=["a", "ccc", "dddd", "bb"]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i].length < arr[j].length) {
//             let temp
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)
// 12th problem
// let a=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
// bigArr=[]
// for(i=0;i<a.length;i++){
//     big=a[i][0]
//     for(j=0;j<a[i].length;j++){
//         if(big<a[i][j+1]){
//             big=a[i][j+1]
//         }
//     }
//     bigArr.push(big)
// }
// console.log(bigArr)

// 13th problem
// var a=[10, 40, 30, 20, 50]
// big=a[0]
// for(i=0;i<a.length;i++){
//     if(a[i]<a[i+1]){
//         var b=big
//         big=a[i+1]
//     }
// }
// console.log(b)

//14th    
// var a=["The", "big", "cat","cat"]
// var b=[1, 0, 1, 0]
// emp=[]
// function fn(c){
//     for(i=0;i<a.length;i++){
//         if( !emp.includes(a[i])){
//             emp.push(a[i])
//         }
//     }
// }
// fn(a)
// console.log(emp)


//15th problem
// let a=[5,2,5,4,5,7,9]
// function fn(a){
//     b=[]
//     for(i of a){
//         count=0
//         for(j of a){
//             if(i==j){
//                 count++
//             }

//         }
//         if(count<2){
//             b.push(i)
//         }

//     }
//     console.log(b)
// }fn(a)

// 16th problem

// function fn(a,b){
//     count=0
//     for(i of b){
//         if(i==a){
//             count++
//         }
//     }
//     console.log(count)

// }
// fn("a","vamsi")

//17 problem
// function fn(a){
//     count=0
//     a.toLowerCase()
//     for(i of a){
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             count++

//         }
//     }
//     console.log(count)
// }
// fn("vamsi")

//18 problem
// var a="Happy Birthday"
// c=""
// for(i=0;i<a.length;i++){
//     var b=a.charCodeAt(i)
//     if(b<96){
//         d=a[i].toLowerCase()
//         c=c+d
//     }
//     else{
//         e=a[i].toUpperCase()
//         c=c+e
//     }
// }
// console.log(c)

//19 problem
// var n=5
// for(i=1;i<=n;i++){
//     fn(i)
// }
// function fn(a){
//     console.log(2*a)
// }

//20 problem
// var a=20
// function fn(b){
//     return typeof(b)
// }
// console.log(fn(a))

//21 problem
// var a=1
// var b=45
// var c=5
// a<b&b<c?console.log("c is greater"):b>c&&b>a?console.log("b is greater"):console.log("a is greater")

//22 problem factorial
// var n=5
// a=1
// for(i=1;i<=5;i++){
//     a=a*i
// }
// console.log(a)

//23 problem
// var a=[5,6,2,4,3,1]
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(a[j]>a[i]){
//            temp=a[i]
//             a[i]=a[j]
//             a[j]=temp        
//         }
//     }
// }
// console.log(a)
 
//24 patterns
// var n=5
// var a=""
// for (i=1;i<=n;i++){
//     a=a+i+" "
//     console.log(a)
// }

//25 
// var n=5
// var p=3
// var ans=1
// for(i=0;i<3;i++){
//     ans=ans*n
// }
// console.log(ans)

//26 prime or not
// var n=2
// if(n%2==0){
//     console.log(n,"not prime number")
// }
// else{
//     console.log("prime number")
// }

//27 problem
// num1=8
// num2=16
// var a=1
// while(true){
//     if(a%num1==0 && a%num2==0){
//         console.log(a)
//         break
//     }
//     a++
// }

//28 
// var a="A"
// console.log(a.charCodeAt(0))
// var b=65
// for(i=0;i<26;i++){
//     let d = String.fromCharCode(b);
//     console.log(d,b)
//     b++
// }

//29 problem
// var a=[5,6,1,9,4,150]
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }
// console.log(a)
// for (i=a[0];i<a[a.length-1];i++){
//     if(!a.includes(i)){
//         console.log("missing numbers are :",i)
//     }  
// }

//30 problem
// let b="i am vamsi"
// let a=b.toLowerCase()
// ovels=0
// consonents=0
// for(i of a){
//     if(i!=" "){
//     if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//         ovels ++
//     }
//     else{
//         consonents++
//     }
// }
// }
// console.log(ovels)
// console.log(consonents)

//31 qustion
// let b=[1,2,3,4,5,6,7,8,9]
// count=0
// for(i in b){
//     count++
// }
// console.log(count)

//32 qustion
// let num=125603;
// n=0
// while(num>0){
//     last=num%10
//     n=n*10+last
//     num=Math.floor(num/10)
// }
// console.log(n)


// 33 qustions
// let n=8
// let arr=[1,5,1,4,52,4,5,7,5,54,87,9,74,3,8,7,8,7]
// count=0
// for(i of arr){
//     if(i==n){
//         count++
//     }
// }
// console.log(count)

