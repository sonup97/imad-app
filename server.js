var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articalOne={
  title:'Artical one sonu pandit',
  heading:'Artical one ',
  date:'8 aug 2017',
  content:` <p>
                This is mint first web page am so happy to see it. This is mint first web page am so happy to see it.
                This is mint first web page am so happy to see it.This is mint first web page am so happy to see it
                This is mint first web page am so happy to see it
                
                </p>
                <p>
                    This is mint first web page am so happy to see it.
                      62.231.244.121
1
   Ipv4 is expensive
                </p>`
  
};
function template(data){
    var title= data.title;
    var heading= data.heading;
var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <style>
        
            font-family=sen serif;
        }
            
        </style>
        </head>
        <body>
            <div class="container">
                <div>
                <a href="/">Home</a>
            </div>
            <h3>
                Artical one
                
            </h3>
            <div>
               ${heading}
            </div>
            <div>
               
           </div> </div>
            <hr/>
        </body>
    
</html>

`;
return  htmltemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
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
