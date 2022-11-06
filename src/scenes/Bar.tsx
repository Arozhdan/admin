import { Box } from "@mui/material";
import { Header, BarChart } from "../components";

export const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};
