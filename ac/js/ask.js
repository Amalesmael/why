var btn = document.querySelectorAll('.btn-secondary');
 
btn.forEach(text=>{
    text.addEventListener('click',addtext)
    var textarea =document.querySelector('textarea')
     function addtext(){
       document.getElementById('ans').innerHTML = `<textarea class="orm-control"></textarea>
       <bottom class="btn btn-secondary bttn">answer</bottom>
       `
     }
})



