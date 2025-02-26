
// let names:string="ABC";
// let age:number=100;
// console.log(age)
// console.log(names)

// function M1(num:number){
  
//     if(num%2==0){
//         console.log("Even Number")
//     }
//     else{
//         console.log("Odd Number")
//     }
// }

// M1(35)

// const obj ={
//     roll:101,
//     name:"AAA",
//     contact:12345
// }

// obj.roll=102
// console.log(obj.roll)
// console.log(obj.name)
// console.log(obj.contact)

// // document.write(obj.name)  given Error RefrenceError document not 

// let g=50;
// console.log(g)

// let h="55"
// console.log(typeof(h))

// let u:string='sssss';
// console.log(u)

// // let e=true;
// //  e="stingss";
// //  console.log(Math.round(e))

// //  let a:any=true;
// //  a="types";
// //  console.log(Math.round(a))

// let i:unknown=1;
// i="stings"
// i=1000
// console.log(i)


// const circle:string[]=["A", "B", "C"]
// console.log(circle[0])

// const shap:any[]=[1,"A","1000"]
// console.log(shap[1])

// const Tap:unknown[]=[1,"A","1000"]
// console.log(Tap[1])
// Tap.push("k")
// console.log(Tap[3])

// const kap:readonly string[]=["Apple"]
// console.log(kap[0])

// let arrs:readonly[string , number ,string ,any]; // that is called a tuple arrays
// arrs=["a" ,100,"k" ,"o"]
// console.log(arrs[2])
// console.log(arrs[3])
// //arrs.push("Add push")
// console.log(arrs)

// const numb:[number , number]=[100 ,200]
// console.log(numb)

// enum datas{
//     first,
//     second,
//     third
// }

// console.log(datas.first)
// console.log(datas.second)
// console.log(datas.third)

//=================//========================


//Aliases 

// type caryear = number
// type carmodel = string
// type cartype = string
// type car ={
//     year:caryear,
//     model:carmodel,
//     type:cartype
// }

// const caryear :caryear=2000
// const carmodel :carmodel="Omni"
// const cartype :cartype ="carolla"
// const car ={
//     year:caryear,
//     model:carmodel,
//     type:cartype
// }

// const caryear :number=2000
// const carmodel :string="Omni"
// const cartype :string="carolla"

// console.log(caryear)
// console.log(carmodel)
// console.log(cartype)

// interface shapes{
//     contact:number,
//     age:number,
//     names:string
// }

// const Shapes:shapes = { 
//     contact:102365,
//     age:1520,
//     names:"asdf"
// }
// console.log(Shapes)

// interface Home{
//     hight:number,
//     width:number
// }
// // interface Room extends Home{
// //     Color:string
// // }

// // const room:Room ={
// //     hight:100,
// //     width:200,
// //     Color:"red"
// // }
// const home:Home={
//     hight:4,
//     width:5
// }
// console.log(home)
// // console.log(room)

// function book(code :string |Number){
//    console.log("Function in book")
//    console.log(code)
// }
// book("book")
// book(100)


// function getTime():number{
//  return new Date().getTime()
// }
// getTime()

// function hello():void {
//   console.log("Helo function")
// }
// hello()

// let x :unknown ="hello"
// console.log((x as string).length)

//  class tell{
//  protected names:string
  
//    constructor(names:string){
//     this.names=names
//      console.log(names)
//    }
// }


//  const Tell =new tell("ddd")
// //  console.log(Tell.names)

// class person {
//   public constructor(private age:number){
//       this.age=age
//       console.log(age)
//    }

//    public getAge(age:number):number{
//     return this.age
//    }

// }

// const Person= new person(100)
// console.log(Person.getAge)

// i


// interface graph{
//     name:string,
//     age:number
// }

// class graphics implements graph{
//     name: string
//     age: number
//     constructor(name:string , age:number){
//         this.name="aaaa";
//         this.age=100;
//     }

// }
// const obj=new graphics("a" , 100)
// console.log(obj.name , obj.age)

// let out = <string>("")
// console.log(out)

// function identity(age:number):void{
//      console.log(age)
// }

// identity(200)

// function idea<Type>(arg:number[]):number[]{
//     console.log(arg.length)
//      return arg ;
// }
// console.log(idea([10 ,20]))


// const promise=new Promise((resolve , reject)=>{
//   let value=110;
//   if(value%2==0){
//     // console.log("resolve value")
//     return resolve("Promise resolved..") 
//   }
//   else{
//     // console.log("rejected..")
//     return reject("Promise is rejected")
//   }
 

// }).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


// async function keyword(value?: number){
//    try{
//     const value= await promise  
//     console.log("Promise resolve")
//    }
//    catch(err){
//      console.log("Promise rejected")
//    }
// }

// keyword()


// interface A{
//     name:string  
// }
// interface B{
//     age:number
// }
// interface C extends B ,A{
    
// }

// class ABC implements C{
//     constructor(name:string,age:number){
//       this.name=name;
//       this.age=age  
//     }
//     age: number
//     name: string
// }
// const abc= new ABC("ABC" ,10)
// console.log(abc.name)
// console.log(abc.age)




interface IStudent { 
    id:number,
    name:string,
    course: ICourse[],
    address: IAddress,
    result: IResult[],
}
 
interface ICourse {
   id:number,
   Cname:string
}
 
interface IAddress { 
   state : string,
   city: string,
   pincode: number
   
}

interface IResult {
   id: number,
   year: number,
   subjects: ISubjects[]

}

interface ISubjects {
   subject: string,
   code: number,
   mark: number
}

const student: IStudent = {
    id: 101,
    name: "savri",
    course : [{
      id:101,
      Cname:"Math"
    }],
    address: {
      state:"M.P",
      city:"indore",
      pincode:452101
    },
    result:[{
      id:100,
      year:2000,
      subjects:[{
         subject: "Bio",
         code: 101,
         mark: 100
      }]
    }]
}