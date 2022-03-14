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
        question: "Arrange the sequence of operations performed in transmitter part of a PCM system",
        answers: {
          A: "Decoder, Sampler, Quantizer",
          B:	"Quantizer, Filter, Sampler",
          C:	"Encoder, quantizer, Sampler",
          D: "Sampler, Quantizer, Encoder"
        },
        correctAnswer: "D"
      },
  
      {
        question: "What is the transmission bandwidth of n- bit PCM for the message bandwidth of “w” Hz?",
        answers: {
          A: "BT=4nw",
          B:"BT=nw/2",
          C:    "BT=2nw",
          D:	"BT=nw"
        },
        correctAnswer: "D"
      },
  
      {
        question: "Define PCM.",
        answers: {
            A : "Each message sample is converted into n-bit binary.",
            B: "Each message sample is converted into analog.",
            C: "Each message sample is converted into discrete.",
            D: "Each message sample is converted into sinewave."
        },
        correctAnswer: "A"
      },
      {
        question: "Calculate the signal to quantization noise ratio in dB for a 10-bit PCM system.",
        answers: {
            A: "23.8 dB",
            B:	"61.8 dB",
            C:	"72.6 dB",
            D:	"56.3 dB"
        },
        correctAnswer: "B"
      },
      {
        question: "Obtain the codeword length of a sample which is quantized into one of 16 levels in PCM.",
        answers: {
            A :  "5",
            B:    "4",
            C:     "3",
            D:      "7"
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