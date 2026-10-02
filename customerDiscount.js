const readline = require('readline-sync');
const customerName = readline.question("Enter Customer Name: ");
let customerType = readline.question("Enter Customer Type: ");
let purchaseAmount = Number(readline.question("Enter total purchase amount: "));

let userchoice = Number(readline.question("\nEnter your choice of calculation\n\n" + "1.Calculate Discount\n" + "2.Add GST\n" + "3.Final Bill Amount\n" + "4.Payment Method Message\n"));
let discountRange;
let amounToBeDiscounted ;

function calculateDiscount() {
    if (purchaseAmount == 0) {
        console.log("You have not made any purchase yet!");
        discountRange = 0;
    }
    else if (customerType == "Premium") {
        if (purchaseAmount >= 5000) {
            discountRange = 20;
        } else {
            discountRange = 10;
        }
    }
    else if (customerType == "Regular") {
        if (purchaseAmount >= 5000) {
            discountRange = 10;
        } else {
            discountRange = 5;
        }
    }
    else {
        discountRange = 0;   // unknown customer type: no discount
    }

    amounToBeDiscounted = (purchaseAmount * discountRange) / 100;
    return amounToBeDiscounted;
}
function addGST(purchaseAmount) {
    let addedGst = purchaseAmount * 0.18;
    return addedGst;
}
function findTotalAmountPayable(purchaseAmount) {
    let totalAmount = purchaseAmount - calculateDiscount() + addGST(purchaseAmount);
    return totalAmount;
}
switch (userchoice) {
    case 1:
        console.log("Hi! " + customerName + " Your Amount to be Discounted:  " + calculateDiscount(customerType, purchaseAmount));
        break;


    case 2:
        console.log("Hi! " + customerName + " Your Amount after adding GST is" + addGST(purchaseAmount));
        break;


    case 3:
        console.log("Hi! " + customerName + " Your total purchase Amount for today is " + findTotalAmountPayable(purchaseAmount));
        break;

    case 4:
        
        let paymentChoice = Number(readline.question("1.Cash\n" + "2.UPI\n" + "3.Card"));
        
        switch (paymentChoice) {
            case 1:
                console.log("You opted for Cash");
                break;
            case 2:
                console.log("You opted for UPI! Please proceed with your payment");
                break;
            case 3:
                console.log("You opted for card! GO ahead and pay!");
                break;
            default:
                console.log("You made a wrong choice");
                break;
        }

        break;
    default:

        console.log("You made a wrong choice! let us start over again!");
        break;

}