import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import notifications from "./Notifications";
import IconButton from "@mui/material/IconButton";

export default function NotificationPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleBadgeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack spacing={2} direction="row">
      <Badge
        badgeContent={notifications.length}
        color="error"
        onClick={handleBadgeClick}
      >
        <IconButton
          aria-label="Notifications"
          onClick={handleBadgeClick}
          style={{
            backgroundColor: "white",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
          }}
          sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <NotificationsActiveOutlinedIcon color="action" />
        </IconButton>
      </Badge>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            marginTop: "15px", // Ajustar el espacio entre el popover y el badge
          },
        }}
      >
        {/* Contenido del cuadro de notificaciones */}
        <Box sx={{ p: 2 }}>
          {notifications.map((notification, index) => (
            <div key={index}>
              <div>{notification.title}</div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {notification.description}
              </div>
              <div style={{ fontSize: "10px", textAlign: "right" }}>
                {notification.date}
              </div>
              {index !== notifications.length - 1 && <hr />} {/* Separador */}
            </div>
          ))}
        </Box>
      </Popover>
    </Stack>
  );
}
