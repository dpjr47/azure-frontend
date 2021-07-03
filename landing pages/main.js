function mainshow1(){
    document.getElementById("faq").style.display="inline";
    document.getElementById("home").style.display="none";
    document.getElementById("test").style.display="none";
    document.getElementById("account").style.display="none";
}

function mainshow2(){
    document.getElementById("test").style.display="inline";
    document.getElementById("home").style.display="none";
    document.getElementById("faq").style.display="none";
    document.getElementById("account").style.display="none";
}

function mainshow3(){
    document.getElementById("home").style.display="inline";
    document.getElementById("faq").style.display="none";
    document.getElementById("test").style.display="none";
    document.getElementById("account").style.display="none";
}

function mainshow4(){
    document.getElementById("account").style.display="inline";
    document.getElementById("home").style.display="none";
    document.getElementById("test").style.display="none";
    document.getElementById("faq").style.display="none";
}

//news api

var url = 'https://newsapi.org/v2/everything?q=covid&apiKey=86a2d82c7f75420e96cb797a13c66dfd'
var req = new Request(url);
fetch(req)
    .then(function(response) {
       // console.log(response.json());
      return response.json();
      }).then(function(jsonResult){
        console.log(jsonResult)
        //console.log(jsonResult['articles'])

        var disp1 = document.getElementById('ubox');
        var disp2 = document.getElementById('ubox2');
        for (var i=0;i<jsonResult['articles'].length;i++)
        {
           console.log(jsonResult['articles'][i]['title']);
           var divs = document.createElement('li');
           var hr = document.createElement('hr')
            divs.innerHTML = jsonResult['articles'][i]['title']+"\n";
            var kaali_div = document.createElement('div')
            kaali_div.innerHTML = "\n";
            disp1.appendChild(divs);
            disp1.appendChild(kaali_div)
            disp1.appendChild(hr)
            
        }

      })