$().ready( () => {    

    $("#btnDelete").click( () => {
        let id = $("#delid").val();
        get(id);
        UserService.delete(id)
            .done((res) => {
                console.log("Delete rc:", res);
            });
    });
    $("btnGetAll").click( () => {
        var dbodyCtrl = document.getElementById("dbody");
        dbodyCtrl.innerHTML = "";
        for(var user of users) {
            var tr = "<tr>";
            tr += `<td>${user.id}</td>`
            tr += `<td>${user.username}</td>`
            tr += `<td>${user.firstname}</td>`
            tr += `<td>${user.lastname}</td>`
            tr += `<td>${user.phone}</td>`
            tr += `<td>${user.email}</td>`
            tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
            tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
            tr += "</tr>";
            dbodyCtrl.innerHTML += tr;
        }
    });
});