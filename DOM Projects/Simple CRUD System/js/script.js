const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productCategoryInput = document.getElementById("productCategory");
const productSaleInput = document.getElementById("productSale");
const productDescriptionInput = document.getElementById("productDescription");

const addProductBtn = document.getElementById("addProduct");
const clearFormBtn = document.getElementById("clearForm");

const searchInput = document.getElementById("search");

// ? Products Array
let productsArr;

if (localStorage.getItem("productslist") != null) {
  // ? Retrieving all the data saved earlier.
  productsArr = JSON.parse(localStorage.getItem("productslist"));
  displayData();
} else {
  // ? Start from the beginning
  productsArr = [];
}

// ? Display Data
function displayData() {
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
            <button onclick='deleteProductBtn(${i})' class="btn btn-danger">delete</button>
          </td>
        </tr>`;
  }
  document.getElementById("tableData").innerHTML = temp;
}

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

  // ? Storing all information in the local storage. (kol mara ha set object gded)
  localStorage.setItem("productslist", JSON.stringify(productsArr));
});

// ? clearing the inputs
clearFormBtn.addEventListener("click", function () {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "Select Category";
  productSaleInput.checked = false;
  productDescriptionInput.value = "";
});

// ? Deleting product from the array
function deleteProductBtn(deletedIndex) {
  // ? Removing Product Object from Products Array (hasehl index mo3ayn kol mara)
  productsArr.splice(deletedIndex, 1);

  // ? Display the remaining Objects Properties in the table
  displayData();

  // ? Storing all the new information in the local storage. (kol mara hams7 object ha set mn gded)
  localStorage.setItem("productslist", JSON.stringify(productsArr));
}

// ? Searching for specific product name or category
searchInput.addEventListener("keyup", function () {
  let searchVal = searchInput.value.toLowerCase();

  let searchResult = "";
  for (let i = 0; i < productsArr.length; i++) {
    if (
      productsArr[i].productName.toLowerCase().includes(searchVal) == true ||
      productsArr[i].productCategory.toLowerCase().includes(searchVal)
    )
      searchResult += `<tr>
          <td>${i}</td>
          <td>${productsArr[i].productName.toLowerCase().replace(searchVal, `<span class='bg-info'>${searchVal}</span>`)}</td>
          <td>${productsArr[i].productPrice}</td>
          <td>${productsArr[i].productCategory.toLowerCase().replace(searchVal, `<span class='bg-info'>${searchVal}</span>`)}</td>
          <td>${productsArr[i].productSale}</td>
          <td>${productsArr[i].productDescription}</td>
          <td>
            <button class="btn btn-warning">update</button>
          </td>
          <td>
            <button onclick='deleteProductBtn(${i})' class="btn btn-danger">delete</button>
          </td>
        </tr>`;
  }
  document.getElementById("tableData").innerHTML = searchResult;
});
