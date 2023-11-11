//
//

document.addEventListener("DOMContentLoaded", () => {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  let currentQuestionIndex = 0;

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Madrid", "Berlin", "Paris", "London"],
      answer: "Paris",
    },
    // ... other questions
  ];

  const submitButton = document.getElementById("submit");
  const nextButton = document.getElementById("next");

  function showQuestion(question) {
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
    question.choices.forEach((choice) => {
      const choiceItem = document.createElement("li");
      choiceItem.classList.add("list-group-item", "list-group-item-action");
      choiceItem.textContent = choice;
      choiceItem.addEventListener("click", () =>
        selectAnswer(choice, question.answer)
      );
      choicesElement.appendChild(choiceItem);
    });
  }

  function showModalMessage(message, dismissText, dismissCallback) {
    const modal = document.getElementById("myModal");
    const modalContent = document.querySelector(".modal-content p");

    modal.style.display = "block";
    modalContent.textContent = message;

    const dismissButton = document.createElement("span");
    dismissButton.classList.add("disMiss");
    dismissButton.setAttribute("style", "display:flex");
    dismissButton.textContent = dismissText || "DISMISS";
    modalContent.appendChild(dismissButton);

    dismissButton.addEventListener("click", function () {
      modal.style.display = "none";
      if (dismissCallback) {
        dismissCallback();
      }
    });

    const closeModalButton = document.querySelector(".close");
    closeModalButton.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  function selectAnswer(choice, correctAnswer) {
    const buttons = document.querySelectorAll(".list-group-item");
    // const buttons = document.querySelectorAll(".choice-button");

    buttons.forEach((button) => {
      button.disabled = true;
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });

    if (choice === correctAnswer) {
      showModalMessage(
        "Yes! Paris is thee Correct Answer",
        "FINISH THE EXAM",
        function () {
          // Your logic for what happens when the "DISMISS" button is clicked
          // For example, navigate to another page
          window.location.href = "SubmitPage.html";
        },
        "green"
      );
    } else {
      showModalMessage("Wrong Answer. Correct is " + correctAnswer);
    }
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showModalMessage("Finish The Exam!"),
        function () {
          // Your logic for what happens when the "DISMISS" button is clicked
          // For example, navigate to another page
          window.location.href = "../../MCQ/SubmitPage.html";
        };

      currentQuestionIndex = 0;
      showQuestion(questions[currentQuestionIndex]);
    }
  });

  showQuestion(questions[currentQuestionIndex]);
});
modal.style.display = "none";
