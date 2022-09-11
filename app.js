var toastss = document.getElementById('toasts')
var btnsuccess = document.querySelector('.success')
var btnwarning = document.querySelector('.warning')
var btnerror = document.querySelector('.error')
var btntoast = document.querySelectorAll('.toast')
btnerror.onclick = function(){
    creattoast('error')
}
btnsuccess.onclick = function(){
    creattoast('successs')
}

btnwarning.onclick = function(){
    creattoast('warningg')
}
// hàm tạo 1 element khi onclick vào tagname
function creattoast(color){
    var chagneicon =  "fa-solid fa-circle-exclamation"
    var changneicon2 = "this is a success message"
    switch(color){
        case 'warningg':
            chagneicon = "fa-solid fa-triangle-exclamation" 
            changneicon2 = "this is a success warning"      
        break;
        case 'errorr':
          
            chagneicon = "fa-solid fa-circle-exclamation"
            changneicon2 = "this is a success error"
            
        break;
        case 'successs':
          
            chagneicon = "fa-solid fa-circle-check"
             changneicon2 = "this is a success message"
            
        break;
    }
    var toastt = document.createElement('div')
    console.log(toastss)
    toastt.classList.add('toast')
    toastt.classList.add(color)
    toastt.innerHTML = `
         <i class="${chagneicon}"></i>
         <span class="message">${changneicon2}</span>
       <span class="countdown"></span>
        `
    toastss.appendChild(toastt)
    setTimeout(function(){
        toastt.style.animationName = 'hidden'
        toastt.style.animationDuration = '3s'
        toastt.style.animationFillMode = 'forwards'
        toastt.style.animationTimingFunction = 'ease'
        
        
            // khi click sẽ thực hiện việc này
        switch(color){
            case'warningg':
            setTimeout(function(){
                toastt.previousElementSibling.remove('toastt')
                toastt.previousElementSibling.remove('warningg')
            },1500)
          
            case'errorr':
            setTimeout(function(){
                toastt.previousElementSibling.remove('toastt')
                toastt.previousElementSibling.remove('warningg')
            },1500)
    
            case'successs':
            setTimeout(function(){
                toastt.previousElementSibling.remove('toastt')
                toastt.previousElementSibling.remove('warningg')
            },1500)
        }
    },3000)
}
