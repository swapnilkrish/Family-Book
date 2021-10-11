var images = ["https://i.postimg.cc/rm3gxW13/Family.jpg","https://i.postimg.cc/KjTfNzQz/Krishna.jpg","https://i.postimg.cc/bw96WZPS/Brother.jpg","https://i.postimg.cc/V6dDJ4CX/Mother.jpg","https://i.postimg.cc/QMN63jN4/Father.jpg"];
var names = ["Family Book","Krishna","Gaurang","Rajshri","Swapnil"];
var i = 1;
function update()
{
    
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}
