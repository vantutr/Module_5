async function getCovidData() {
  try {
    const res = await fetch("http://localhost:3005/countries/");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const data = await getCovidData();

  // Hàm để định dạng lại ngày tháng
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Lấy ra năm, tháng, ngày và nối lại
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="container">
      <h1>Vietnam's COVID-19 Information</h1>
      <table className="covid-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {/* Kiểm tra xem data có phải là mảng và có phần tử không */}
          {Array.isArray(data) && data.length > 0 ? (
            data.map((day) => (
              <tr key={day.Date}>
                <td>{formatDate(day.Date)}</td>
                <td>{day.Confirmed.toLocaleString()}</td>
                <td>{day.Active.toLocaleString()}</td>
                <td>{day.Recovered.toLocaleString()}</td>
                <td>{day.Deaths.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Could not load data or no data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
