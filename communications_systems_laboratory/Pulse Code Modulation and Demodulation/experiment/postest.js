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
        question: "The frequency and amplitude of the carrier signal should be _______ compared to baseband signal",
        answers: {
          A: "Greater than",
          B:	"Less than",
          C:	"Equal to",
          D: "None of the above"
        },
        correctAnswer: "A"
      },
  
      {
        question: "Point the condition to be satisfied for modulation without any distortion in practice",
        answers: {
          A: "m=1",
          B:"m<1",
          C:    "m>1",
          D:	"m=0"
        },
        correctAnswer: "B"
      },
  
      {
        question: "How do you eliminate the occurrence of carrier signal in the generation of DSB-SC waveform? ",
        answers: {
            A : "Multiplying carrier and modulating signal",
            B: "Adding carrier and modulating signal",
            C: "Subtracting modulating signal from the carrier signal",
            D: "Adding the mean value of modulating and carrier signals"
        },
        correctAnswer: "A"
      },
      {
        question: "Which among the following modulation technique is more efficient?",
        answers: {
            A: "DSB-FC",
            B:	"DSB-SC",
            C:	"SSB-SC",
            D:	"Both B&C"
        },
        correctAnswer: "C"
      },
      {
        question: "How do you retrieve the modulating signal from DSB-FC signal?",
        answers: {
            A :  "Balanced modulator",
            B:    "Switching modulator",
            C:     "Envelope detector",
            D:      "Square law modulator"
        },
        correctAnswer: "C"
      },
      {
        question: "The DSB-FC spectrum consists of:",
        answers: {
            A : "Upper sideband only",
            B: "Lower sideband only",
            C: "Carrier frequency only",
            D: "All of the above"
        },
        correctAnswer: "D"
      },
      {
        question: "Identify the modulation scheme that uses more bandwidth and transmitted power.",
        answers: {
            A : "DSB-FC",
            B: "DSB-SC",
            C: "SSB-SC",
            D: "Both A&B"
        },
        correctAnswer: "A"
      },
      {
        question: "Calculate the total transmitted power of DSB-FC modulated signal with the carrier power of 8 W and modulation index of 0.5.",
        answers: {
            A :  "4W",
            B: "9W",
            C: "7W",
            D: "8W"
        },
        correctAnswer: "B"
      },
      {
        question: "The modulating signal frequency and the carrier frequency of an AM broadcast station are 5KHz & 20KHz respectively. Calculate the upper & lower sideband frequencies and the total bandwidth.",
        answers: {
            A :  "20KHz, 30KHZ, 5KHz",
            B: "10KHz, 5KHz, 10KHz",
            C: "25KHz, 15KHz, 10KHz",
            D: "40KHz, 20KHz, 5KHz"
            
        },
        correctAnswer: "C"
      },
      {
        question: "Find the total modulation Index of AM system when a carrier wave is modulated by two modulating signals with modulation indices 0.4 and 0.3.",
        answers: {
            A :  "0.3",
            B: "0.4",
            C: "0.25",
            D: "0.5",
            
        },
        correctAnswer: "D"
      }

    ];
  
  // ---------------------------- End -------------------------------
  
    // display quiz right away
    QuizContent();
  
    // on submit, show results
    Submit.addEventListener("click", resultWindow);
  })();