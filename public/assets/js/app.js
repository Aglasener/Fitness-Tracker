import { subtract, add } from "./calculations";
import { calIntakeEl, totalBurntEl, netCalEl, exerciseEl, caloriesEl, exerciseListEl, submitBtn, resetBtn } from "./elements";
import { saveExercise, loadExercises, resetExercise } from "./api";

function addToList(name, calories) {
  exerciseListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Calories burnt: ${calories}</span></li>`;
}

function submit(e) {
  console.log(calIntakeEl.innerText);
  e.preventDefault();
  console.log(calIntakeEl.innerText);
  const total = subtract(Number(calIntakeEl.innerText), caloriesEl.value);
  totalBurntEl.innerText = add(Number(totalBurntEl.innerText), caloriesEl.value);
  netCalEl.innerText = total;
  addToList(exerciseEl.value, caloriesEl.value);
  let data = {"exercise": exerciseEl.value, "calories": caloriesEl.value};
  saveExercise(data);
}

function reset(e) {
  e.preventDefault();
  const total = 0;
  totalBurntEl.innerText = total;
  netCalEl.innerText = total;
  exerciseListEl.innerHTML = "";
  resetExercise();
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;

loadExercises().then(function(results) {
  results.forEach(function(exercise,calories){
    addToList(exercise, calories);
  })
});