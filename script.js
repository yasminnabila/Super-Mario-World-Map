function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "2df3004fb98b0693",
    center: { lat: -6.125018940025437, lng: 106.83837820218818 },
    zoom: 18,
  });

  // -6.124517563076635, 106.83824677394564

  const markers = [
    [
      "Yoshi's House",
      -6.124677577050092,
      106.83923919127386,
      "yoshi_house.svg",
      38,
      31,
    ],
    [
      "You Are Here",
      -6.124101526525594,
      106.83669109272248,
      "pointer.svg",
      30,
      47.8,
    ],
    [
      "Ghost House",
      -6.125056276593356,
      106.8372811787028,
      "ghosthouse.svg",
      40,
      48,
    ],
    ["Castle", -6.12454689897635, 106.83629949020825, "castle.svg", 40, 53],
    ["Warp Pipe", -6.125394972436204, 106.83902461455375, "pipe.svg", 38, 42.5],
    ["Star World", -6.12533896764234, 106.83557261156565, "star.svg", 38, 38],
    [
      "Donut Plains",
      -6.124880261353325,
      106.84096385167082,
      "hill_with_eyes.svg",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      -6.125021606935257,
      106.84100140259683,
      "hill_with_eyes.svg",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      -6.124938933108865,
      106.84107918665788,
      "hill_with_eyes.svg",
      50,
      60.7,
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currentMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });

    for (let i = 0; i < markers.length; i++) {
      const currentMarker = markers[i];

      const marker = new google.maps.Marker({
        position: { lat: currentMarker[1], lng: currentMarker[2] },
        map,
        title: currentMarker[0],
        icon: {
          url: currentMarker[3],
          scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5]),
        },
        animation: google.maps.Animation.DROP,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: currentMarker[0],
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }
}
