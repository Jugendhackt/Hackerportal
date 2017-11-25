// Declare Init Functions
var textForm = document.getElementById("editor-window-markdown");
var title = document.getElementById("editor-title");
var author = document.getElementById("editor-author");

// Say in which Mode this Editor is (New or Edit Mode)
var newMode = true;
var articleId = null;

/*
 * Utilities Functions
 */


// Basic Ajax Request
const ajax = (action, data, callback) => {
    $.ajax({
        url: "articleLib.php",
        type: "POST",
        data: {action, data},
        dataType: "text",
        success: (result) => {
            callback(result);
        }
    });
};


// Function to Autoresize the TextArea
textForm.addEventListener("keypress", (event) => {
    console.log("HI");
    textForm.style.height = 'auto';
    textForm.style.height = textForm.scrollHeight + "px";
});

// Function to insert the Command Symbol
function insertSymbol(start, end, str, symbol1, symbol2){
    var oldText = str;
    var str1 = oldText.substr(0, start);
    var str2 = oldText.substr(start, end - start);
    var str3 = oldText.substr(end);
    return str1 + symbol1 + str2 + symbol2 + str3;
}


// Global Markup Handler Generator and Handler... somehow...
function BasicMarkupHandler(symbol1, symbol2, offset) {
    return function (event) {
        // Check if it needs to be offset (only for the old pos necessary)
        if(offset == undefined)
            offset = 0;

        // Get Selected Area
        var start = textForm.selectionStart;
        var end = textForm.selectionEnd;

        // Insert Symbol
        textForm.value = insertSymbol(start, end, textForm.value, symbol1, symbol2);

        // Focus Cursor on wanted position
        textForm.focus();
        textForm.selectionStart = start + symbol1.length + offset;
        textForm.selectionEnd = end + symbol1.length + offset;
    }
}


// Register all Basic Handler
$("#btn-bold").click(BasicMarkupHandler("[bold]", "[/bold]"));
$("#btn-italic").click(BasicMarkupHandler("[italic]", "[/italic]"));
$("#btn-underline").click(BasicMarkupHandler("[underline]", "[/underline]"));
$("#btn-strike").click(BasicMarkupHandler("[strike]", "[/strike]"));


if(newMode){
    ajax("create", {title: title.value, author: author.value, content: textForm.value}, (result) => {
        console.log(result);
    });
} else {
    if(!articleId == null){

    }
}