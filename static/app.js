const body = document.body;
const btn = $("button");
$.get("/ppl", (data) => {
  console.log(data);
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
