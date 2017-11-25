/*
 * BBCODE PARSER
 */

function bbcParse(text){
    text = text.replace(/\[bold\]/g,'<b>');
    text = text.replace(/\[\/bold\]/g,'</b>');
    text = text.replace(/\[italic\]/g,'<i>');
    text = text.replace(/\[\/italic\]/g,'</i>');
    text = text.replace(/\[underline\]/g,'<u>');
    text = text.replace(/\[\/underline\]/g,'</u>');
    text = text.replace(/\[strike\]/g,'<s>');
    text = text.replace(/\[\/strike\]/g,'</s>');
    return text;
}

function clearParse(text){
    text = text.replace(/\[bold\]/g,'');
    text = text.replace(/\[\/bold\]/g,'');
    text = text.replace(/\[italic\]/g,'');
    text = text.replace(/\[\/italic\]/g,'');
    text = text.replace(/\[underline\]/g,'');
    text = text.replace(/\[\/underline\]/g,'');
    text = text.replace(/\[strike\]/g,'');
    text = text.replace(/\[\/strike\]/g,'');
    return text;
}