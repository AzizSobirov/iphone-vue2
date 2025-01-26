/**
 * Converts a date string into a readable relative time format.
 * @param dateString - Date string in "DD-MM-YYYY HH:mm" format.
 */
export const dateToTime = (dateString) => {
  const updatedDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - updatedDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (
    updatedDate.getDate() === yesterday.getDate() &&
    updatedDate.getMonth() === yesterday.getMonth() &&
    updatedDate.getFullYear() === yesterday.getFullYear()
  ) {
    return "Yesterday";
  }

  const options = {
    day: "2-digit",
    month: "long",
  };
  return updatedDate.toLocaleDateString(undefined, options); // Uses system locale for formatting
};

/**
 * Calculates the difference in days between today and a given date.
 * @param dateString - Date string in "DD-MM-YYYY HH:mm" format.
 * @returns The number of days from now to the given date.
 */
export const getDateDays = (dateString) => {
  const parsedDate = new Date(dateString);
  const now = new Date();

  // Calculate the difference in time (milliseconds)
  const diffInMs = now.getTime() - parsedDate.getTime();

  // Convert milliseconds to days
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};

export const formatTime = (seconds, type = "mm:ss") => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  // Add leading zeros if <10
  const formattedHrs = hrs > 0 ? String(hrs).padStart(2, "0") : "00";
  const formattedMins = String(mins).padStart(2, "0");
  const formattedSecs = String(secs).padStart(2, "0");

  if (type === "mm:ss") {
    return `${formattedMins}:${formattedSecs}`;
  } else {
    return `${formattedHrs}:${formattedMins}:${formattedSecs}`;
  }
};
