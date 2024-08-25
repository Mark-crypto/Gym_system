import { LineGraph } from "../charts/LineGraph";
import { Donut } from "../charts/Donut";
import { BarChart } from "../charts/BarChart";
import { BarChart2 } from "../charts/BarChart2";
import { AdminNav } from "../components/AdminNav";
import "./reports.css";

export const Reports = () => {
  // const [reports, setReports] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  return (
    <>
      <AdminNav />
      <div className="top-elements">
        <div className="element-1">
          <p className="bold">Members</p>
          <p style={{ color: "#002244", fontSize: "20px", fontWeight: "bold" }}>
            47
          </p>
        </div>
        <div className="element-2">
          <p className="bold">Employees</p>
          <p style={{ color: "#002244", fontSize: "20px", fontWeight: "bold" }}>
            10
          </p>
        </div>
        <div className="element-3">
          <p className="bold">Revenue(p.a)</p>
          <p style={{ color: "#002244", fontSize: "20px", fontWeight: "bold" }}>
            Sh 1,000,000
          </p>
        </div>
      </div>
      <div className="middle-elements">
        <LineGraph />
        <Donut />
      </div>
      <div className="bottom-elements">
        <div className="first-lot">
          <BarChart />
          <BarChart2 />
        </div>
        <div className="last-lot">
          <h4>Employees Perfomance</h4>
          <table>
            <th>
              <td>#</td>
              <td>Employee</td>
              <td>Performance</td>
            </th>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>90%</td>
            </tr>
          </table>
        </div>
      </div>
      <p>memberships to month</p>
      <p>service to demand</p>
      <p>revenue to month</p>
      <p>revenue to service</p>
      <p>Below: Revenue to month(line graph)</p>
      <p>Side: Memberships to month (donut chart)</p>
      <p>Below: Service to demand (bar graph)</p>
      <p>Below: revenue to service(bar graph)</p>
      <p>Side: Employees performance</p>
    </>
  );
};
