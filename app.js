// Sample prompts
const prompts = [
  "What are you grateful for today?",
  "What challenge are you facing?",
  "What do you hope to accomplish this week?",
  "Describe a moment that made you smile today.",
  "What is something you've learned recently?",
  "What does success mean to you right now?",
  "What would you tell your younger self?",
  "What are three things you're looking forward to?",
  "What is a dream you've been putting off?",
  "What makes you feel most alive?",
  "What is one thing you could do differently tomorrow?",
  "What is your biggest fear right now?",
  "What advice would you give to a friend in your situation?",
  "What is something you're proud of?",
  "What is one thing you want to let go of?",
  "What brings you peace?",
  "What is a skill you'd like to develop?",
  "What does your ideal day look like?",
  "What is something you're trying to understand better?",
  "What is a book or movie that changed your perspective?",
  "What is something you're working on forgiving?",
  "What is a quality you admire in others?",
  "What is something you're doing for the first time?",
  "What is a dream you had as a child?",
  "What is something you're intentionally practicing?",
  "What is a quote that inspires you?",
  "What is something you're choosing to believe today?",
  "What is a boundary you're setting for yourself?",
  "What is something you're rediscovering about yourself?",
  "What is a moment from today you want to remember?",
  "What is something you're saying no to?",
  "What is a value that guides your decisions?",
  "What is something you're creating?",
  "What is a gift you've given to yourself recently?",
  "What is something you're celebrating right now?",
  "What is a question you've been asking yourself lately?",
  "What is something you're choosing to focus on?",
  "What is a tradition you'd like to start?",
  "What is something you're excited about in the future?",
  "What is a lesson from your past that still guides you?",
  "What is something you're grateful for in your relationships?",
  "What is a place that feels like home to you?",
  "What is something you're curious about?",
  "What is a compliment you've received that stuck with you?",
  "What is something you're passionate about?",
  "What is a tradition you'd like to start?",
  "What is something you're excited about in the future?",
  "What is a lesson from your past that still guides you?",
  "What is something you're grateful for in your relationships?",
  "What is a place that feels like home to you?",
  "What is something you're curious about?",
  "What is a compliment you've received that stuck with you?",
  "What is something you're passionate about?",
  "What is a tradition you'd like to start?",
  "What is something you're excited about in the future?",
  "What is a lesson from your past that still guides you?",
  "What is something you're grateful for in your relationships?",
  "What is a place that feels like home to you?",
  "What is something you're curious about?",
  "What is a compliment you've received that stuck with you?",
  "What is something you're passionate about?",
  "What is a tradition you'd like to start?",
  "What is something you're excited about in the future?",
  "What is a lesson from your past that still guides you?",
  "What is something you're grateful for in your relationships?",
  "What is a place that feels like home to you?",
  "What is something you're curious about?",
  "What is a compliment you've received that stuck with you?",
  "What is something you're passionate about?",
  "What is a tradition......",
];

// Mood options
const moodOptions = ["😊", "😢", "😍", "😠", "😴", "🤩", "🤔", "😎"];
const additionalMoods = [
  "🥳",
  "🥰",
  "🤪",
  "😇",
  "🥺",
  "😤",
  "🤯",
  "🥶",
  "😱",
  "😭",
  "🤮",
  "🤧",
  "🤠",
  "🥸",
  "🥷",
  "👨‍🚀",
  "🧚‍♀️",
  "🧜‍♂️",
  "🧞‍♀️",
  "🧛‍♂️",
];

