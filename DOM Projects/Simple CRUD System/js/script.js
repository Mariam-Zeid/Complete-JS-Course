const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productSaleInput = document.getElementById("productSale");
const productDescriptionInput = document.getElementById("productDescription");

const addProductBtn = document.getElementById("addProduct");
const clearFormBtn = document.getElementById("clearForm");

// ? Products Array
let productsArr = [];

// ? Display Data
const displayData = function () {
  let temp = "";
  for (let i = 0; i < productsArr.length; i++) {
    temp += `<tr>
          <td>${i}</td>
          <td>${productsArr[i].productName}</td>
          <td>${productsArr[i].productPrice}</td>
          <td>${productsArr[i].productCategory}</td>
          <td>${productsArr[i].productSale}</td>
          <td>${productsArr[i].productDescription}</td>
          <td>
            <button class="btn btn-warning">update</button>
          </td>
          <td>
            <button class="btn btn-danger">delete</button>
          </td>
        </tr>`;
  }
  document.getElementById("tableData").innerHTML = temp;
};

// ? Adding product to the array
addProductBtn.addEventListener("click", function () {
  // ? Product Object
  const productObj = {
    productName: productNameInput.value,
    productPrice: productPriceInput.value,
    productCategory: productCategoryInput.value,
    productSale: productSaleInput.value,
    productDescription: productDescriptionInput.value,
  };

  // ? Push Product Object to Products Array (kol mara hazawed obj )
  productsArr.push(productObj);

  // ? Display Object Properties in the table
  displayData();
});

// ? clearing the inputs
clearFormBtn.addEventListener("click", function () {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "Select Category";
  productSaleInput.checked = false;
  productDescriptionInput.value = "";
});
