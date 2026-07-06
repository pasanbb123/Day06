// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);
// console.log(customer1.getName());

// ---------------------------------------------

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20
                    
//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);

// DOM( Document Object Modle) Management---------

// document.write("<h1>hi</h1>");
// console.log(document.title);
// console.log(Document);

// let heading = document.getElementById("heading");
// console.log(heading);
// heading.innerText = "Kumara";


// let number = 0;

// function changeHeading() {
//     heading.innerText = "Kumara" + number;
//     number+=1;
//     console.log("clicked");
// }

// function increment() {
//     heading.innerText = "Kumara" + number;
//     number+=1;
// }

// function decrement(){
//     heading.innerText = "Kumara" + number;
//     number-=1;
// }

// function changeHeading(){
//     let inputText = document.getElementById("inputText");
//     let value = console.log(inputText.value);
//     let heading = document.getElementById("")
// }

// 

let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }

    customerList.push(customer);

    console.log(customerList);
      
}

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    tblCustomers.innerHTML+=`<tr>
            <td>Saman</td>
            <td>Walana</td>
            <td>15</td>
            <td>saman@email.com</td>
            <td>750000</td>
        </tr>`

    console.log(tblCustomers);
    
}

let x = 0;

function addNumber() {
    test.innerText = "ME" + x;
    x+=1;
    
}