// Badges
const badges = [
  {
    id: "first",
    name: "First Message",
    description: "Send your first message",
    earned: false,
    icon: "fas fa-feather",
  },
  {
    id: "week",
    name: "7-Day Streak",
    description: "Write messages for 7 days in a row",
    earned: false,
    icon: "fas fa-calendar-week",
  },
  {
    id: "month",
    name: "Monthly Writer",
    description: "Write messages for 30 days",
    earned: false,
    icon: "fas fa-calendar-alt",
  },
  {
    id: "reflector",
    name: "Deep Thinker",
    description: "Use 10 different reflection prompts",
    earned: false,
    icon: "fas fa-lightbulb",
  },
  {
    id: "sentiment",
    name: "Emotional Explorer",
    description: "Express 5 different moods",
    earned: false,
    icon: "fas fa-heart",
  },
  {
    id: "timekeeper",
    name: "Time Traveler",
    description: "Create messages with different delivery dates",
    earned: false,
    icon: "fas fa-clock",
  },
  {
    id: "diarist",
    name: "Dedicated Diarist",
    description: "Write 20 messages",
    earned: false,
    icon: "fas fa-book",
  },
  {
    id: "sentimental",
    name: "Sentimental Soul",
    description: "Protect 5 messages with passwords",
    earned: false,
    icon: "fas fa-lock",
  },
];

// Initialize app state
let state = {
  messages: [],
  currentMood: null,
  streak: 0,
  usedPrompts: [],
  usedMoods: new Set(),
  lastEntryDate: null,
  totalPossibleBadges: badges.length,
  notificationPermission: false,
  notificationScheduled: false,
};

// DOM Elements
const moodSelectors = document.querySelectorAll(".mood-option");
const additionalMoodSelectors = document.querySelectorAll(".additional-mood");
const messageInput = document.getElementById("message");
const deliveryDateInput = document.getElementById("deliveryDate");
const protectCheckbox = document.getElementById("protectMessage");
const passwordInput = document.getElementById("password");
const saveButton = document.getElementById("saveMessage");
const pendingMessagesContainer = document.getElementById("pendingMessages");
const deliveredMessagesContainer = document.getElementById("deliveredMessages");
const allMessagesContainer = document.getElementById("allMessages");
const dailyPrompt = document.getElementById("dailyPrompt");
const newPromptBtn = document.getElementById("newPrompt");
const usePromptBtn = document.getElementById("usePrompt");
const moodTimeline = document.getElementById("moodTimeline");
const messageCountEl = document.getElementById("messageCount");
const streakCountEl = document.getElementById("streakCount");
const deliveredCountEl = document.getElementById("deliveredCount");
const badgesContainer = document.getElementById("badgesContainer");
const exportBtn = document.getElementById("exportBtn");
const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notificationMessage");
const notificationClose = document.getElementById("notificationClose");
const toggleMoodsBtn = document.getElementById("toggleMoods");
const additionalMoodsContainer = document.getElementById("additionalMoods");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const searchInput = document.getElementById("searchMessages");
const filterMoodSelect = document.getElementById("filterMood");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const notificationBadge = document.getElementById("notificationBadge");
const notificationBadgeContent = document.getElementById(
  "notificationBadgeContent"
);
const notificationBadgeClose = document.getElementById(
  "notificationBadgeClose"
);
const viewMessageBtn = document.getElementById("viewMessageBtn");
const dismissNotificationBtn = document.getElementById(
  "dismissNotificationBtn"
);

// Set min and max dates for delivery
const today = new Date();
const minDate = new Date();
minDate.setDate(today.getDate() + 1);
const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 5);

deliveryDateInput.min = minDate.toISOString().split("T")[0];
deliveryDateInput.max = maxDate.toISOString().split("T")[0];

// Set default delivery date to tomorrow
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
deliveryDateInput.value = tomorrow.toISOString().split("T")[0];

// Initialize the app
function init() {
  loadState();
  renderMessages();
  updateStats();
  renderBadges();
  renderMoodTimeline();
  setRandomPrompt();
  setupEventListeners();
  updateProgress();
  checkForDeliveredMessages();
  requestNotificationPermission();

  // Hide additional moods by default
  additionalMoodsContainer.style.display = "none";
}

// Load state from localStorage
function loadState() {
  const savedState = localStorage.getItem("timeCapsuleState");
  if (savedState) {
    const parsed = JSON.parse(savedState);
    state = {
      ...state,
      ...parsed,
      usedMoods: new Set(parsed.usedMoods || []),
    };
  }
}

