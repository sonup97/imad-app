var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artical={
articalOne={
     title:'Artical one sonu pandit',
    heading:'Artical one',
    date:'5 sept 2017',
    content:`<p>
                This is the content for mine firsr partical This is the content for mine firsr partica0This is the content for mine firsr partical
                </p>
                <p>
                This is the content for mine firsr partical This is the content for mine firsr partica0This is the content for mine firsr partical
                </p>`
}
articalTwo:{
     title:'Artical Two sonu pandit',
    heading:'Artical two',
    date:'5 sept 2017',
    content:`<p>
                This is the content for mine second t for mine firsr partical
                </p>
                

}
articalThree:{ title:'Artical three sonu pandit',
    heading:'Artical three',
    date:'5 sept 2017',
    content:`
                <p>
                This is the content for mine firsr partical This is the content for mine firsr partica0This is the content for mine firsr partical
               ` </p>
    
};
   
};
 function creatTemplate(data){
     
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
 
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
       
       <link href="/ui/style.css" rel="stylesheet" />
           
        </head>
        <body>
    <div class="container">
                <div>
                <a href="/">Home</a>
            </div>
            <hr>
            <h3>
               ${heading}
                
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
      </div>      </div>
    
</html>

`;
return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function(req, res){
   res.send(creatTemplate(articalOne));
});

app.get('/artical-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});
app.get('/artical-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
