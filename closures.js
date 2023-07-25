//OOPS fundas


/*
Enacapsulation:-
*/
function Parent(name, age) {
    var _name = name;
    var _age = age;
    var accBalance = "$500";
    var accpwd = "7890";

    var child = function (accountno, pwd) {
        // write the function to be used by the outer world
        return {
            Name: _name,
            Age: _age,
            Balance: accBalance,
            accNo: accountno
        };
    };

    return child; // Return the child function itself, not an object.

    // Note: The second return statement has been removed.
}

var acct = Parent("Anant", 34);
console.log("HERE", acct(230, "pass"));
