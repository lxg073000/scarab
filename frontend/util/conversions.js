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

  return `${paceMinutes}:${paceSeconds}`;
}

export const map_options_slim = {
  fullscreenControl: false,
  disableDefaultUI: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dde2e3",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {
          color: "#c6e8b3",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8493a9",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c6e8b3",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c1d1d6",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#a9b8bd",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          color: "#f8fbfc",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text",
      stylers: [
        {
          color: "#979a9c",
        },
        {
          visibility: "on",
        },
        {
          weight: 0.5,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#827e7e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#3b3c3c",
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a6cbe3",
        },
        {
          visibility: "on",
        },
      ],
    },
  ],
};

export const map_options_full = {
  center: { lat: 40.7623, lng: -73.985 },
  zoom: 13,
  clickableIcons: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dde2e3",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {
          color: "#c6e8b3",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8493a9",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c6e8b3",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c1d1d6",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#a9b8bd",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          color: "#f8fbfc",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text",
      stylers: [
        {
          color: "#979a9c",
        },
        {
          visibility: "on",
        },
        {
          weight: 0.5,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#827e7e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#3b3c3c",
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a6cbe3",
        },
        {
          visibility: "on",
        },
      ],
    },
  ],
};
