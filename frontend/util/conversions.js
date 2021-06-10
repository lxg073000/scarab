export function formatDuration(durationArray) {
  const formattedDuration = [];
  if (durationArray[0] > 0) {
    formattedDuration.push(durationArray[0]);
  }

  durationArray.slice(1).forEach((dur) => {
    dur < 10
      ? formattedDuration.push("0" + dur)
      : formattedDuration.push(`${dur}`);
  });
  return formattedDuration.join(":");
}

export function formatTravelMode(travelMode) {
  let formattedTravelMode = "";

  if (travelMode === "WALKING") {
    formattedTravelMode = "fas fa-running";
  } else if (travelMode === "DRIVING") {
    formattedTravelMode = "fas fa-car-side";
  } else if (travelMode === "BICYCLING") {
    formattedTravelMode = "fas fa-bicycle";
  }
  return formattedTravelMode;
}

export function formatTime(startTime) {
  let formattedTime = new Date();
  formattedTime.setHours(startTime.split(":")[0]);
  formattedTime.setMinutes(startTime.split(":")[1]);
  formattedTime = formattedTime.toLocaleTimeString();

  return formattedTime;
}

export function calcPace(hours, minutes, seconds, miles) {
  let totalMinutes = hours * 60 + minutes + seconds / 60;
  let pace = totalMinutes / miles;
  let paceMinutes = Math.floor(pace);
  let paceSeconds = Math.round((pace - paceMinutes) * 60);

  if (paceSeconds < 10) {
    paceSeconds = "0" + paceSeconds;
  }
  debugger;
  return `${paceMinutes}:${paceSeconds}`;
}
