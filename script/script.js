;(function () {
    "use strict";
    let createNewElement = function (commentText) {

        let listItem = document.createElement("li");
        let name = document.createElement("p");
        let data = document.createElement("p");
        let comment = document.createElement("div");

        listItem.className = "comments__item";
        name.className = "comments__item-person-name";
        name.innerText = "User";
        data.className = "comments__item-data";
        data.innerText = "22 июня 2017";
        comment.className = "comments__item-text";
        comment.innerText = commentText;

        listItem.appendChild(name);
        listItem.appendChild(data);
        listItem.appendChild(comment);

        return listItem;
    };

    let addComment = function(){

        let inputComment = document.querySelector(".new-comment__input");
        if (inputComment.value){
            let commentText= inputComment.value;
            let newComment = createNewElement(commentText);

            document.querySelector(".comments__list").appendChild(newComment);
            inputComment.value = "";
        }
    };

    let KeyboardEvent = function() {
        const CTRL_BUTTON_CODE = 17;
        const ENTER_BUTTON_CODE = 13;

        let isCtrlPressed = false;

        document.onkeydown = function (event) {

            if (event.which == CTRL_BUTTON_CODE) {
                isCtrlPressed = true
            }
            if (event.which == ENTER_BUTTON_CODE && isCtrlPressed) {
                event.preventDefault();
                addComment();
            }
        };

        document.onkeyup = function (event) {
            if (event.which == CTRL_BUTTON_CODE) {
                isCtrlPressed = false;
            }
        };

    };


    document.addEventListener('DOMContentLoaded', function () {
        let addButton = document.querySelector(".new-comment__add");
        addButton.addEventListener('click', addComment);
    });

    document.addEventListener('DOMContentLoaded', KeyboardEvent);
})();