// Save state to localStorage
function saveState() {
  const stateToSave = {
    ...state,
    usedMoods: Array.from(state.usedMoods),
  };
  localStorage.setItem("timeCapsuleState", JSON.stringify(stateToSave));
}

// Request notification permission
function requestNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      state.notificationPermission = permission === "granted";
      saveState();
    });
  }
}

// Schedule notification for a message
function scheduleNotification(message) {
  if (!state.notificationPermission) return;

  const deliveryDate = new Date(message.deliveryDate);
  const now = new Date();
  const timeUntilDelivery = deliveryDate - now;

  if (timeUntilDelivery > 0) {
    // Schedule the notification
    setTimeout(() => {
      showNotificationBadge(message);
    }, timeUntilDelivery);
  }
}

// Show notification badge
function showNotificationBadge(message) {
  notificationBadgeContent.textContent = `Your message from ${formatDate(
    message.createdDate
  )} is ready to be read!`;
  notificationBadge.style.display = "block";

  // Store the message ID for viewing
  notificationBadge.dataset.messageId = message.id;

  // Auto-hide after 10 seconds
  setTimeout(() => {
    if (notificationBadge.style.display === "block") {
      notificationBadge.style.display = "none";
    }
  }, 10000);
}

// Set up event listeners
function setupEventListeners() {
  // Mood selection
  moodSelectors.forEach((option) => {
    option.addEventListener("click", () => {
      moodSelectors.forEach((opt) => opt.classList.remove("selected"));
      additionalMoodSelectors.forEach((opt) =>
        opt.classList.remove("selected")
      );
      option.classList.add("selected");
      state.currentMood = option.dataset.mood;
    });
  });

  // Additional mood selection
  additionalMoodSelectors.forEach((option) => {
    option.addEventListener("click", () => {
      moodSelectors.forEach((opt) => opt.classList.remove("selected"));
      additionalMoodSelectors.forEach((opt) =>
        opt.classList.remove("selected")
      );
      option.classList.add("selected");
      state.currentMood = option.dataset.mood;
    });
  });

  // Toggle additional moods
  toggleMoodsBtn.addEventListener("click", () => {
    if (additionalMoodsContainer.style.display === "none") {
      additionalMoodsContainer.style.display = "flex";
      toggleMoodsBtn.textContent = "Show Less Emotions";
    } else {
      additionalMoodsContainer.style.display = "none";
      toggleMoodsBtn.textContent = "Show More Emotions";
    }
  });

  // Password protection toggle
  protectCheckbox.addEventListener("change", () => {
    passwordInput.style.display = protectCheckbox.checked ? "block" : "none";
  });

  // Save message
  saveButton.addEventListener("click", saveMessage);

  // New prompt
  newPromptBtn.addEventListener("click", setRandomPrompt);

  // Use prompt
  usePromptBtn.addEventListener("click", () => {
    if (messageInput.value.trim() === "") {
      messageInput.value = dailyPrompt.textContent;
    } else {
      messageInput.value += "\n\n" + dailyPrompt.textContent;
    }
    messageInput.focus();
  });

  // Export messages
  exportBtn.addEventListener("click", exportMessages);

  // Tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`${tab.dataset.tab}Tab`).classList.add("active");
    });
  });

  // Search and filter
  searchInput.addEventListener("input", renderMessages);
  filterMoodSelect.addEventListener("change", renderMessages);

  // Notification close
  notificationClose.addEventListener("click", () => {
    notification.classList.remove("show");
  });

  // Notification badge close
  notificationBadgeClose.addEventListener("click", () => {
    notificationBadge.style.display = "none";
  });

  // View message button
  viewMessageBtn.addEventListener("click", () => {
    const messageId = notificationBadge.dataset.messageId;
    if (messageId) {
      // Find the message and mark as delivered
      const message = state.messages.find((m) => m.id == messageId);
      if (message) {
        message.isDelivered = true;
        saveState();
        renderMessages();
        updateStats();
        updateProgress();

        // Switch to delivered tab
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));
        document
          .querySelector('.tab[data-tab="delivered"]')
          .classList.add("active");
        document.getElementById("deliveredTab").classList.add("active");

        // Scroll to the message
        setTimeout(() => {
          const messageElement = document.querySelector(
            `.message-card[data-id="${messageId}"]`
          );
          if (messageElement) {
            messageElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            messageElement.style.boxShadow = "0 0 0 3px var(--accent)";
            setTimeout(() => {
              messageElement.style.boxShadow = "";
            }, 3000);
          }
        }, 300);
      }
    }
    notificationBadge.style.display = "none";
  });

  // Dismiss notification button
  dismissNotificationBtn.addEventListener("click", () => {
    notificationBadge.style.display = "none";
  });
}

