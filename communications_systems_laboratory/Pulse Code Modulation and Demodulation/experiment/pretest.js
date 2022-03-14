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
        question: "Identify the suitable digital pulse modulation which represent the signal in the form of sequence of coded pulses.",
        answers: {
          A: "AM",
          B: "FM",
          C: "PM",
          D: "PCM"
        },
        correctAnswer: "D"
      },
  
      {
        question: "Calculate the signal to quantization noise ratio of 7- bit PCM system for the message bandwidth of 500 Hz.",
        answers: {
          A: "53.8 dB",
          B: "43.8 dB",
          C: "63.8 dB",
          D: "33.8 dB"
        },
        correctAnswer: "B"
      },
  
      {
        question: "What is the drawback of PCM?",
        answers: {
            A : "Increased delay",
            B : "Increased bandwidth",
            C : "Analog output",
            D : "Digital output"
        },
        correctAnswer: "B"
      },
      {
        question: "Find the transmission bandwidth and signaling rate of  9- bit PCM for the message bandwidth of 800Hz",
        answers: {
            A: "7.2KHz, 14.4Kbps",
            B : "8KHz, 16Kbps",
            C : "6kHz, 3Kbps",
            D : "9.2KHz, 9.2Kbps"
        },
        correctAnswer: "A"
      },
      {
        question: "Identify the block in PCM which converts continuous amplitude samples into discrete  amplitude samples",
        answers: {
            A : "Sampler",
            B : "Encoder",
            C : "Quantizer",
            D : "Repeater"
        },
        correctAnswer: "C"
      }
    ];
  
  // ---------------------------- End -------------------------------
  
    // display quiz right away
    QuizContent();
  
    // on submit, show results
    Submit.addEventListener("click", resultWindow);
  })();