let beyonds = [0, 0]
           

let small = {
    uuid: '8755ff336fbf4d97a2aec9be5ced6a21',
    bank: 0,
    purse: 0,
    bank2: 0,
    purse2: 0
}

let pat = {
    uuid: 'e52f09d1226247e78d6b728e17ff28ae',
    bank: 0,
    purse: 0,
    bank2: 0,
    purse2: 0
}

let defunk = {
    uuid: '3a6f21f8e25a4bb491757d65afbe6056',
    bank: 0,
    purse: 0,
    bank2: 0,
    purse2: 0
}

let logy = {
    uuid: '1578ebb294cd46249e9e9ab7db42e723',
    bank: 0,
    purse: 0,
    bank2: 0,
    purse2: 0
}

let mas = {
    uuid: '34b3fff2f8564396ad145e8ec2d9646a',
    bank: 0,
    purse: 0,
    bank2: 0,
    purse2: 0
}
let lastJoin

let accessURL = "https://api.slothpixel.me/api/skyblock/profile/"
async function getBalance(){

    //gets Beyonds Balance
    let urlB = 'https://api.slothpixel.me/api/skyblock/profile/Beyonds/Strawberry'
    const BeyondsResponse = await fetch(urlB)
    const BeyondsData = await BeyondsResponse.json();

    let uuid = "0c45a191bfa746f5b1906c06734d140e"

    beyonds[0] = new Intl.NumberFormat().format(BeyondsData.banking.balance)
    beyonds[1] = new Intl.NumberFormat().format(BeyondsData.members[uuid].coin_purse)  
    document.getElementById("Bbal").innerHTML +=( 
        "<h4 class = 'heading' >Strawberry:</h4>" +
        "Bank: $" + beyonds[0] + "<br>"
         + "Purse: $" + beyonds[1] +
         "<h4 class = 'heading'> Total: </h4>"
    )

    

    //get small void balance
        //profile 1
        let url2 = accessURL + "Small_Void/Zucchini"

        const response2 = await fetch(url2)
        const data2 = await response2.json()

        small.bank = new Intl.NumberFormat().format(data2.banking.balance)
        small.purse = new Intl.NumberFormat().format(data2.members[small.uuid].coin_purse)              

        document.getElementById("Sbal").innerHTML +=  document.getElementById("Sbal").innerHTML += (
            "<h4 class = 'heading' >Zucchini:</h4>" +
            "Bank: $" + small.bank + "<br>"
         +  "Purse: $" + small.purse 
        )
        //profile 2
        let url3 = accessURL + "Small_Void/Pomegranate"

        const response3 = await fetch(url3)
        const data3 = await response3.json()

        small.bank2 = new Intl.NumberFormat().format(data3.banking.balance)
        small.purse2 =  new Intl.NumberFormat().format(data3.members[small.uuid].coin_purse)              

        document.getElementById("Sbal").innerHTML += (
            "<h4 class = 'heading' >Pomegranate:</h4>" +
            "Bank: $" + small.bank2 + "<br>"
         +  "Purse: $" + small.purse2 
        )                    
    //get patpat2002 balance
        //profile 1
        let url4 = accessURL + "patpat2002/Blueberry"

        const response4 = await fetch(url4)
        const data4 = await response4.json()

        pat.bank = new Intl.NumberFormat().format(data4.banking.balance)
        pat.purse =  new Intl.NumberFormat().format(data4.members[pat.uuid].coin_purse)              

        document.getElementById("Pbal").innerHTML += (
            "<h4 class = 'heading' >Blueberry:</h4>" +
            "Bank: $" + pat.bank + "<br>"
         +  "Purse: $" + pat.purse 
        )
        //profile 2
        let url5 = accessURL + "patpat2002/Coconut"

        const response5 = await fetch(url5)
        const data5 = await response5.json()

        pat.bank2 = new Intl.NumberFormat().format(data5.banking.balance)
        pat.purse2 =  new Intl.NumberFormat().format(data5.members[pat.uuid].coin_purse)              

        document.getElementById("Pbal").innerHTML += (
            "<h4 class = 'heading' >Coconut:</h4>" +
            "Bank: $" + pat.bank2 + "<br>"
         +  "Purse: $" + pat.purse2
        )
        
       //get defunk balance
        //profile 1
        let url6 = accessURL + "defunk/Papaya"

        const response6 = await fetch(url6)
        const data6 = await response6.json()

        defunk.bank = new Intl.NumberFormat().format(data6.banking.balance)
        defunk.purse =  new Intl.NumberFormat().format(data6.members[defunk.uuid].coin_purse)              

        document.getElementById("S1bal").innerHTML  += (
            "<h4 class = 'heading' >Papaya:</h4>" +
            "Bank: $" + defunk.bank + "<br>"
         +  "Purse: $" + defunk.purse
        )

        //profile 2
        let url7 = accessURL + "defunk/Peach"

        const response7 = await fetch(url7)
        const data7 = await response7.json()

        defunk.bank2 = new Intl.NumberFormat().format(data7.banking.balance)
        defunk.purse2 =  new Intl.NumberFormat().format(data7.members[defunk.uuid].coin_purse)              
        document.getElementById("S1bal").innerHTML  += (
            "<h4 class = 'heading' >Peach:</h4>" +
            "Bank: $" + defunk.bank2 + "<br>"
         +  "Purse: $" + defunk.purse2
        )
    
    //get logybear13 balance
        //profile 1
        let url8 = accessURL + "logybear13/Mango"

        const response8 = await fetch(url8)
        const data8 = await response8.json()

        logy.bank = new Intl.NumberFormat().format(data8.banking.balance)
        logy.purse =  new Intl.NumberFormat().format(data8.members[logy.uuid].coin_purse)         
        
        lastJoin = data8.members[logy.uuid].last_save

        var date = new Date(lastJoin);
        let strDate = date.toDateString()
        strDate = strDate.substring(4)

        document.getElementById("last-join").innerHTML += " " + strDate 
   
    
        document.getElementById("Lbal").innerHTML += (
            "<h4 class = 'heading' >Mango:</h4>" +
            "Bank: $" + logy.bank + "<br>"
         +  "Purse: $" + logy.purse
        )
        //profile 2
        let url9 = accessURL + "logybear13/Blueberry"

        const response9 = await fetch(url9)
        const data9 = await response9.json()

        logy.bank2 = new Intl.NumberFormat().format(data9.banking.balance)
        logy.purse2 =  new Intl.NumberFormat().format(data9.members[logy.uuid].coin_purse)              

        document.getElementById("Lbal").innerHTML  += (
            "<h4 class = 'heading' >Blueberry:</h4>" +
            "Bank: $" + logy.bank2 + "<br>"
         +  "Purse: $" + logy.purse2
        )

    //get Masonwalter1 balance
        //profile 1
        let url10 = accessURL + "Masonwalter1/Pineapple"

        const response10 = await fetch(url10)
        const data10 = await response10.json()

        mas.bank = new Intl.NumberFormat().format(data10.banking.balance)
        mas.purse =  new Intl.NumberFormat().format(data10.members[mas.uuid].coin_purse)              

        document.getElementById("Mbal").innerHTML += (
            "<h4 class = 'heading' >Pineapple:</h4>" +
            "Bank: $" + mas.bank + "<br>"
         +  "Purse: $" + mas.purse
        )

        //profile 2
        let url11 = accessURL + "Masonwalter1/Mango"

        const response11 = await fetch(url11)
        const data11 = await response11.json()

        mas.bank2 = new Intl.NumberFormat().format(data11.banking.balance)
        mas.purse2 =  new Intl.NumberFormat().format(data11.members[mas.uuid].coin_purse)              

        document.getElementById("Mbal").innerHTML += (
            "<h4 class = 'heading' >Mango:</h4>" +
            "Bank: $" + mas.bank2 + "<br>"
         +  "Purse: $" + mas.purse2
        )

        let total = (
        BeyondsData.banking.balance + 
        data2.banking.balance + 
        data3.banking.balance + 
        data4.banking.balance + 
        data5.banking.balance +
        data6.banking.balance +
        data7.banking.balance +
        data8.banking.balance +
        data9.banking.balance +
        data10.banking.balance +
        data11.banking.balance +
        BeyondsData.members[uuid].coin_purse +
        data2.members[small.uuid].coin_purse +
        data3.members[small.uuid].coin_purse +
        data4.members[pat.uuid].coin_purse +
        data5.members[pat.uuid].coin_purse +
        data6.members[defunk.uuid].coin_purse +
        data7.members[defunk.uuid].coin_purse +
        data8.members[logy.uuid].coin_purse +
        data9.members[logy.uuid].coin_purse +
        data10.members[mas.uuid].coin_purse +
        data11.members[mas.uuid].coin_purse
        )
        total = new Intl.NumberFormat().format(total)
        document.getElementById("Bbal").innerHTML += (
           "$" + total
        )
} 
getBalance()

