import { LineGraph } from "../charts/LineGraph";
import { Donut } from "../charts/Donut";

export const Reports = () => {
  // const [reports, setReports] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  return (
    <>
      <h4>Reports</h4>
      <LineGraph />
      <Donut />
      <p>memberships to month</p>
      <p>service to demand</p>
      <p>revenue to month</p>
      <p>revenue to service</p>
      <p>The layout: top three members, employees, revenue(annual)</p>
      <p>Below: Revenue to month(line graph)</p>
      <p>Side: Memberships to month (donut chart)</p>
      <p>Below: Service to demand (bar graph)</p>
      <p>Below: revenue to service(bar graph)</p>
      <p>Side: Employees performance</p>
    </>
  );
};
