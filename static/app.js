const body = document.body;
//const
//const ppl = `/ppl/exercises/${}`

$.get("/ppl", (data) => {
  let result = JSON.stringify(data);
  //document.write(result);
});
