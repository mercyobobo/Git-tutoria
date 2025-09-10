// // --- Create 4 account objects ---
// let account1 = {
//     name: "Alice",
//     balance: 1000,
//     currency: "USD",
//     type: "Savings"
// };

// let account2 = {
//     name: "Bob",
//     balance: 500,
//     currency: "USD",
//     type: "Checking"
// };

// let account3 = {
//     name: "Charlie",
//     balance: 2000,
//     currency: "EUR",
//     type: "Savings"
// };

// let account4 = {
//     name: "Diana",
//     balance: 0,
//     currency: "EUR",
//     type: "Checking"
// };

// let accounts = [account1, account2, account3, account4];

// // --- Simulate Deposits ---
// account1.balance += 300; // Deposit to Alice
// account3.balance += 200; // Deposit to Charlie

// console.log("\n--- After Deposits ---");
// console.log(`${account1.name}: ${account1.balance} ${account1.currency}`);
// console.log(`${account3.name}: ${account3.balance} ${account3.currency}`);

// // --- Simulate Withdrawals ---
// let withdrawAmount1 = 700;
// if (account2.balance >= withdrawAmount1) {
//     account2.balance -= withdrawAmount1;
// } else {
//     console.log(`Withdrawal denied for ${account2.name}: insufficient funds`);
// }

// let withdrawAmount2 = 1000;
// if (account4.balance >= withdrawAmount2) {
//     account4.balance -= withdrawAmount2;
// } else {
//     console.log(`Withdrawal denied for ${account4.name}: insufficient funds`);
// }

// // --- Transfers ---
// let transferAmount = 100;
// // Transfer from Alice to Bob (same currency)
// if (account1.currency === account2.currency) {
//     account1.balance -= transferAmount;
//     account2.balance += transferAmount;
// } else {
//     console.log("Transfer failed: currency mismatch");
// }

// // Attempt transfer from Charlie to Diana (currency mismatch)
// if (account3.currency === account4.currency) {
//     account3.balance -= 50;
//     account4.balance += 50;
// } else {
//     console.log("Transfer failed: currency mismatch");
// }

// // --- Monthly Maintenance ---
// for (let i = 0; i < accounts.length; i++) {
//     let acc = accounts[i];
//     if (acc.type === "Savings") {
//         let interest = acc.balance * 0.02;
//         acc.balance += interest;
//     } else if (acc.type === "Checking") {
//         acc.balance -= 50;
//     }
// }

// // --- Comparisons ---
// let highest = accounts[0];
// let lowest = accounts[0];

// for (let i = 1; i < accounts.length; i++) {
//     if (accounts[i].balance > highest.balance) {
//         highest = accounts[i];
//     }
//     if (accounts[i].balance < lowest.balance) {
//         lowest = accounts[i];
//     }
// }

// console.log("\n--- Balance Comparisons ---");
// console.log(`Highest Balance: ${highest.name} with ${highest.balance.toFixed(2)} ${highest.currency}`);
// console.log(`Lowest Balance: ${lowest.name} with ${lowest.balance.toFixed(2)} ${lowest.currency}`);

// // --- Account Status Check ---
// for (let i = 0; i < accounts.length; i++) {
//     let acc = accounts[i];
//     if (acc.balance > 0) {
//         acc.status = "Active";
//     } else if (acc.balance === 0) {
//         acc.status = "Empty";
//     } else {
//         acc.status = "Overdrawn";
//     }
// }

// // --- Final Transaction Summary ---
// console.log("\n--- Final Account Summary ---");
// for (let i = 0; i < accounts.length; i++) {
//     let acc = accounts[i];
//     console.log(`Name: ${acc.name}`);
//     console.log(`Type: ${acc.type}`);
//     console.log(`Currency: ${acc.currency}`);
//     console.log(`Balance: ${acc.balance.toFixed(2)}`);
//     console.log(`Status: ${acc.status}`);
//     console.log("------------------------------");
// }
