const uploadTimes = {
  time1: Date.now() - (20 * 60 * 1000), // 20 minutes ago
  time2: Date.now() - (5 * 60 * 1000),  // 5 minutes ago
  time3: Date.now() - (1 * 60 * 1000)   // 1 minute ago
};

function updateTimeAgo() {
  const now = Date.now();

  Object.keys(uploadTimes).forEach(id => {
      const timeDiff = Math.floor((now - uploadTimes[id]) / 60000); // Difference in minutes

      let displayText;
      if (timeDiff < 1) {
          displayText = "Just now";
      } else {
          displayText = `${timeDiff} minutes ago`;
      }

      document.getElementById(id).textContent = displayText;
  });
}

setInterval(updateTimeAgo, 1000); // Refresh every second
updateTimeAgo(); // Initial call