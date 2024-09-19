const accountId = 12345
let accountEmail = 'sonam@gmail.com'
var accountPassword = "23456"
accountCity = "Noida"

// accountId = 234
accountEmail = "chauahn@gmail.com"
accountPassword = "3456544"
accountCity = "Greater Noid"

/*
prefer not to use var
because of issue on block scope and functional scope
 */
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])