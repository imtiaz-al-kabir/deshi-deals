const cartButtons = document.getElementsByClassName("cart-btn");
for (const cartButton of cartButtons) {
  cartButton.addEventListener("click", function () {
    const btnImage =
      cartButton.parentNode.parentNode.parentNode.children[0].children[0].src;
    console.log(btnImage);
    const title = cartButton.parentNode.parentNode.children[1].innerText;
    const price =
      cartButton.parentNode.parentNode.children[2].children[0].innerText;

    const totalPrice = document.getElementById("total-price").innerText;
    const totalQuantity = Number(
      document.getElementById("total-quantity").innerText
    );

    const currentTotal = Number(price) + Number(totalPrice);

    document.getElementById("total-price").innerText = currentTotal;

    const cartContainer = document.getElementById("cart-container");

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    
    <div
                  class="bg-gray-100 rounded-xl flex items-center p-5 gap-10 justify-between"
                >
                  <img src="${btnImage}" alt="" class="w-10" />
                  <div>
                    <h2>${title}</h2>
                    <h2>${price} tk</h2>
                  </div>
                </div>
    
    `;

    cartContainer.append(newDiv);
    totalQuantity++;
    document.getElementById("total-quantity").innerText = totalQuantity;
  });
}
