var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
var names=["Madan sharma","Santosh sharma","Kushal sharma","Shikha sharma","Naman sharma","Anuj Pulstya","Neeru Sharma","Anya Pulstya","Myra Pulstya"];
var i=0;
function update()
{
    i++;
    if(i>8)
    {
    i=0;
    }
    
    document.getElementById("Album").src=images[i];
    document.getElementById("name").innerHTML=names[i];

}