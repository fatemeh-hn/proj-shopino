export type SnackbarSeverity = "success" | "error" | "warning" | "info";

export type SnackbarNotification = {
  message: string;
  severity: SnackbarSeverity;
};

type SnackbarListener = (notification: SnackbarNotification) => void;

const listeners = new Set<SnackbarListener>();

export function showSnackbar(
  message: string,
  severity: SnackbarSeverity = "info",
) {
  listeners.forEach((listener) => listener({ message, severity }));
}

export function subscribeToSnackbar(listener: SnackbarListener) {
  listeners.add(listener);
  return () => {listeners.delete(listener)};
}