// Set a random prompt
function setRandomPrompt() {
  let availablePrompts = prompts.filter(
    (prompt) => !state.usedPrompts.includes(prompt)
  );

  // If all prompts have been used, reset
  if (availablePrompts.length === 0) {
    state.usedPrompts = [];
    availablePrompts = [...prompts];
  }

  const randomIndex = Math.floor(Math.random() * availablePrompts.length);
  const prompt = availablePrompts[randomIndex];
  dailyPrompt.textContent = prompt;
}

// Save a new message
function saveMessage() {
  const message = messageInput.value.trim();
  const deliveryDate = deliveryDateInput.value;
  const mood = state.currentMood || "😊";
  const isProtected = protectCheckbox.checked;
  const password = isProtected ? passwordInput.value : null;

  if (!message) {
    showNotification("Please write a message before sending.", "error");
    return;
  }

  if (!deliveryDate) {
    showNotification("Please select a delivery date.", "error");
    return;
  }

  const newMessage = {
    id: Date.now(),
    content: message,
    mood: mood,
    createdDate: new Date().toISOString().split("T")[0],
    deliveryDate: deliveryDate,
    isProtected: isProtected,
    password: password,
    isDelivered: false,
  };

  state.messages.push(newMessage);

  // Update used prompts and moods
  const prompt = dailyPrompt.textContent;
  if (!state.usedPrompts.includes(prompt)) {
    state.usedPrompts.push(prompt);
  }

  state.usedMoods.add(mood);

  // Update streak
  updateStreak();

  // Schedule notification
  scheduleNotification(newMessage);

  // Reset form
  messageInput.value = "";
  passwordInput.value = "";
  protectCheckbox.checked = false;
  passwordInput.style.display = "none";
  moodSelectors.forEach((opt) => opt.classList.remove("selected"));
  additionalMoodSelectors.forEach((opt) => opt.classList.remove("selected"));
  state.currentMood = null;

  // Set new prompt
  setRandomPrompt();

  // Save and render
  saveState();
  renderMessages();
  updateStats();
  renderBadges();
  renderMoodTimeline();
  updateProgress();

  // Show notification
  showNotification("Message saved successfully!");
}

// Check for delivered messages
function checkForDeliveredMessages() {
  const now = new Date();
  let hasNewDeliveries = false;

  state.messages.forEach((message) => {
    if (!message.isDelivered && new Date(message.deliveryDate) <= now) {
      message.isDelivered = true;
      hasNewDeliveries = true;

      // Show notification badge for the first delivered message
      if (!state.notificationScheduled) {
        showNotificationBadge(message);
        state.notificationScheduled = true;
      }
    }
  });

  if (hasNewDeliveries) {
    saveState();
    renderMessages();
    updateStats();
    updateProgress();
  }
}

// Update writing streak
function updateStreak() {
  const today = new Date().toISOString().split("T")[0];

  if (!state.lastEntryDate) {
    state.streak = 1;
  } else {
    const lastDate = new Date(state.lastEntryDate);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      state.streak += 1;
    } else if (diffDays > 1) {
      state.streak = 1;
    }
    // If diffDays is 0, we don't change the streak
  }

  state.lastEntryDate = today;
}

