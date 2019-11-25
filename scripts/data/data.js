smartcar.data = {};

smartcar.data.medeeNemeh = function()
{   
    let req = new XMLHttpRequest();
    let medeeJSON;

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
            medeeJSON = JSON.parse(req.responseText);
        }
    };
    
    req.open("GET", "https://api.jsonbin.io/b/5dca0ef1c9b247772abe250b/3", true);
    req.setRequestHeader("secret-key", "$2b$10$dTJvQj/CJSRjFa9pPu7Y2OdU6lloaxrBChayBpn4dYtKWkbDjvqyO");
    req.send();
    
    var html = '<section><a href=""><img src="index/medee%zurag%.jpg" alt=""><img src="index/arrowr.png" alt=""><h2>%garchig%</h2><div><p>%date%</p><p>%uzelt%</p></div></a></section>';
    var elmnt = document.getElementById("medeeRow");
    var newHtml;
    while (elmnt.hasChildNodes()) {  
        elmnt.removeChild(elmnt.firstChild);
    }
    for (var i = medeeJSON["medee"]["buh"].length - 4; i < medeeJSON["medee"]["buh"].length; i++)
    {
        newHtml = html.replace('%zurag%', medeeJSON["medee"]["buh"][i]["zurag"]);
        newHtml = newHtml.replace('%garchig%', medeeJSON["medee"]["buh"][i]["garchig"]);
        newHtml = newHtml.replace('%date%', medeeJSON["medee"]["buh"][i]["date"]);
        newHtml = newHtml.replace('%uzelt%', medeeJSON["medee"]["buh"][i]["uzelt"]);
        document.getElementById("medeeRow").insertAdjacentHTML('afterbegin', newHtml);
    }
}