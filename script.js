(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Pyeongtaek University', 'The animals, I raised', 'My favorite music', 'My favorite thing'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  })();
  
  const headerEl = document.querySelector("header");
  window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
  });
  function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
      headerEl.classList.add("active");
    }else{
      headerEl.classList.remove("active");
    }
  }
  
  const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };
  const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
  for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
      const target = this.dataset.target;
      animationMove(target);
    });
  }


  /* Learn-more 버튼 Event 하고 누르면 링크로 가기 */
  const button = document.getElementById("Learn-more");

  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.2';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('click', () => {
    window.location.href = ('https://sites.google.com/view/pyeongtaekuniversity/%ED%99%88?authuser=3');
  });

  const button3 = document.getElementById("Learn-more2");

  button3.addEventListener('mouseover', () => {
    button3.style.transform = 'scale(1.2';
  });

  button3.addEventListener('mouseout', () => {
    button3.style.transform = 'scale(1)';
  });

  button3.addEventListener('click', () => {
    window.location.href = ('https://animals-introduce.netlify.app/');
  });


  /* 질문 저장하는 리스트 */
  let questions = []; 

    function submitQuestion() {
      let question = document.getElementById("questionInput").value;
      questions.push(question);

      
      let questionElement = document.createElement("div");
      questionElement.innerText = question;

      
      let questionContainer = document.getElementById("questionContainer");
      questionContainer.appendChild(questionElement);

      
      document.getElementById("questionForm").reset();
    }

    /* 질문 저장하는 함수 */
    function saveMessage(event) {

      /* 버튼 누르면 창이 초기화 되서 Messages가 지워지는 문제 해결 */
      event.preventDefault();

      let message = document.getElementById("msg").value;
      let email = document.getElementById("eml").value;
  
      let messageList = document.getElementById("messageList");
      let list = document.createElement("li");
      list.innerText = "(" +  email + ")" +  "\n-" + message;
      messageList.appendChild(list);
  
      
      document.getElementById("name").value = "";
      document.getElementById("msg").value = "";
    }

    /* Send 버튼 Event 설정 */
    const button2 = document.getElementById("Send");

    button2.addEventListener('mouseover', () => {
      button2.style.transform = 'scale(1.01';
    });
  
    button2.addEventListener('mouseout', () => {
      button2.style.transform = 'scale(1)';
    });


    