// Render messages
function renderMessages() {
  const searchTerm = searchInput.value.toLowerCase();
  const filterMood = filterMoodSelect.value;

  // Filter messages
  let filteredMessages = state.messages;

  if (searchTerm) {
    filteredMessages = filteredMessages.filter(
      (msg) =>
        msg.content.toLowerCase().includes(searchTerm) ||
        msg.mood.includes(searchTerm)
    );
  }

  if (filterMood) {
    filteredMessages = filteredMessages.filter(
      (msg) => msg.mood === filterMood
    );
  }

  const now = new Date();
  const pending = filteredMessages.filter(
    (msg) => !msg.isDelivered && new Date(msg.deliveryDate) > now
  );
  const delivered = filteredMessages.filter(
    (msg) => msg.isDelivered || new Date(msg.deliveryDate) <= now
  );

  // Render pending messages
  if (pending.length === 0) {
    pendingMessagesContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-inbox"></i>
                        <h3>No Pending Messages</h3>
                        <p>Write a new message to see it here</p>
                    </div>
                `;
  } else {
    pendingMessagesContainer.innerHTML = "";
    pending.forEach((msg) => {
      const messageEl = createMessageElement(msg, true);
      pendingMessagesContainer.appendChild(messageEl);
    });
  }

  // Render delivered messages
  if (delivered.length === 0) {
    deliveredMessagesContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-envelope-open-text"></i>
                        <h3>No Delivered Messages</h3>
                        <p>Your future messages will appear here</p>
                    </div>
                `;
  } else {
    deliveredMessagesContainer.innerHTML = "";
    delivered.forEach((msg) => {
      const messageEl = createMessageElement(msg, false);
      deliveredMessagesContainer.appendChild(messageEl);
    });
  }

  // Render all messages
  if (filteredMessages.length === 0) {
    allMessagesContainer.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-search"></i>
                        <h3>No Messages Found</h3>
                        <p>Try adjusting your search or filter</p>
                    </div>
                `;
  } else {
    allMessagesContainer.innerHTML = "";
    filteredMessages.forEach((msg) => {
      const messageEl = createMessageElement(
        msg,
        new Date(msg.deliveryDate) > now
      );
      allMessagesContainer.appendChild(messageEl);
    });
  }
}

// Create message element
function createMessageElement(message, isPending) {
  const messageEl = document.createElement("div");
  messageEl.className = "message-card fade-in";
  messageEl.dataset.id = message.id;

  const createdDate = new Date(message.createdDate);
  const deliveryDate = new Date(message.deliveryDate);
  const timeDiff = deliveryDate - createdDate;
  const daysUntilDelivery = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let countdownText = "";
  if (isPending) {
    countdownText = `${daysUntilDelivery} day${
      daysUntilDelivery !== 1 ? "s" : ""
    } left`;
  } else {
    const timeAgo = getTimeAgo(deliveryDate);
    countdownText = `Delivered ${timeAgo}`;
  }

  // Truncate content for preview
  const contentPreview =
    message.content.length > 150
      ? message.content.substring(0, 150) + "..."
      : message.content;

  messageEl.innerHTML = `
                <div class="message-header">
                    <div class="message-mood">${message.mood}</div>
                    <div class="message-date">${formatDate(
                      message.createdDate
                    )}</div>
                </div>
                <div class="message-content">
                    ${
                      message.isProtected
                        ? `<div class="password-overlay">
                            <i class="fas fa-lock" style="font-size: 2rem; margin-bottom: 15px; color: var(--accent);"></i>
                            <p>This message is password protected</p>
                            <input type="password" class="password-input-overlay" placeholder="Enter password">
                            <button class="btn unlock-btn">Unlock</button>
                        </div>`
                        : `<p>${contentPreview}</p>`
                    }
                </div>
                <div class="message-footer">
                    <span class="${
                      isPending ? "countdown" : "delivered"
                    }">${countdownText}</span>
                    ${
                      isPending
                        ? `<button class="btn btn-secondary cancel-btn" data-id="${message.id}">
                            <i class="fas fa-times"></i> Cancel
                        </button>`
                        : ""
                    }
                </div>
            `;

  // Add event listeners for protected messages
  if (message.isProtected) {
    const unlockBtn = messageEl.querySelector(".unlock-btn");
    const passwordInput = messageEl.querySelector(".password-input-overlay");

    unlockBtn.addEventListener("click", () => {
      if (passwordInput.value === message.password) {
        const contentEl = messageEl.querySelector(".message-content");
        contentEl.innerHTML = `<p>${message.content}</p>`;
      } else {
        showNotification("Incorrect password", "error");
      }
    });
  }

  // Add event listener for cancel button
  if (isPending) {
    const cancelBtn = messageEl.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", () => {
      cancelMessage(message.id);
    });
  }

  return messageEl;
}

// Cancel a message
function cancelMessage(id) {
  const deleteModal = document.getElementById("deleteModal");
  const confirmDeleteBtn = document.getElementById("confirmDelete");
  const cancelDeleteBtn = document.getElementById("cancelDelete");

  deleteModal.style.display = "block";

  const handleDelete = () => {
    state.messages = state.messages.filter((msg) => msg.id !== id);
    saveState();
    renderMessages();
    updateStats();
    updateProgress();
    showNotification("Message cancelled");
    deleteModal.style.display = "none";
    cleanup();
  };

  const handleCancel = () => {
    deleteModal.style.display = "none";
    cleanup();
  };

  const cleanup = () => {
    confirmDeleteBtn.removeEventListener("click", handleDelete);
    cancelDeleteBtn.removeEventListener("click", handleCancel);
  };

  confirmDeleteBtn.addEventListener("click", handleDelete);
  cancelDeleteBtn.addEventListener("click", handleCancel);
}

// Format date as "Month Day, Year"
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Get time ago string
function getTimeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    const years = Math.floor(interval);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    const months = Math.floor(interval);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 86400;
  if (interval > 1) {
    const days = Math.floor(interval);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 3600;
  if (interval > 1) {
    const hours = Math.floor(interval);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  interval = seconds / 60;
  if (interval > 1) {
    const minutes = Math.floor(interval);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

// Update stats
function updateStats() {
  messageCountEl.textContent = state.messages.length;
  streakCountEl.textContent = state.streak;

  const deliveredCount = state.messages.filter(
    (msg) => msg.isDelivered || new Date(msg.deliveryDate) <= new Date()
  ).length;
  deliveredCountEl.textContent = deliveredCount;
}

// Update progress bar
function updateProgress() {
  const earnedBadges = badges.filter((b) => b.earned).length;
  const progress = Math.min(
    100,
    (earnedBadges / state.totalPossibleBadges) * 100
  );
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(
    progress
  )}% of your journey completed`;
}

