function fetchHotels(limit, skip) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allHotels = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: `Hotel #${i + 1}`,
      }));
      const hotels = allHotels.slice(skip, skip + limit);
      resolve({ hotels });
    }, 200); // Simulated delay
  });
}

const hotelList = document.getElementById("hotels-list");
const showMoreBtn = document.getElementById("show-more");
let limit = 5;
let skip = 0;

function displayHotels(l, s) {
  let hotelApiRes = [];
  fetchHotels(l, s).then((res) => {
    hotelApiRes = res?.hotels;
    hotelApiRes.forEach((hotel) => {
      const list = document.createElement("li");
      list.textContent = hotel.name;
      hotelList.appendChild(list);
    });
    skip += limit;
    if (skip >= 15) {
      showMoreBtn.style.display = "none";
    }
  });
}

displayHotels(limit, skip);

showMoreBtn.addEventListener("click", function () {
  displayHotels(limit, skip);
});
