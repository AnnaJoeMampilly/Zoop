function getParamValue(paramName)
{
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) 
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName) 
            return pArr[1]; //return value
    }
}
var param = getParamValue('param');
var title = getParamValue('param1')
console.log(title);
            
function mail(){
            var l = (screen.width/2)-225;
            var t = (screen.height/2)-275;
          window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&su="+title+"&body="+param+"&tf=1","", "top="+t+",left="+l+",width=450,height=550");
        };

$(function() {
$( "#fbopt" ).selectmenu({
      select: function(event, ui) {
        console.log(ui.item.value);
        if(ui.item.value==='sendto')
        {
          console.log("The north remembers!!")
          sendto();
        }
        else{post();}
      }
     })
});

function post(){
 
  FB.init({appId: "120347675051515", status: true, cookie: true});
  FB.ui({
  method: 'feed',
  link: param,
  display: 'popup',
  caption: 'An example caption',
}, function(response){});
};

function sendto(){ 
  
  FB.init({appId: "120347675051515", status: true, cookie: true});
  FB.ui({
  method: 'send',
  display: 'popup',
  link: param
  });
};
