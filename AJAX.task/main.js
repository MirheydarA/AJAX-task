$("#btn").click(() => {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    headers: {
      "auth-token": "token",
    },
    success: (data) => {
      $.each(data, (_, value) => {
        $("div").append(`<a>${value.name}</a>`);
        $("a").addClass("list-group-item list-group-item-action");
      });
    },
  });
});

document.addEventListener("click", function (event) {
  let btn = document.getElementById("btn")
  let text;
  event.preventDefault();
  text = event.target.innerText;
  if (
      event.target.className.includes("list-group-item list-group-item-action")
      ) {
          alert(event.target.innerText);
        }
        btn.style.display = "none"
});
