let urlParms = {};

$().ready(() => {
    // let urlParms = Utilities.parseUrlParameters(document.URL);
    // $(".heading").css("fontWeight", "bold");
    // getUser(urlParms.id);
    $("button").click(() => {
        getUser();
    });
});

const refresh = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#pname").text(user.firstname + " " + user.lastname);
    $("#pphone").text(user.phone);
    $("#pemail").text(user.email);
    $("#previewer").text(user.isReviewer ? "Yes" : "No");
    $("#padmin").text(user.isAdmin ? "Yes" : "No");
}

const getUser = () => {
    let id = $("#xid").val();
    UserService.get(id)
        .done( (res) => {
            console.log("User:", res);
            refresh(res);
        });
};