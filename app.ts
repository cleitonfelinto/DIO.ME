import { Account } from "./Dio-Banking/Account";
import { CompanyAccount } from "./Dio-Banking/CompanyAccount";
import { ManagerAccount } from "./Dio-Banking/ManagerAccount";
import { PeopleAccount } from "./Dio-Banking/PeopleAccount";

//  Dio Baking
const newAccount: Account = new Account('Cleiton', 1234);
newAccount.getName();
newAccount.getAccuntNumber();
newAccount.getBalance();
newAccount.getStatus();
newAccount.deposit(100);
newAccount.withdraw(10);
newAccount.setBalance(100);
newAccount.setStatus(true);

const people: PeopleAccount = new PeopleAccount('João', 1234, 1);
people.getIdDoc();

const manager: ManagerAccount = new ManagerAccount('Gabriel', 1234);
manager.deposit(100);

const companyAccount: CompanyAccount = new CompanyAccount('Fábio', 1234);
companyAccount.getLoan(10);
