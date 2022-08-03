const body = document.body;
const desc = $(`div [class="desc"]`);
const journal = $(`div [class="journal"]`);

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

/////////GET REQUESTS FOR JOURNAL/////////////////
$.get("/ppl/journal", (data) => {
  journalFormat(data);
});
///////////////////////////////////////////////////

////////FUNCTIONS//////////////////////////////////
function liftFormat(data) {
  for (let i = 0; i < data.length; i++) {
    const liftName = data[i].name;
    const liftPrime = data[i].prime_movers;
    const liftSec = data[i].secondaries;
    const liftFreq = data[i].suggested_freq;

    const liftInfo =
      $(`<form id="form${i}"><h1 class="lift${i}">${liftName}</h1>
    <label for="name">Name:</label>
    <input id="name${i}" type="text" value="${liftName}" name="name">
    <label for="sets">Sets:</label>
    <input type="text" name="sets" id="sets${i}" />
    <label for="reps">Reps:</label>
    <input type="text" name="reps" id="reps${i}" />
    <label for="info">Notes:</label>
    <input type="text" name="info" id="info${i}" />
    <button type="submit" class="submitLift">click</button>
    <h3 class="left">Primary muscles: ${liftPrime} <h4>-Secondary muscles: ${liftSec}<h4>Suggested frequency: ${liftFreq}</h4></h4></h3></form>`);

    desc.append(liftInfo);
    $(`#form${i}`).on("submit", (event) => {
      console.log("click");
      event.preventDefault();
      storeLift(data, i);
    });
  }
}

function journalFormat(data) {
  for (let i = 0; i < data.length; i++) {
    const liftName = data[i].name;
    const liftSets = data[i].sets;
    const liftReps = data[i].reps;
    const liftDesc = data[i].info;

    const liftInfo = $(
      `<h4 class="left">${liftName} - </h4><h3>${liftSets} x ${liftReps} / ${liftDesc}</h3><br>`
    );
    journal.append(liftInfo);
  }
}

function storeLift(data, i) {
  let liftName = $(`#name${i}`).val();
  let liftSets = $(`#sets${i}`).val();
  let liftReps = $(`#reps${i}`).val();
  const liftInfo = $(`#info${i}`).val();
  console.log(liftSets);
  $.ajax({
    url: "/ppl/journal",
    method: "post",
    contentType: "application/json",
    data: JSON.stringify({
      name: `${liftName}`,
      sets: `${liftSets}`,
      reps: `${liftReps}`,
      info: `${liftInfo}`,
    }),
    success: function (data) {
      console.log(data);
    },
  });
}
