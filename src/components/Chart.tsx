import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Line,
  Bar,
  ComposedChart,
  type LegendProps,
} from "recharts";
interface LegendItem {
  color: string;
  value: string;
}

interface CustomLegendProps extends LegendProps {
  payload?: LegendItem[];
}
interface ChartData {
  [key: string]: string | number;
}
interface UniversalChartProps {
  type?: "line" | "bar" | "area" | "multi-line";
  data: ChartData[];
  xKey: string;
  yKeys: string[];
  colors?: string[];
  title?: string;
  subtitle?: string;
  height?: number;
}
const CustomLegend = ({ payload = [] }: CustomLegendProps) => {
  return (
    <ul className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-300">
      {payload?.map((entry: LegendItem, index: number) => (
        <li key={index} className="flex items-center gap-2">
          <span
            className="block w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          {entry.value.charAt(0).toUpperCase() + entry.value.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default function UniversalChart  ({
  type = "line", // "line" | "bar" | "area" | "multi-line"
  data = [],
  xKey = "name",
  yKeys = [],
  colors = [],
  title = "",
  subtitle = "",
  height = 300,
}: UniversalChartProps) {
    const filteredYKeys = yKeys.filter((key) =>
        data.some((d) => typeof d[key] !== "undefined")
      );
    
      const renderChart = () => {
        switch (type) {
          case "bar":
            return (
              <ComposedChart
                data={data}
                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#525151" strokeDasharray="3 3" />
                <XAxis dataKey={xKey} tick={{ fill: "#9E9E9E" }} />
                <YAxis tick={{ fill: "#9E9E9E" }} />
                <Tooltip />
                {filteredYKeys.map((key, idx) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    fill={colors[idx] || "#16a34a"}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </ComposedChart>
            );
    
          case "area":
            return (
              <ComposedChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#525151" strokeDasharray="3 3" />
                <XAxis dataKey={xKey} tick={{ fill: "#9E9E9E" }} />
                <YAxis tick={{ fill: "#9E9E9E" }} />
                <Tooltip />
                {filteredYKeys.map((key, idx) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[idx] || "#16a34a"}
                    fill={(colors[idx] || "#16a34a") + "33"}
                  />
                ))}
              </ComposedChart>
            );
    
          case "multi-line":
            return (
              <ComposedChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#525151" strokeDasharray="3 3" />
                <XAxis dataKey={xKey} tick={{ fill: "#9E9E9E" }} />
                <YAxis tick={{ fill: "#9E9E9E" }} />
                <Tooltip />
                <Legend content={<CustomLegend />} />
                {filteredYKeys.map((key, idx) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[idx] || "#16a34a"}
                    strokeWidth={2}
                    dot={{ r: 0 }}
                  />
                ))}
              </ComposedChart>
            );
    
          default: // "line"
            return (
              <ComposedChart
                data={data}
                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#525151" strokeDasharray="3 3" />
                <XAxis dataKey={xKey} tick={{ fill: "#9E9E9E" }} />
                <YAxis tick={{ fill: "#9E9E9E" }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey={filteredYKeys[0]}
                  stroke={colors[0] || "#16a34a"}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            );
        }
      };
  return (
     <div className="col-span-12 xl:col-span-6 bg-white rounded-[9px] px-[18px] py-5 shadow hover:shadow-xl transition duration-300 space-y-5 w-full">
      {(title || subtitle) && (
        <div>
          <h2 className="font-medium text-xl">{title}</h2>
          {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
        </div>
      )}

      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  )
}
