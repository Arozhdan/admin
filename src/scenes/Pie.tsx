import { Box } from "@mui/material";
import { Header, PieChart } from "../components";

export const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};
