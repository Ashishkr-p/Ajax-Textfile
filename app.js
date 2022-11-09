document.getElementById('button').addEventListener('click',fatchDatatext);

function fatchDatatext(){
  //create Xhr object  
  const xhr = new XMLHttpRequest();
  
  // open that xhr object  with get/ post method  and  type url/file  or  Asyn/syn js 
  xhr.open('get','sample.txt',true);


//  xhr.open('get','https://api.lorem.space/image/furniture?w=150&h=150'
//  ,true);
     
    // function is Excute after request sucessful 
    // xhr.onload = function (){
    //     if (this.status==200){
    //         console.log(this.responseText);
    //        }
    //     }

    xhr.onreadystatechange = function(){
     if (this.readyState == 4 && this.status==200){
        document.getElementById('para').innerHTML= this.responseText;
    
     }
      
    }
    // sending our request to server 
    xhr.send();
}
 