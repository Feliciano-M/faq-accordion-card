const questions = document.querySelectorAll(".question");

questions.forEach((question) =>{
    const button = question.querySelector(".btn");
    const questionText = question.querySelector(".title");
    button.addEventListener("click", () => {
        question.forEach((item) => {
            if(item !== question){
                item.classList.remove("Show-text");
            }
        });
        question.classList.toggle("Show-text");
    });
    questionText.addEventListener("click", () => {
        questions.forEach((item) => {
          if(item !== question) {
            item.classList.remove("show-text");
          }
        });
        question.classList.toggle("show-text");
      });
} );