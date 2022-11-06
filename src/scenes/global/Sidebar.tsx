import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { IScene } from "../scenes.interface";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlined,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const menuList: IScene[] = [
  {
    id: 1,
    parent: null,
    children: [{ id: 1, title: "Dashboard", to: "/", icon: <HomeOutlined /> }],
  },
  {
    id: 2,
    parent: "Data",
    children: [
      { id: 1, title: "Manage Team", to: "/team", icon: <PeopleOutlined /> },
      {
        id: 2,
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlined />,
      },
      {
        id: 3,
        title: "Invoices Balance",
        to: "/invoices",
        icon: <ReceiptOutlined />,
      },
    ],
  },
  {
    id: 3,
    parent: "Pages",
    children: [
      { id: 1, title: "Profile Form", to: "/form", icon: <PersonOutlined /> },
      {
        id: 2,
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlined />,
      },
      { id: 3, title: "FAQ Page", to: "/faq", icon: <HelpOutlined /> },
    ],
  },
  {
    id: 4,
    parent: "Charts",
    children: [
      { id: 1, title: "Bar Chart", to: "/bar", icon: <BarChartOutlined /> },
      {
        id: 2,
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlined />,
      },
      { id: 3, title: "Line Chart", to: "/line", icon: <TimelineOutlined /> },
      {
        id: 4,
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlined />,
      },
    ],
  },
];

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(menuList[0].children[0].to);

  return (
    <Box
      left="0"
      top="0"
      minHeight="100vh"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: `5px 35px 5px 20px !important`,
        },
        "& .pro-inner-item:hover": {
          padding: `5px 35px 5px 20px !important`,
        },
        "& .pro-menu-item.active": {
          color: `#6870fa !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ userSelect: "none" }}
                >
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box mb="25px" display={isCollapsed ? "none" : "block"}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="https://source.unsplash.com/random/?avatar"
                alt="Avatar image"
                width="100px"
                height="100px"
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Arozhdan
              </Typography>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ whiteSpace: "nowrap" }}
              >
                React Admin
              </Typography>
            </Box>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {menuList.map((section) => (
              <Box key={section.id}>
                {section.parent && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {section.parent}
                  </Typography>
                )}
                {section.children.map((child) => (
                  <MenuItem
                    icon={child.icon}
                    key={child.id}
                    active={selected === child.to}
                    onClick={() => setSelected(child.to)}
                    style={{ color: colors.grey[100] }}
                  >
                    <Typography>{child.title}</Typography>
                    <Link to={child.to} />
                  </MenuItem>
                ))}
              </Box>
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
