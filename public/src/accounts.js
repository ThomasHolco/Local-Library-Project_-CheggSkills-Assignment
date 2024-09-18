function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE    //Constulted with ChatGPT
  return accounts.find(account => account.id === id);  //returns the account that gets searched by id from the account object array
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE        //Consulted with ChatGPT
  return accounts.sort((first, second) => {  //Goes through all the accounts and sorts them all by last name first then first name last. Ala, Government style
    const lastNameA = first.name.last.toLowerCase();  //adds non-insentive cases to the search
    const lastNameB = second.name.last.toLowerCase();
    
    if (lastNameA < lastNameB) return -1;   //setting the sort to start last name part first followed by first name last
    if (lastNameA > lastNameB) return 1;
    return 0;
  });
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
     return accounts.map(account => `${account.name.first} ${account.name.last}`);
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
