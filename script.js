document.addEventListener("DOMContentLoaded", function () {
  let currentQuestionId = 1;
  function loadQuestion(questionId) {
    // Fetch the question data from the PHP script
    fetch(`get_question.php?id=${questionId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched quizData:", data); // Debugging output

        if (data.error) {
          console.error(data.error);
          alert("No more questions!");
          return;
        }

        document.getElementById("question-text").textContent = data.question;
        document.getElementById("silhouette").src = data.silhouette_image;

        // Get existing option buttons
        const optionButtons = document.querySelectorAll(".option-btn");

        // Populate the options and set click event listeners
        optionButtons.forEach((btn, index) => {
          btn.textContent = data[`option${index + 1}`]; // Set the button text
          btn.setAttribute("data-option", index + 1); // Set the option index (1-based)
          // Clear any previous event listeners and classes
          btn.classList.remove("wrong-answer");
          btn.replaceWith(btn.cloneNode(true)); // Remove previous event listeners
        });
        // Reassign the option buttons to include new event listeners
        document.querySelectorAll(".option-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            const selectedOption = parseInt(this.getAttribute("data-option")); // 1-based index
            const correctAnswerIndex = parseInt(data.correct_answer); // 1-based index
            optionButtons.forEach((button) =>
              button.classList.remove("wrong-answer")
            );
            function changeImageWithEase(newSrc) {
              const silhouetteImg = document.getElementById("silhouette");
              // Step 1: Fade out
              silhouetteImg.style.opacity = 1;
              // Step 2: Wait for the fade-out to complete before changing the image
              setTimeout(() => {
                silhouetteImg.src = newSrc;
                // Step 3: Fade in after a slight delay to ensure the image has loaded
                setTimeout(() => {
                  silhouetteImg.style.opacity = 0.9;
                }, 100); // Adjust delay if needed
              }, 500); // Matches the transition duration in the CSS
            }
            // Check if the selected option index matches the correct answer index
            if (selectedOption === correctAnswerIndex) {
              changeImageWithEase(data.sprite_image);
              // Change silhouette to sprite and play cry
              document.getElementById("silhouette").src = data.sprite_image;
              const cryAudio = document.getElementById("cry-audio");
              cryAudio.src = data.cry_audio;
              cryAudio.volume = 0.1;
              cryAudio.play();

              // Load the next question after a short delay
              setTimeout(() => {
                currentQuestionId++;
                loadQuestion(currentQuestionId);
              }, 2000); // 2-second delay before moving to the next question
            } else {
              // Change background color to red for incorrect answer
              this.classList.add("wrong-answer");
            }
          });
        });
      });
  }

  // Load the first question initially
  loadQuestion(currentQuestionId);
});
