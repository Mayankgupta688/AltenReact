// We cannot update the momory location of variable USer

const user = {
    userName: "Mayank",
    userAge: 20
}

user.userName = "Anshul"

user.userDesignation = "Developer";

user = {
    userName: "XYZ"
}

console.log(user.userName)

const salary = [10, 20, 30];

salary.push(400);

salary = [10, 20, 30];