$("#btn").click( () => {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        headers: {
            "auth-token": "token"
        },
        success: (data) => {
            $.each(data, (_,value) => {
                $("div").append(`<a>${value.name}</a>`)
                $("a").addClass("list-group-item list-group-item-action")
                
                $("a").click( () => {
                    console.log(value.name);
                })
            }
            )}

    })
})