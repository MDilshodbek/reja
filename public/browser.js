console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `
     <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm"> Ochirish</button>
            </div>
        </li>
    `;
}

let cretaeField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: cretaeField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      cretaeField.value = "";
      cretaeField.focus();
    })
    .catch((err) => {
      console.log("Please try again!");
    });
});
