function addQuestions(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
}

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();

    const questionOne = parseInt($('#question1').val());
    const questionTwo = parseInt($('#question2').val());
    const questionThree = parseInt($('#question3').val());
    const questionFour = parseInt($('#question4').val());
    const questionFive = parseInt($('#question5').val());
    const result = addQuestions(questionOne, questionTwo, questionThree, questionFour, questionFive);

    if (result === 5 || result < 8) {
      return $('.answer').text('You should try JavaScript!');
    } else if (result === 8 || result < 12) {
      return $('.answer').text('You should try HTML/CSS!');
    } else {
      return $('.answer').text('You should try C#')
    }
  })
});
  // $(".radio").click(function() {
  //     const lang = $("input:radio[name=lang]:checked").val();
  //     let result 
  //     if (lang === "java") {
  //       $(".java").toggle();
  //     } else if (lang === "hc") {
  //       $(".hc").toggle();
  //     } else if (lang === "c") {
  //       $(".c").toggle();
  //     }



  //   });



