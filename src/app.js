import { subtract, add } from "./calculations";
import { calIntakeEl, totalBurntEl, netCalEl, exerciseEl, caloriesEl, exerciseListEl, submitBtn, resetBtn } from "./elements";
import { useIndexedDb } from "./indexedDb";

function addToList(name, calories) {
  exerciseListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Calories burnt: ${calories}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  const total = subtract(Number(calIntakeEl.innerText), caloriesEl.value);
  totalBurntEl.innerText = add(Number(totalBurntEl.innerText), caloriesEl.value);
  netCalEl.innerText = total;
  addToList(exerciseEl.value, caloriesEl.value);
  useIndexedDb("exercise", "exerciseStore", "put", {
    _id: exerciseEl.value,
    name: exerciseEl.value,
    value: caloriesEl.value
  });
}

function reset(e) {
  e.preventDefault();
  const total = 0;
  totalBurntEl.innerText = total;
  netCalEl.innerText = total;
  exerciseListEl.innerHTML = "";
  useIndexedDb("exercise", "exerciseStore", "clear");
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;

useIndexedDb("exercise", "exerciseStore", "get").then(results => {
  results.forEach(exercise => {
    addToList(exercise.name, exercise.value);
  });
});
