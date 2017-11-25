var textForm = document.getElementById("editor-window-markdown");


// Function to insert the Command Symbol TODO: Fix the start and end
function insertSymbol(start, end, str, symbol1, symbol2){
    var oldText = str;
    var str1 = oldText.substr(0, start);
    var str2 = oldText.substr(start, end - start);
    var str3 = oldText.substr(end);
    return str1 + symbol1 + str2 + symbol2 + str3;
}


// Global Markup Adder Handler
function BasicMarkupHandler(symbol1, symbol2, offset) {
    return function (event) {
        if(offset == undefined)
            offset = 0;
        var start = textForm.selectionStart;
        var end = textForm.selectionEnd;
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