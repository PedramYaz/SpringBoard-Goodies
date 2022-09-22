const store = Redux.createStore(rootMood);

const moodElement = document.querySelector("div");

document.getElementById("happy").addEventListener("click", function () {
  store.dispatch({ type: "HAPPY", payload: ":)" });
});

document.getElementById("sad").addEventListener("click", function () {
  store.dispatch({ type: "SAD", payload: ":(" });
});

document.getElementById("angry").addEventListener("click", function () {
  store.dispatch({ type: "ANGRY", payload: ":x" });
});

document.getElementById("confused").addEventListener("click", function () {
  store.dispatch({ type: "CONFUSED", payload: ":?" });
});

function changeMood() {
  moodElement.innerHTML = store.getState().mood;
}

changeMood();
store.subscribe(changeMood);
