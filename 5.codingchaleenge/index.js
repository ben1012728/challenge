const  form = document.querySelector(".js-form"),
  input =  form.querySelector("imput"),
  index = document.querySelector(".js_index")

  const USER_LS = "currentUser",
  SHOWING_CN = "showing" ;
  
  function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    //데이터가없을때 숨겨주는 역할
    index.classList.add(SHOWING_CN);
    index.innerText = `HI ${text}`;
  }  

  function loadPending() {
    const currentUSer = localStorage.getItem(USER_LS);
    if(currentUSer===null){
          //유저가 없을때(저장된 데이터가 없을떄)
    }else{
            //있을때
            paintGreeting(currentUSer);
    }
  }
function init(){

}
init();