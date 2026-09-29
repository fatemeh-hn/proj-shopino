import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import {
  SnackbarNotification,
  subscribeToSnackbar,
} from "../../api/snackbarNotifications";

function GlobalSnackbar() {
  const [notification, setNotification] = useState<SnackbarNotification>({
    message: "",
    severity: "info",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return subscribeToSnackbar((nextNotification) => {
      setNotification(nextNotification);
      setOpen(true);
    });
  }, []);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={5000}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Alert
        severity={notification.severity}
        variant="filled"
        onClose={() => setOpen(false)}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
}

export default GlobalSnackbar;
