async function getTheForecast(city) {
  let data = "";
  while (data === "")
    try {
      let dataCall = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=a3c4eaf444594b0884a153639240905&q=${city}&days=3`,
        { mode: "cors" }
      );
      data = await dataCall.json();
      console.log(data);
      document.querySelector(".errDisplay").textContent = "";
      let currentDay = [
        data.current.condition.icon,
        data.current.condition.text,
        data.current.temp_c,
        data.current.feelslike_c,
      ];
      let forecastDay0 = [
        data.forecast.forecastday[0].date,
        data.forecast.forecastday[0].day.avgtemp_c,
        data.forecast.forecastday[0].day.condition.icon,
        data.forecast.forecastday[0].day.condition.text,
        data.forecast.forecastday[0].day.maxtemp_c,
        data.forecast.forecastday[0].day.mintemp_c,
      ];
      let forecastDay1 = [
        data.forecast.forecastday[1].date,
        data.forecast.forecastday[1].day.avgtemp_c,
        data.forecast.forecastday[1].day.condition.icon,
        data.forecast.forecastday[1].day.condition.text,
        data.forecast.forecastday[1].day.maxtemp_c,
        data.forecast.forecastday[1].day.mintemp_c,
      ];
      let forecastDay2 = [
        data.forecast.forecastday[2].date,
        data.forecast.forecastday[2].day.avgtemp_c,
        data.forecast.forecastday[2].day.condition.icon,
        data.forecast.forecastday[2].day.condition.text,
        data.forecast.forecastday[2].day.maxtemp_c,
        data.forecast.forecastday[2].day.mintemp_c,
      ];

      let day0Date = forecastDay0[0].split("-");
      const currentDayContainer = document.querySelector(".today");
      let currentDayImg = document.createElement("img");
      currentDayImg.src = `http:${currentDay[0]}`;
      let cityInfo = document.createElement("h3");
      cityInfo.textContent = document.querySelector("#city").value.at(0).toUpperCase()+document.querySelector("#city").value.slice(1,);
      let currentDayInfo = document.createElement("div");
      currentDayInfo.innerHTML = `
        ${day0Date[2]}-${day0Date[1]}-${day0Date[0]} <br>
        ${currentDay[1]}<br>
        Current Temperature: ${currentDay[2]}°C<br>
        Feels like: ${currentDay[3]}°C`;
        currentDayContainer.appendChild(cityInfo);
      currentDayContainer.appendChild(currentDayImg);
      currentDayContainer.appendChild(currentDayInfo);

      const day0Container = document.querySelector(".day1");
      let day0Img = document.createElement("img");
      day0Img.src = `http:${forecastDay0[2]}`;
      let day0Info = document.createElement("div");
      day0Info.innerHTML = `
      ${day0Date[2]}-${day0Date[1]}-${day0Date[0]} <br>
      Average Temperature: ${forecastDay0[1]}°C<br>
      ${forecastDay0[3]}<br>
      Max Temperature: ${forecastDay0[4]}°C<br>
      Min Temperature: ${forecastDay0[5]}°C<br>`
      day0Container.appendChild(day0Img);
      day0Container.appendChild(day0Info);


      const day1Container = document.querySelector(".day2");
      let day1Img = document.createElement("img");
      day1Img.src = `http:${forecastDay1[2]}`;
      let day1Info = document.createElement("div");
      let day1Date = forecastDay1[0].split("-");
      day1Info.innerHTML = `
      ${day1Date[2]}-${day1Date[1]}-${day1Date[0]} <br>
      Average Temperature: ${forecastDay1[1]}°C<br>
      ${forecastDay1[3]}<br>
      Max Temperature: ${forecastDay1[4]}°C<br>
      Min Temperature: ${forecastDay1[5]}°C<br>`
      day1Container.appendChild(day1Img);
      day1Container.appendChild(day1Info);


      const day2Container = document.querySelector(".day3");
      let day2Img = document.createElement("img");
      day2Img.src = `http:${forecastDay2[2]}`;
      let day2Info = document.createElement("div");
      let day2Date = forecastDay2[0].split("-");
      day2Info.innerHTML = `
      ${day2Date[2]}-${day2Date[1]}-${day2Date[0]} <br>
      Average Temperature: ${forecastDay2[1]}°C<br>
      ${forecastDay2[3]}<br>
      Max Temperature: ${forecastDay2[4]}°C<br>
      Min Temperature: ${forecastDay2[5]}°C<br>`
      day2Container.appendChild(day2Img);
      day2Container.appendChild(day2Info);
    } catch (err) {
      document.querySelector(".errDisplay").innerHTML = "Failed to get data";
      console.log(err);
    }
}

document.querySelector("#city + button").addEventListener("click", () => {
  getTheForecast(document.querySelector("#city").value);
});

document.querySelector("#city").addEventListener("click", () => {
  document.querySelector("#city").value = "";
});
