$(document).ready(function() {
  $(".radio").click(function() {
      const lang = $("input:radio[name=lang]:checked").val();
      let result 
      if (lang === "java") {
        $(".java").toggle();
      } else if (lang === "hc") {
        $(".hc").toggle();
      } else if (lang === "c") {
        $(".c").toggle();
      }
    });
  });
  