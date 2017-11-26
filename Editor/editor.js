// Declare Init Functions
var textForm = document.getElementById("editor-window-markdown");
var title = document.getElementById("editor-title");
var author = document.getElementById("editor-author");

/*
 * Cookie Functions
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*
 * Utilities Functions
 */


// Basic Ajax Request
const ajax = (action, data, callback) => {
    $.ajax({
        url: "../articleLib.php",
        type: "POST",
        data: {action, data},
        dataType: "text",
        success: (result) => {
            callback(result);
        }
    });
};

// Setup Editor (Disable Author auto input)

// Say in which Mode this Editor is (New or Edit Mode)
var newMode = true;
var articleId = getCookie("articleId");
console.log("Cookie: " + articleId);

// Load Title
if(articleId !== ""){
    newMode = false;
    title.value = "Loading...";
    title.disabled = true;
    ajax("getTitle", {articleId}, (result) => {
        title.disabled = false;
        title.value = result;
    });
}


// Function to Autoresize the TextArea
textForm.addEventListener("keydown", (event) => {
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
        if(offset === undefined)
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
$("#btn-code").click(BasicMarkupHandler("[code()]", "[/code]", -2));

// Fonts Editor


// Final Function to submit it.
function submit() {
    if ($("#textForm").val() !== "" && $("#editor-author").val() !== "" && $("#editor-title").val() !== "") {
        if (newMode) {
            ajax("create", {title: title.value, author: author.value, content: textForm.value}, (result) => {
                if (isNaN(result)) {
                    window.location.pathname = "article.php?=" + result;
                } else {
                    $("#error-alert").alert();
                    console.log(result);
                }
            });
        }
    } else {
        $("#error-alert-missing".alert());
    }
}