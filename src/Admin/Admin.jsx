import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import "./Admin.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-pro-sirs.onrender.com/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);
console.log(orders);
  const columns = [
    { field: "orderId", headerName: "Order ID", width: 120 },
  {
  field: "username",
  headerName: "Username",
  width: 150,
  valueGetter: (params) => params?.row?.username || "NoName",
}
,
    { field: "eventId", headerName: "Event ID", width: 120 },
    { field: "totalPrice", headerName: "Total Price", width: 150 },
    { field: "paymentMethod", headerName: "Payment Method", width: 150 },
  ];

 
  const totalRevenue = useMemo(() => {
    return orders.reduce((sum, order) => sum + Number(order.totalPrice || 0), 0);
  }, [orders]);

  
  const chartData = useMemo(() => {
    const grouped = {};

    orders.forEach((order) => {
      const method = order.paymentMethod || "Unknown";
      grouped[method] = (grouped[method] || 0) + 1;
    });

    return Object.keys(grouped).map((key) => ({
      name: key,
      value: grouped[key],
    }));
  }, [orders]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];


  const monthlyStats = useMemo(() => {
    const months = {};

    orders.forEach((order) => {
      if (!order.createdAt) return;

      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;

      months[month] = (months[month] || 0) + 1;
    });

    return months;
  }, [orders]);

  return (
  <div className="admin-container">
    <h2>Admin Dashboard</h2>

    <div className="dashboard-card">
      Tổng doanh thu: ${totalRevenue.toLocaleString()}
    </div>

    <div className="datagrid-wrapper">
      <DataGrid
        rows={orders}
        columns={columns}
        getRowId={(row) => row.orderId}
      />
    </div>

    <h3>Biểu đồ phương thức thanh toán</h3>

    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="monthly-wrapper">
      <h3>Thống kê đơn hàng theo tháng</h3>
      {Object.keys(monthlyStats).length === 0 && <p>No data</p>}
      {Object.entries(monthlyStats).map(([month, count]) => (
        <p key={month}>
          Tháng {month}: {count} đơn hàng
        </p>
      ))}
    </div>
  </div>
);
}
