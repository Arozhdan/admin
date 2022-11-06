import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";

interface Props {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", textTransform: "uppercase" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