// Render badges
function renderBadges() {
  badgesContainer.innerHTML = "";

  // Update badge statuses
  const firstBadge = badges.find((b) => b.id === "first");
  if (firstBadge && state.messages.length > 0 && !firstBadge.earned) {
    firstBadge.earned = true;
  }

  const weekBadge = badges.find((b) => b.id === "week");
  if (weekBadge && state.streak >= 7 && !weekBadge.earned) {
    weekBadge.earned = true;
  }

  const monthBadge = badges.find((b) => b.id === "month");
  if (monthBadge && state.streak >= 30 && !monthBadge.earned) {
    monthBadge.earned = true;
  }

  const reflectorBadge = badges.find((b) => b.id === "reflector");
  if (
    reflectorBadge &&
    state.usedPrompts.length >= 10 &&
    !reflectorBadge.earned
  ) {
    reflectorBadge.earned = true;
  }

  const sentimentBadge = badges.find((b) => b.id === "sentiment");
  if (sentimentBadge && state.usedMoods.size >= 5 && !sentimentBadge.earned) {
    sentimentBadge.earned = true;
  }

  const timekeeperBadge = badges.find((b) => b.id === "timekeeper");
  if (timekeeperBadge) {
    const uniqueDeliveryDates = new Set(
      state.messages.map((m) => m.deliveryDate)
    ).size;
    if (uniqueDeliveryDates >= 3 && !timekeeperBadge.earned) {
      timekeeperBadge.earned = true;
    }
  }

  const diaristBadge = badges.find((b) => b.id === "diarist");
  if (diaristBadge && state.messages.length >= 20 && !diaristBadge.earned) {
    diaristBadge.earned = true;
  }

  const sentimentalBadge = badges.find((b) => b.id === "sentimental");
  if (sentimentalBadge) {
    const protectedMessages = state.messages.filter(
      (m) => m.isProtected
    ).length;
    if (protectedMessages >= 5 && !sentimentalBadge.earned) {
      sentimentalBadge.earned = true;
    }
  }

  // Render badges
  badges.forEach((badge) => {
    const badgeEl = document.createElement("div");
    badgeEl.className = `badge ${badge.earned ? "earned" : ""}`;
    badgeEl.innerHTML = `
                    <i class="${badge.icon}"></i>
                    ${badge.name}
                `;
    badgeEl.title = badge.description;
    badgesContainer.appendChild(badgeEl);
  });

  updateProgress();
}

