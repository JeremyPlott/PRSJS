const url = "http://localhost:50288/api/users";

const userlist = () => {
    $.getJSON(url)
        .done( (res) => {
            console.log(res);
            refresh(res);
        });
};
const userdetail = (id) => {    
    $.getJSON(`${url}/${id}`)
        .done( (res) => {
            console.log(res);
            refresh(res);
        });
};