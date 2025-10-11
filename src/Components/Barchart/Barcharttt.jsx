import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import formatNumber from "../../utilities/formatNumber";

const Barcharttt = ({ratings}) => {
    return (
    <div className="w-full h-86">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={(value) => formatNumber(value)} />
            <YAxis type="category" dataKey="name" />
            <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Count']} />
            <Bar dataKey="count" fill="#FF9500" />
          </BarChart>
        </ResponsiveContainer>
    </div>
    );
};

export default Barcharttt;