/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result = transactions.reduce((acc, transaction) => {
    const { category, price } = transaction;

    // Check if the category already exists in the accumulator
    const existingCategory = acc.find((item) => item.category === category);

    if (existingCategory) {
      // If the category exists, update the total spent
      existingCategory.totalSpent += price;
    } else {
      // If the category doesn't exist, add a new entry
      acc.push({ category, totalSpent: price });
      console.log(acc);
    }

    return acc;
  }, []);

  return result;
}

module.exports = calculateTotalSpentByCategory;
