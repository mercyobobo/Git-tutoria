// const User1 = {
//     name: "Mercy Obobo", 
//     balance: 2000,
//     currency: "USD",
//     type: "checking",

// }; 
// const User2 = {
//     name: "Aliyah Ogunleye", 
//     balance: 3000,
//     currency: "NGN",
//     type: "saving",
// };
//     const User3 = {
//     name: "Olubunmi Elegbeleye", 
//     balance: 4000,
//     currency: "NGN",
//     type: "saving",
// };

// const User4 = {
//     name: "Animbom Odette", 
//     balance: 5000,
//     currency: "USD",
//     type: "checking",
// };

// let User1Balance = User1.balance;
// let User2Balance = User2.balance;
// let User3Balance = User3.balance;
// let User4Balance = User4.balance;

// let User1currency = User1.currency;
// let User2currency = User2.currency;
// let User3currency = User3.currency;
// let User4currency = User4.currency;

// let User1type = User1.type;
// let User2type = User2.type;
// let User3type = User3.type;
// let User4type = User4.type;

// //initial amount for all the users
// console.log("===Initial Amount===");
// console.log(`${User1.name}: ${User1Balance}`);
// console.log(`${User2.name}: ${User2Balance}`);
// console.log(`${User3.name}: ${User3Balance}`);
// console.log(`${User4.name}: ${User4Balance}`);

// // --- Simulate Deposits ---
// User1.balance += 1000; // Deposit to Alice
// User4.balance += 500; // Deposit to Charlie

// console.log("\n--- After Deposits ---");
// console.log(`${User1.name}: ${User1.balance} ${User1.currency}`);
// console.log(`${User4.name}: ${User4.balance} ${User4.currency}`);

// console.log("--- For Withdrawals ---");
// let Amount1 = 600;
// if (User2.balance >= Amount1) {
//     User2.balance -= Amount1;
// } else {
//     console.log(`Withdrawal denied for ${User2.name}: insufficient funds`);
// }

// let Amount2 = 1000;
// if (User3.balance >= Amount2) {
//     User3.balance -= Amount2;
// } else {
//     console.log(`Withdrawal denied for ${User3.name}: insufficient funds`);
// }