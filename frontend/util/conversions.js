export function formatDuration(durationArray) {
  const formattedDuration = [];

  durationArray.forEach((dur) => {
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
    formattedTravelMode = "fas fa-car";
  } else if (travelMode === "CYCLING") {
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