// Render mood timeline
function renderMoodTimeline() {
  moodTimeline.innerHTML = "";

  // Get last 5 messages sorted by date
  const recentMessages = [...state.messages]
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
    .slice(0, 5);

  if (recentMessages.length === 0) {
    moodTimeline.innerHTML =
      '<p style="color: var(--text-light); text-align: center;">No messages yet. Start by writing your first time capsule!</p>';
    return;
  }

  recentMessages.forEach((msg) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    timelineItem.innerHTML = `
                    <div class="timeline-mood">${msg.mood}</div>
                    <div class="timeline-date">${formatDate(
                      msg.createdDate
                    )}</div>
                    <div class="timeline-snippet">
                        ${msg.content.substring(0, 80)}${
      msg.content.length > 80 ? "..." : ""
    }
                    </div>
                `;
    moodTimeline.appendChild(timelineItem);
  });
}

// Export messages as JSON
function exportMessages() {
  try {
    // Validate that we have messages to export
    if (!state.messages || state.messages.length === 0) {
      showNotification("No messages to export", "warning");
      return;
    }

    const dataStr = JSON.stringify(state.messages, null, 2);

    // Check if the data is too large (roughly > 100MB)
    if (dataStr.length > 100000000) {
      showNotification(
        "Export failed: Too many messages to export at once",
        "error"
      );
      return;
    }

    const blob = new Blob([dataStr], { type: "application/json" });
    const dataUrl = URL.createObjectURL(blob);
    const exportFileDefaultName = `time-capsule-export-${
      new Date().toISOString().split("T")[0]
    }.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUrl);
    linkElement.setAttribute("download", exportFileDefaultName);

    // Append to document for Firefox support
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);

    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(dataUrl), 100);

    showNotification("Messages exported successfully!");
  } catch (error) {
    console.error("Export error:", error);
    showNotification("Failed to export messages. Please try again.", "error");
  }
}

// Show notification
function showNotification(message, type = "success") {
  notificationMessage.textContent = message;

  // Set icon based on type
  const icon = notification.querySelector(".notification-icon i");
  if (type === "error") {
    icon.className = "fas fa-exclamation-circle";
    notification.className = "notification error";
  } else if (type === "warning") {
    icon.className = "fas fa-exclamation-triangle";
    notification.className = "notification warning";
  } else {
    icon.className = "fas fa-check-circle";
    notification.className = "notification";
  }

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

// Check for delivered messages every minute
setInterval(checkForDeliveredMessages, 60000);
