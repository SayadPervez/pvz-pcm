(function() {
    function QuizContent() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      QuestionQueue.forEach((currentNo, questionNo) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentNo.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNo}" value="${letter}">
              ${letter} :
              ${currentNo.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentNo.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      McqContent.innerHTML = output.join("");
    }
  
    function resultWindow() {
      // All answers
      const answerContainers = McqContent.querySelectorAll(".answers");
  
      // user answers
      let correctCount = 0;
  
      // for each question...
      QuestionQueue.forEach((currentNo, questionNo) => {
        // find selected answer
        const answerContainer = answerContainers[questionNo];
        const selector = `input[name=question${questionNo}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentNo.correctAnswer) {
          // add to the number of correct answers
          correctCount++;
  

          //answerContainers[questionNo].style.color = "lightgreen";
        } else {
          // answer is wrong or blank

          answerContainers[questionNo].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultContent.innerHTML = `${correctCount} out of ${QuestionQueue.length}`;
    }
  
    const McqContent = document.getElementById("MCQS");
    const resultContent = document.getElementById("result");
    const Submit = document.getElementById("submit");
  
  
  // Don't touch the above code
  
  
  
  
  // Write your MCQs here --- Start --- --------------------
  
    const QuestionQueue = [
      {
        question: "1.What is the need of modulation?",
        answers: {
          A: "Reduces the antenna height",
          B: "Increases the antenna height",
          C: "Short distance communication",
          D: "Increase the interference power"
        },
        correctAnswer: "A"
      },
  
      {
        question: "What are the types of analog modulation schemes? ",
        answers: {
          A: "Phase modulation",
          B: "Frequency modulation",
          C: "Amplitude modulation",
          D: "All of the above"
        },
        correctAnswer: "D"
      },
  
      {
        question: "Identify the characteristics of Amplitude modulation.",
        answers: {
            A : "Modulating signal amplitude is varied w.r.t carrier signal",
            B : "Carrier signal amplitude is varied w.r.t modulating signal",
            C : "Modulated signal amplitude remains constant.",
            D : "Modulated signal frequency and phase also varying"
        },
        correctAnswer: "B"
      },
      {
        question: "What is the bandwidth requirement of DSB-FC and SSB?",
        answers: {
            A: "fm & fm",
            B : "fm & 2fm",
            C : "4fm & 2fm",
            D : "2fm & fm"
        },
        correctAnswer: "D"
      },
      {
        question: "For under modulation, what is the value of modulation index?",
        answers: {
            A : "m= 1",
            B : "m>1",
            C : "m<1",
            D : "m=0"
        },
        correctAnswer: "C"
      },
      {
        question: "The process of retrieving modulating signal from the modulated wave is called as",
        answers: {
            A : "Modulation",
            B: "Detection",
            C: "Multiplexing",
            D: "Demultiplexing"
        },
        correctAnswer: "B"
      },
      {
        question: "The modulating signal is not preserved from the envelope of an AM signal If modulation index is",
        answers: {
            A : "greater than 1",
            B: "Less than 1",
            C: "Equal to 1",
            D: "Equal to 0"
            
        },
        correctAnswer: "A"
      },
      {
        question: "What is the maximum transmission efficiency of DSB-FC?",
        answers: {
            A : "44.4%",
            B: "55.5%",
            C: "33.33%",
            D: "64.44%"
            
        },
        correctAnswer: "C"
      },
      {
        question: "Identify the drawback of SSB modulation.",
        answers: {
            A : "Carrier to be locally generated at the receiver",
            B: "High bandwidth",
            C: "High transmit power",
            D: "Low efficiency"
            
        },
        correctAnswer: "A"
      },
      {
        question: "Define Modulation index of AM",
        answers: {
            A : "Ac/Am",
            B: "Am/Ac",
            C: "2Am/Ac",
            D: "Am/2Ac"
            
        },
        correctAnswer: "B"
      }
    ];
  
  // ---------------------------- End -------------------------------
  
    // display quiz right away
    QuizContent();
  
    // on submit, show results
    Submit.addEventListener("click", resultWindow);
  })();