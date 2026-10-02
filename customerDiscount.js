const readline = require('readline-sync');
const customerName = readline.question("Enter Customer Name: ");
let customerType = readline.question("Enter Customer Type: ").trim().toLowerCase();
let purchaseAmount = Number(readline.question("Enter total purchase amount: "));

let userchoice = Number(readline.question("\nEnter your choice of calculation\n\n" + "1.Calculate Discount\n" + "2.Add GST\n" + "3.Final Bill Amount\n" + "4.Payment Method Message\n"));
let discountRange;
let amounToBeDiscounted;

function calculateDiscount(customerType, purchaseAmount) {
    if (purchaseAmount == 0) {
        console.log("You have not made any purchase yet!");
        discountRange = 0;
    }
    else if (customerType == "premium") {
        if (purchaseAmount >= 5000) {
            discountRange = 20;
        } else {
            discountRange = 10;
        }
    }
    else if (customerType == "regular") {
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
function calculateGST(taxableAmount) {
    let Gst = taxableAmount * 0.18;
    return Gst;
}

function findTotalAmountPayable(purchaseAmount) {
    let discount = calculateDiscount(customerType, purchaseAmount);
    let discountedAmount = purchaseAmount - discount;
    let gstAmount = calculateGST(discountedAmount);

    // Now add the discounted price and the tax together
    let totalAmount = discountedAmount + gstAmount;
    return totalAmount;
}
switch (userchoice) {
    case 1:
        console.log("Hi! " + customerName + " Your Amount to be Discounted:  " + calculateDiscount(customerType, purchaseAmount));
        break;


    case 2:
        console.log("Hi! " + customerName + " Your GST is" + calculateGST(purchaseAmount));
        break;


    case 3: {
        let discount = calculateDiscount(customerType, purchaseAmount);
        let gst = calculateGST(purchaseAmount - discount);
        console.log("Hi " + customerName + "! Your discount is " + discount +
            ", your GST is " + gst +
            ", your total for today is " + findTotalAmountPayable(purchaseAmount));
        break;
    }
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