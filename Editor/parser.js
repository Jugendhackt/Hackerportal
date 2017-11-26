/*
 * BBCODE PARSER
 */

function bbcParse(text){
    text = text.replace(/\[bold\]/gi,'<b>');
    text = text.replace(/\[\/bold\]/gi,'</b>');
    text = text.replace(/\[italic\]/gi,'<i>');
    text = text.replace(/\[\/italic\]/gi,'</i>');
    text = text.replace(/\[underline\]/gi,'<u>');
    text = text.replace(/\[\/underline\]/gi,'</u>');
    text = text.replace(/\[strike\]/gi,'<s>');
    text = text.replace(/\[\/strike\]/gi,'</s>');
    text = text.replace(/\[code()\]/gi,'<pre><code class="">');
    text = text.replace(/\[\/code\]/gi,'</pre></code>');
    text = text.replace(/\[br\]/gi, '<br>');
    return text;
}

function clearParse(text){
    text = text.replace(/\[bold\]/gi,'');
    text = text.replace(/\[\/bold\]/gi,'');
    text = text.replace(/\[italic\]/gi,'');
    text = text.replace(/\[\/italic\]/gi,'');
    text = text.replace(/\[underline\]/gi,'');
    text = text.replace(/\[\/underline\]/gi,'');
    text = text.replace(/\[strike\]/gi,'');
    text = text.replace(/\[\/strike\]/gi,'');
    text = text.replace(/\[code(java)\]/gi, '');
    text = text.replace(/\[br\]/gi, '<br>');
    return text;
}