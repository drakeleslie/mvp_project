const body = document.body;
const 
//const ppl = `/ppl/exercises/${}`

$.get("/ppl", (data) => {
  let result = JSON.stringify(data);
  document.write(result);
});
$.get("/ppl/exercises", (data) => {
  console.log(data);
});
$.get("/ppl/exercises/push", (data) => {
  console.log(data);
});
$.get("/ppl/exercises/pull", (data) => {
  console.log(data);
});
$.get("/ppl/exercises/legs", (data) => {
  console.log(data);
});
