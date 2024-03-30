#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2233;
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        type: "number",
        message: "enter your pin",
    }
]);
if (pinAnswer.Q1 === myPin) {
    console.log("Access Granted correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an option",
            choices: ["Withdraw", "check Balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter Your amount"
            }
        ]);
        myBalance -= amountAns.amount;
        if (myBalance > amountAns.amount) {
            console.log(`you withdrawn amount is ${amountAns.amount} `);
        }
        else if (myBalance < amountAns.amount) {
            console.log("invalid amount");
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log("your balance is " + myBalance);
    }
}
else {
    console.log("Access Denied incorrect pin code ");
}
