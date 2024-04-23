#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("<<<<<<<<<<<<<<<Welcome to EasyPay >>>>>>>>>>>>>"));
const transactionHistory = [];
let info = await inquirer.prompt([
    {
        name: "Q1",
        type: "input",
        message: "Plz enter your name"
    },
    {
        name: "Q2",
        type: "input",
        message: "Plz enter your account number"
    }
]);
// show your name and pin
console.log(chalk.green(`Name:  ${info.Q1.toUpperCase()}`));
console.log(chalk.green(`Your pin: ${info.Q2}`));
// show your current balance
let randomNumber = Math.floor(Math.random() * 500000);
console.log(chalk.green(`Your current balance is: ${randomNumber}`));
while (true) {
    // create object with 6 options.
    let action = await inquirer.prompt([
        {
            name: "action1",
            type: "list",
            message: "What do you want to do?",
            choices: ["Send money", "Bill payment", "Mobile Packages", "Saving", "Easycash Loan", "Exit"]
        }
    ]);
    // if select option 1 "Send money" its has 3 options
    if (action.action1 === "Send money") {
        let send = await inquirer.prompt([
            {
                name: "send1",
                type: "list",
                message: "How do you want to send money?",
                choices: ["easypaisa Transfer", "Bank Transfer", "CNIC Transfer"]
            }
        ]);
        // if select 1.easypaisa transfer from "Send money"
        if (send.send1 === "easypaisa Transfer") {
            let easypaisa = await inquirer.prompt([
                {
                    name: "easyPaisa",
                    type: "input",
                    message: "Enter Receivers Mobile Number"
                },
                {
                    name: "easyPaisa1",
                    type: "input",
                    message: "Enter Amount"
                }
            ]);
            if (easypaisa.easyPaisa1 <= randomNumber) {
                randomNumber -= easypaisa.easyPaisa1;
                console.log(chalk.blue(`Sent money succesfully to ${easypaisa.easyPaisa} your remaining balance is: ${randomNumber}`));
                transactionHistory.push(//"transactionHistory"    
                {
                    type: "easypaisa Transfer",
                    amount: easypaisa.easyPaisa1,
                    date: new Date().toLocaleString()
                });
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        // //  if select 2.Bank Transfe from "Send money" its ferther 3 options
        if (send.send1 === "Bank Transfer") {
            let bankTransfe = await inquirer.prompt([
                {
                    name: "bankTransfe1",
                    type: "list",
                    message: "Plz select your bank account",
                    choices: ["HBL", "JazzCash", "MeezanBank"]
                }
            ]);
            // if select 1."HBL"" from "Bank Transfer"
            if (bankTransfe.bankTransfe1 === "HBL") {
                let hbl = await inquirer.prompt([
                    {
                        name: "hbl",
                        type: "input",
                        message: "Enter Account Number"
                    },
                    {
                        name: "hbl1",
                        type: "input",
                        message: "Enter Amount"
                    }
                ]);
                if (hbl.hbl1 <= randomNumber) {
                    randomNumber -= hbl.hbl1;
                    console.log(chalk.blue(`Sent money succesfully to ${hbl.hbl} your remaining balance is: ${randomNumber}`));
                    transactionHistory.push(//"transactionHistory"
                    {
                        type: "HBL",
                        amount: hbl.hbl1,
                        date: new Date().toLocaleString()
                    });
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            ;
            // if select 2."JazzCash" from "Bank Transfer"
            if (bankTransfe.bankTransfe1 === "JazzCash") {
                let jazzCash = await inquirer.prompt([
                    {
                        name: "jazzCash",
                        type: "input",
                        message: "Enter Account Number"
                    },
                    {
                        name: "jazzCash1",
                        type: "input",
                        message: "Enter Amount"
                    }
                ]);
                if (jazzCash.jazzCash1 <= randomNumber) {
                    randomNumber -= jazzCash.jazzCash1;
                    console.log(chalk.blue(`Sent money succesfully to ${jazzCash.jazzCash} your remaining balance is: ${randomNumber}`));
                    transactionHistory.push(//"transactionHistory"
                    {
                        type: "JazzCash",
                        amount: jazzCash.jazzCash1,
                        date: new Date().toLocaleString()
                    });
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            ;
            // if select 3."MeezanBank" from "Bank Transfer"
            if (bankTransfe.bankTransfe1 === "MeezanBank") {
                let meezanBank = await inquirer.prompt([
                    {
                        name: "meezanBank",
                        type: "input",
                        message: "Enter Account Number"
                    },
                    {
                        name: "meezanBank1",
                        type: "input",
                        message: "Enter Amount"
                    }
                ]);
                if (meezanBank.meezanBank1 <= randomNumber) {
                    randomNumber -= meezanBank.meezanBank1;
                    console.log(chalk.blue(`Sent money succesfully to ${meezanBank.meezanBank} your remaining balance is: ${randomNumber}`));
                    transactionHistory.push(//"transactionHistory"
                    {
                        type: "MeezanBank Transfer",
                        amount: meezanBank.meezanBank1,
                        date: new Date().toLocaleString()
                    });
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
        }
        ;
        // if select 3."CNIC Transfer" from "Send money"
        if (send.send1 === "CNIC Transfer") {
            let CNICTransfer = await inquirer.prompt([
                {
                    name: "CNICTransfer",
                    type: "input",
                    message: "Enter Receivers CNIC Number"
                },
                {
                    name: "CNICTransfer1",
                    type: "input",
                    message: "Enter Amount"
                }
            ]);
            if (CNICTransfer.CNICTransfer1 <= randomNumber) {
                randomNumber -= CNICTransfer.CNICTransfer1;
                console.log(chalk.blue(`Sent money succesfully to ${CNICTransfer.CNICTransfer} your remaining balance is: ${randomNumber}`));
                transactionHistory.push(//"transactionHistory"
                {
                    type: "CNIC Transfer",
                    amount: CNICTransfer.CNICTransfer1,
                    date: new Date().toLocaleString()
                });
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
    }
    ;
    // if select option 2."Bill payment" it has 2 options
    if (action.action1 === "Bill payment") {
        let bill = await inquirer.prompt([
            {
                name: "bill1",
                type: "list",
                message: "Select your bill",
                choices: ["Electricity", "Internet"]
            }
        ]);
        let billAmount;
        let billDescription;
        switch (bill.bill1) { //switch case
            case "Electricity": //option 1.from "Bill payment"
                let electricity = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "input",
                        message: "Enter your Electricity Bill"
                    }
                ]);
                billAmount = electricity.amount;
                billDescription = "Electricity Bill Payment";
                break;
            case "Internet": //option 2.from"Bill payment"
                let internet = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "input",
                        message: "Enter your Internet Bill"
                    }
                ]);
                billAmount = internet.amount;
                billDescription = "Internet Bill Payment";
                break;
            default:
                console.log(chalk.red("Invalid bill type"));
        }
        if (billAmount <= randomNumber) {
            randomNumber -= billAmount;
            console.log(chalk.blue(`Bill paid successfully, your remaining balance is: ${randomNumber}`));
            transactionHistory.push(//"transactionHistory"
            {
                type: billDescription,
                amount: billAmount,
                date: new Date().toLocaleString()
            });
        }
        else {
            console.log(chalk.red("Insufficient Balance"));
        }
        ;
    }
    //if select option 3."Mobile Packages"
    if (action.action1 === "Mobile Packages") {
        let mobile = await inquirer.prompt([
            {
                name: "mobile1",
                type: "list",
                message: "Select your mobile package",
                choices: ["100", "200", "300"]
            }
        ]);
        let selectedPackage = parseInt(mobile.mobile1); // Convert string to integer
        if (selectedPackage === 100 || selectedPackage === 200 || selectedPackage === 300) {
            randomNumber -= selectedPackage;
            console.log(chalk.blue(`Your package is activated your remaining balance is: ${randomNumber}`));
            transactionHistory.push(//"transactionHistory"
            {
                type: "Mobile Package",
                amount: mobile.mobile1,
                date: new Date().toLocaleString()
            });
        }
        else {
            console.log(chalk.red("Insufficient Balance"));
        }
    }
    ;
    //if select option 4."Saving"
    if (action.action1 === "Saving") {
        if (transactionHistory.length > 0) { //Display "transactionHistory"
            transactionHistory.forEach(transaction => {
                console.log(`Your TransactionHistory: ${transaction.date} - ${transaction.type}: ${transaction.amount}`);
            });
            console.log(chalk.yellow(`After Transaction your current saving is: ${randomNumber}`));
        }
        else {
            console.log(chalk.yellow(`You have no transaction yet your saving are: ${randomNumber}`));
        }
    }
    //if select option 5. "Easycash Loan"
    if (action.action1 === "Easycash Loan") {
        let loan = await inquirer.prompt([
            {
                name: "loan1",
                type: "list",
                message: "How much loan do you want?",
                choices: ["1000", "5000", "10000"]
            }
        ]);
        let loanAmount = parseInt(loan.loan1); // Convert string to integer
        if (loanAmount === 1000 || loanAmount === 5000 || loanAmount === 10000) {
            randomNumber += loanAmount;
            console.log(chalk.blue(`Your loan is activated your current balance after loan is: ${randomNumber}`));
            transactionHistory.push(//"transactionHistory"
            {
                type: "Easycash Loan",
                amount: loanAmount,
                date: new Date().toLocaleString()
            });
        }
    }
    //if select option 6."Exit"
    if (action.action1 === "Exit") {
        let exit = await inquirer.prompt([
            {
                name: "exit1",
                type: "list",
                message: "Do you want to continue",
                choices: ["Yes", "No"]
            }
        ]);
        if (exit.exit1 === "No") {
            if (transactionHistory.length > 0) {
                // Display transaction history
                console.log(chalk.yellow("Transaction History:"));
                transactionHistory.forEach(transaction => {
                    console.log(`${transaction.date} - ${transaction.type}: ${transaction.amount}`);
                });
                //    console.log(chalk.red("Thank you for using EasyPay"));
                //    break;
            }
            else {
                console.log(chalk.yellow(`You have no transaction yet your balance is: ${randomNumber}`));
            }
            console.log(chalk.red("Thank you for using EasyPay"));
            break;
        }
        ;
    }
    ;
}
;
