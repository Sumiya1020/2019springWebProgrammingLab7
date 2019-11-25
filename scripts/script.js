var html, newHtml;
// medee = {
//     "buh" : 
//     [{"zurag": 5, "garchig": "Нийтийн тээвэр шинэ үйлчилгээ нэвтрүүлжээ", "date": "2019/11/11","uzelt": 3},
//     {"zurag": 6, "garchig": "Хан-Уул дүүрэг хог тээвэрлэлтийн таван автомашин, хоёр ковш, грейдерээр парк шинэчлэл хийлээ", "date": "2019/11/11","uzelt": 3},
//     {"zurag": 7, "garchig": "Нийтийн тээврийн үйлчилгээний явуулын оношилгоо болон хяналт шалгалтын ажил эхэллээ", "date": "2019/10/30","uzelt": 14},
//     {"zurag": 8, "garchig": "НИЙСЛЭЛ: Түгжрэлийг бууруулахад боломжит бүх арга хэмжээг авч ажиллана", "date": "2019/11/11","uzelt": 13}]
// };

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

var medeeNemeh = function()
{   
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
            medeeJSON = JSON.parse(req.responseText);
        }
    };
    
    req.open("GET", "https://api.jsonbin.io/b/5dca0ef1c9b247772abe250b/3", true);
    req.setRequestHeader("secret-key", "$2b$10$dTJvQj/CJSRjFa9pPu7Y2OdU6lloaxrBChayBpn4dYtKWkbDjvqyO");
    req.send();
    
    html = '<section><a href=""><img src="index/medee%zurag%.jpg" alt=""><img src="index/arrowr.png" alt=""><h2>%garchig%</h2><div><p>%date%</p><p>%uzelt%</p></div></a></section>';
    var elmnt = document.getElementById("medeeRow");
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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}






// setTimeout(medeeNemeh, 3000);

/*
<section>
    <a href="">
        <img src="index/medee1.jpg" alt="">
        <img src="index/arrowr.png" alt="">
        <h2>Хотын дарга зарим автозамын асуудлуудыг газар дээр нь шийдвэрлэлээ</h2>
        <div>
            <p>2019/10/04</p>
            <p>2 удаа үзсэн</p>
        </div>
    </a>
</section>
<section>
    <a href="">
        <img src="index/medee2.jpg" alt="">
        <img src="index/arrowr.png" alt="">
        <h2>Хувийн тээврийн хэрэгслээрээ такси үйлчилгээ эрхлэх сонирхолтой иргэдийн судалгаа хийгдэж байна</h2>
        <div>
            <p>2019/10/04</p>
            <p>5 удаа үзсэн</p>
        </div>
    </a>
</section>
<section>
    <a href="">
        <img src="index/medee3.jpg" alt="">
        <img src="index/arrowr.png" alt="">
        <h2>2019-2020 оны өвөлжилтийн бэлтгэл ажлыг хангуулах ажлын хэсгийн шалгалт эхэллээ</h2>
        <div>
            <p>2019/10/03</p>
            <p>2 удаа үзсэн</p>
        </div>
    </a>
</section>
<section>
    <a href="">
        <img src="index/medee4.jpg" alt="">
        <img src="index/arrowr.png" alt="">
        <h2>“Home plaza” орчмын хөдөлгөөний өөрчлөлттэй танилцана уу</h2>
        <div>
            <p>2019/10/03</p>
            <p>7 удаа үзсэн</p>
        </div>
    </a>
</section>
*/