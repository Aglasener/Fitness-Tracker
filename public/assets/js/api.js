export function loadExercises() {
    return fetch("/exercises")
      .then(res => res.json())
      .catch(err => reject(err));
}

export function saveExercise(data) {
      return $.ajax({
        type: "POST",
        url: "/submit",
        dataType: "json",
        data: {
          exercise: data.exercise,
          calories: data.calories
        }
      })
      .then (function(results) {
        console.log(results);
      })
}

export function resetExercise() {
  return $.ajax({
    type: "DELETE",
    url: "/reset"
  })
  
}