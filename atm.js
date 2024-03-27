#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mypin = 246810;
let mybalance = 50000;
console.log('your pin is 246810');
let pin = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter your Pin",
    },
]);
if (pin.pinCode == mypin) {
    console.log(chalk.bgBlue.bold("Correct pine code."));
    console.log(chalk.bgMagenta.bold("\t WELCOM TO YOUR ACCOUNT"));
    console.log(chalk.green.bold(`your current balance is ${mybalance}`));
    let selection = await inquirer.prompt([
        {
            name: "transection",
            type: "list",
            message: "pleas select Operation",
            choices: ["Withdraw", "check balance", "Fast Cash"],
        },
    ]);
    if (selection.transection == "Withdraw") {
        let Amount = await inquirer.prompt([
            {
                message: "Enter your Amount",
                type: "number",
                name: "amount",
            },
        ]);
        if (Amount.amount > mybalance) {
            console.log(chalk.bgGreen.bold("Insufficient Balance"));
        }
        else {
            console.log(chalk.bgBlue.bold("transection Successfull!.."));
            mybalance -= Amount.amount;
            console.log(chalk.bgCyan.bold(`your remaining balance is ${mybalance}`));
        }
    }
    else if (selection.transection == "check balance") {
        console.log(chalk.bgBlue.bold(`your balance is : ${mybalance}`));
    }
    else if (selection.transection == "Fast Cash") {
        let answer = await inquirer.prompt({
            message: "select your Amount",
            type: "list",
            name: "fastCash",
            choices: ["5000", "10000", "20000", "30000", "40000", "50000"],
        });
        console.log(chalk.bgBlue.bold("transection successfull!.."));
        mybalance -= answer.fastCash;
        console.log(chalk.bgCyan.bold(`your remaining balance is ${mybalance}`));
    }
}
else {
    console.log(chalk.bgBlue.bold("Incorrect Password"));
}
