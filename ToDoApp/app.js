function saveTodo(){
   let text = $("#txtTodo").val();//get the text of the input
   
    $("#txtTodo").val("");

    //create a todo
    var syntax = "<div class='todo-item'>" +text+ "</div>";

    $('.todo-list').append(syntax)

}

function init(){
    console.log("Todo app");
//get some initial data

//hook events
$("#btnSave").click(saveTodo);
$("#txtTodo").keypress(function (e) {
    console.log("Key pressed", e);
    if (e.key === "Enter") {
        saveTodo();
    }
});
}

window.onload = init;
