 //Bank user class
 //Bank to have owner
 //Balance
 //Account type
 //Deposite
 //Show balance


class Bankdetails
 {
    accountowner: string;
    accounttype: string;
    accountbalance: number;
    

    constructor(accountowner: string, accounttype: string, accountbalance: number)
{
    this.accountowner=accountowner;
    this.accounttype=accounttype;
    this.accountbalance=accountbalance;

}
    Deposite (amount:number)
    {
    this.accountbalance+= amount;
    console.log(`Total Balance:${this.accountbalance} new balance=${this.accountbalance}`)
    }

  showBalance()
  {
    console.log(`Balance: ${this.accountbalance}`)
  }
}

const acc=new Bankdetails ("Jayesh", "Saving", 100000);

acc.Deposite(828492)
acc.showBalance();


class Bankinfo extends Bankdetails
{
    showBalance()
    {
        console.log(`Balance: ${this.accountbalance}`)
    }
}





