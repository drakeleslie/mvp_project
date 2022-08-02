const body = document.body;
const desc = $(`div [class="desc"]`);
///////GET REQUESTS FOR PPL LIFTS//////////////////
$.get("/ppl/exercises/push", (data) => {
  let pushBtn = $(`button[class="push-lifts"]`);

  pushBtn.on("click", (event) => {
    liftFormat(data);
  });
});

$.get("/ppl/exercises/pull", (data) => {
  let pullBtn = $(`button[class="pull-lifts"]`);

  pullBtn.on("click", (event) => {
    liftFormat(data);
  });
});

$.get("/ppl/exercises/legs", (data) => {
  let legBtn = $(`button[class="leg-lifts"]`);

  legBtn.on("click", (event) => {
    liftFormat(data);
  });
});
//////////////////////////////////////////////////

function liftFormat(data) {
  for (let i = 0; i < data.length; i++) {
    const liftName = data[i].name;
    const liftPrime = data[i].prime_movers;
    const liftSec = data[i].secondaries;
    const liftFreq = data[i].suggested_freq;
    const liftInfo = $(`<h1>${liftName}</h1>
                      <h3>Prime movers: ${liftPrime}<h4>Secondary movers: ${liftSec}<h4>Suggested frequency: ${liftFreq}</h4></h4></h3>`);
    desc.append(liftInfo);
  }
}
