const body = document.body;
const desc = $(`div [class="desc"]`);
const journal = $(`div [class="journal"]`);

///////GET REQUESTS FOR PPL LIFTS//////////////////
$.get("/ppl/exercises/push", (data) => {
  let pushBtn = $(`#push-lifts`);

  pushBtn.on("click", (event) => {
    desc.empty();
    liftFormat(data);
  });
});

$.get("/ppl/exercises/pull", (data) => {
  let pullBtn = $(`#pull-lifts`);

  pullBtn.on("click", (event) => {
    desc.empty();
    liftFormat(data);
  });
});

$.get("/ppl/exercises/legs", (data) => {
  let legBtn = $(`#leg-lifts`);

  legBtn.on("click", (event) => {
    desc.empty();
    liftFormat(data);
  });
});
//////////////////////////////////////////////////

/////////GET REQUESTS FOR JOURNAL/////////////////
$.get(`/ppl/journal`, (data) => {
  journalFormat(data);
  $(`#journal-btn`).on("click", (event) => {
    journalFormat(data);
    location.reload();
  });
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
      $(`<form class="lift-text" id="form${i}"><h1 class="lift${i}">${liftName}</h1>
    <h3>Primary muscles: ${liftPrime} <h4>-Secondary muscles: ${liftSec}<h4>Suggested frequency: ${liftFreq}</h4></h4></h3>
    <label for="sets">Sets:</label>
    <input type="text" name="sets" id="sets${i}" />
    <label for="reps">Reps:</label>
    <input type="text" name="reps" id="reps${i}" />
    <label for="info">Notes:</label>
    <input type="text" name="info" id="info${i}" />
    <button type="submit" class="submitLift">submit</button></form>`);

    desc.append(liftInfo);
    $(`#form${i}`).on("submit", (event) => {
      //desc.empty();
      console.log("click");
      event.preventDefault();
      storeLift(i, liftName);
      // $.get(`/ppl/journal`, (data) => {
      //   journalFormat(data);
      // });
    });
  }
}
/////////////////////////////////////////////////
function journalFormat(data) {
  for (let i = 0; i < data.length; i++) {
    const liftName = data[i].name;
    const liftSets = data[i].sets;
    const liftReps = data[i].reps;
    const liftDesc = data[i].info;
    const liftLog = $(
      `<form id="log${i}" class="journal-text"><h4>${liftName} - <h3>${liftSets} x ${liftReps} / ${liftDesc}</h3></h4></form><hr>`
      //`<h4>${liftName} - <h3>${liftSets} x ${liftReps} / ${liftDesc}</h3></h4>`
    );
    //liftLog.empty();
    console.log(liftLog);
    desc.append(liftLog);
  }
}
//////////////////////////////////////////////
function storeLift(i, liftName) {
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
///////////////////////////////////////////
function deleteJournal() {
  $.ajax({
    url: `/ppl/journal`,
    type: "DELETE",
    success: function (data) {
      console.log(data);
    },
  });
}
$(`#delete-btn`).on("click", (event) => {
  deleteJournal();
  location.reload();
});
