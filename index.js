/*let beyondsBalance = {
    bank: 0,
    purse: 0
   }

let smallVoidBal = {
    uuid: '8755ff336fbf4d97a2aec9be5ced6a21',
    bank: 0,
    purse: 0,
    bank1: 0,
    purse1: 0
}
let patpatBal = {
    bank: 0,
    purse: 0,
    bank1: 0,
    purse1: 0
}
let defunkBal = {
    bank: 0,
    purse: 0,
    bank1: 0,
    purse1: 0
}
let logybearBal = {
    bank: 0,
    purse: 0,
    bank1: 0,
    purse1: 0
}
let masaonBal = {
    bank: 0,
    purse: 0,
    bank1: 0,
    purse1: 0
}
   let urlB = "https://api.slothpixel.me/api/skyblock/profile/Beyonds/Strawberry"
   
   async function beyonds(){
       const response = await fetch(urlB);
       const data = await response.json();

       let uuid = "0c45a191bfa746f5b1906c06734d140e"

       beyondsBalance.bank = data.banking.balance
       beyondsBalance.purse = data.members[uuid].coin_purse                
       console.log(beyondsBalance)
       
       document.getElementById("bal").innerHTML += beyondsBalance.bank + " " + beyondsBalance.purse
   }

   async function smallVoid(){
    const response = await fetch(urlS);
    const response2 = await fetch (urlS2)
    const data = await response.json();
    const data2 = await response.json();


    beyondsBalance.bank = data.banking.balance
    beyondsBalance.purse = data.members['0c45a191bfa746f5b1906c06734d140e'].coin_purse                
    console.log(beyondsBalance)
    
    document.getElementById("bal").innerHTML += beyondsBalance.bank + " " + beyondsBalance.purse
}


beyonds()*/