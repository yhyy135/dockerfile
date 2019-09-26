console.log("welcome");function go(){var keyWord=$("#input").val();var url="/go.php?"+keyWord;console.log(url);window.open(url)}$("#input").keyup(function(e){if(e.which==13){go()}});
