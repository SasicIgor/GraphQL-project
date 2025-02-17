import { type Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const PopularLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const mostUsedLanguages = calculatePopularLanguages(repositories);
  if (mostUsedLanguages[0].count === 0) return;
  const chartConfig = {
    language: {
      label: "Language",
      color: "#2564eb",
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Used Language</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={mostUsedLanguages}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularLanguages;
