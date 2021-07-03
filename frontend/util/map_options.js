export const options = [
  {
    feature: "poi",
    element: "labels",
    visibility: "off",
  },
  {
    feature: "poi.park",
    element: "labels.text",
    visibility: "on",
  },
  {
    feature: "transit",
    element: "all",
    visibility: "off",
  },
  {
    feature: "landscape.natural",
    element: "geometry",
    color: "0xdde2e3",
    visibility: "on",
  },
  {
    feature: "poi.park",
    element: "all",
    color: "0xc6e8b3",
    visibility: "on",
  },
  {
    feature: "poi.park",
    element: "labels.text.fill",
    color: "0x8493a9",
    visibility: "on",
  },
  {
    feature: "poi.park",
    element: "labels.text.stroke",
    color: "0xffffff",
    visibility: "on",
  },
  {
    feature: "poi.park",
    element: "geometry.fill",
    color: "0xc6e8b3",
    visibility: "on",
  },
  {
    feature: "road",
    element: "geometry.fill",
    visibility: "on",
  },
  {
    feature: "road",
    element: "geometry.stroke",
    visibility: "off",
  },
  {
    feature: "road",
    element: "labels",
    visibility: "on",
  },
  {
    feature: "road",
    element: "labels.text.fill",
    visibility: "on",
  },
  {
    feature: "road",
    element: "labels.text.stroke",
    visibility: "on",
  },
  {
    feature: "road.highway",
    element: "geometry.fill",
    color: "0xc1d1d6",
    visibility: "on",
  },
  {
    feature: "road.highway",
    element: "geometry.stroke",
    color: "0xa9b8bd",
    visibility: "on",
  },
  {
    feature: "road.local",
    element: "all",
    color: "0xf8fbfc",
  },
  {
    feature: "road.local",
    element: "labels.text",
    color: "0x979a9c",
    visibility: "on",
    weight: 0.5,
  },
  {
    feature: "road.local",
    element: "labels.text.fill",
    visibility: "on",
    color: "0x827e7e",
  },
  {
    feature: "road.local",
    element: "labels.text.stroke",
    color: "0x3b3c3c",
    visibility: "off",
  },
  {
    feature: "water",
    element: "geometry.fill",
    color: "0xa6cbe3",
    visibility: "on",
  },
];

export const encodeOptions = (mapRules) => {
  let uriString = "";
  mapRules.forEach((style) => {
    let rule = [];
    for (const prop in style) {
      rule.push([`${prop}:${style[prop]}`]);
    }
    rule = rule.join("|");
    uriString += `style=${rule}&`;
  });
  return encodeURI(uriString);
};
