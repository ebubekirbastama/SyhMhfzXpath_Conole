//Siyah Muhafiz Web Browser Console XPath Kullanımı\\
//-------------------------------------------------\\
                   //Ham Hali Kullanımı\\
//--------------------------------------------------\\
//Örnek:
//-------------------------------------------------------
//$x("")

//Örnek:
//-------------------------------------------------------
//$x("//div[@class='title']//a")[0].getAttribute('href');


var syhmhz = new Array();
for (var i = 0; i < $x("//div[@class='title']//a").length; i++) 
{
  syhmhz.push($x("//div[@class='title']//a")[i].getAttribute('href'));
}
 for (var j = 0; j < syhmhz.length; j++) 
{
  document.write(syhmhz[j]+"<br>");
}
