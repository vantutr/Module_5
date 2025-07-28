// Hàm để lấy dữ liệu thời tiết từ API
async function getWeatherData() {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    console.error("API Key for OpenWeatherMap is missing.");
    return {
      error: "API Key is missing. Please add it to your .env.local file.",
    };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 401) {
      return { error: "Invalid API Key. Please check your key." };
    }
    if (data.cod === "404") {
      return { error: "City not found." };
    }
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    return data;
  } catch (error) {
    console.error(error);
    return { error: "Could not fetch weather data." };
  }
}

export default async function WeatherPage() {
  const data = await getWeatherData();

  // Xử lý trường hợp có lỗi hoặc chưa có API Key
  if (data.error) {
    return <div className="error-message">{data.error}</div>;
  }

  const { main, weather, wind } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const temperature = Math.round(main.temp);
  const windSpeedKmh = Math.round(wind.speed * 3.6); // Chuyển từ m/s sang km/h

  return (
    <div className="weather-card">
      <div className="weather-icon">
        <img src={iconUrl} alt={weather[0].description} />
      </div>
      <div className="weather-temp">
        {temperature}
        <span>°C</span>
      </div>
      <div className="weather-details">
        <div>Main: {weather[0].main}</div>
        <div>Humidity: {main.humidity}%</div>
        <div>Wind: {windSpeedKmh} km/h</div>
      </div>
    </div>
  );
}
