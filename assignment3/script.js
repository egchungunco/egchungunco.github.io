// DOM Elements
const modal = document.getElementById("exhibitModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const closeButton = document.querySelector(".close-button");
const exhibits = document.querySelectorAll(".exhibit");

// In here are basic descriptions of each of the works displayed including where they are currently located as well as when these works were created by their creators.
const exhibitData = {
  A: {
    title: "The Rosetta Stone",
    description:
      "The Rosetta Stone is one of the most important objects in the British Museum as it holds the key to understanding Egyptian hieroglyphs. It features three parallel texts – hieroglyphic, demotic, and ancient Greek. It was created in 196 BC and discovered by French soldiers in 1799 during Napoleon's campaign in Egypt.",
    date: "Created: 196 BC",
    location: "Current Location: The British Museum, London",
  },
  B: {
    title: "Mona Lisa",
    description:
      "Leonardo da Vinci's masterpiece, the Mona Lisa, is a half-length portrait painting that has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.\" The painting's mysterious smile and uncanny eyes have made it one of art history's most famous works.",
    date: "Created: c. 1503-1519",
    location: "Current Location: The Louvre Museum, Paris",
  },
  C: {
    title: "The Starry Night",
    description:
      "Painted by Vincent van Gogh during his stay at the Saint-Paul-de-Mausole asylum, The Starry Night depicts the view from his asylum room window at night. The painting represents van Gogh's direct observations of his view of the Provence landscape coupled with memories of his native Netherlands.",
    date: "Created: June 1889",
    location: "Current Location: Museum of Modern Art (MoMA), New York",
  },
  D: {
    title: "Tutankhamun's Death Mask",
    description:
      "The mask of Tutankhamun is a gold death mask of the 18th-dynasty ancient Egyptian Pharaoh Tutankhamun. The mask is one of the most well-known works of art in the world and symbolizes ancient Egyptian civilization. It was discovered by Howard Carter in 1925 within Tutankhamun's burial chamber.",
    date: "Created: c. 1323 BC",
    location: "Current Location: The Egyptian Museum, Cairo",
  },
  E: {
    title: "The Terracotta Army",
    description:
      "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose of protecting the emperor in his afterlife.",
    date: "Created: 210-209 BC",
    location: "Current Location: Xi'an, Shaanxi Province, China",
  },
  F: {
    title: "The Parthenon Marbles",
    description:
      "The Parthenon Marbles are a collection of Classical Greek marble sculptures that were originally part of the temple of the Parthenon on the Acropolis of Athens. They are considered some of the most important examples of ancient Greek art and architecture.",
    date: "Created: 447-432 BC",
    location: "Current Location: The British Museum, London",
  },
  G: {
    title: "The Dead Sea Scrolls",
    description:
      "The Dead Sea Scrolls are ancient Jewish and Hebrew religious manuscripts discovered between 1947 and 1956 in the Qumran Caves. They include the oldest known Biblical manuscripts in existence and have immense historical, religious, and linguistic significance.",
    date: "Created: c. 2nd century BC to 1st century AD",
    location: "Current Location: The Israel Museum, Jerusalem",
  },
  H: {
    title: "The Crown Jewels",
    description:
      "The Crown Jewels of the United Kingdom are a collection of royal ceremonial objects kept in the Tower of London. They include the regalia and vestments worn by British kings and queens at their coronations. The collection includes the famous Cullinan I diamond, also known as the Star of Africa.",
    date: "Various dates, oldest pieces from 17th century",
    location: "Current Location: Tower of London, United Kingdom",
  },
  I: {
    title: "Venus de Milo",
    description:
      "The Venus de Milo is an ancient Greek statue and one of the most famous works of ancient Greek sculpture. Created during the Hellenistic period, it depicts Aphrodite, the Greek goddess of love and beauty. The statue is renowned for its missing arms, which were lost after its discovery.",
    date: "Created: c. 130-100 BC",
    location: "Current Location: The Louvre Museum, Paris",
  },
};

// Functions
function openModal(exhibitId) {
  const exhibit = exhibitData[exhibitId];
  modalTitle.textContent = `Exhibit ${exhibitId}: ${exhibit.title}`;
  modalDescription.textContent = exhibit.description;
  modalDate.textContent = exhibit.date;
  modalLocation.textContent = exhibit.location;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Add fade-in animation
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.opacity = 1;
  }, 10);
}

function closeModal() {
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }, 300);
}

// Event Listeners
exhibits.forEach((exhibit) => {
  exhibit.addEventListener("click", () => {
    const exhibitId = exhibit.dataset.id;
    openModal(exhibitId);
  });
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// This section is for the viewer to use the keyboard to navigate through different parts of the exhibit.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

const exhibitImages = {
  A: "rosetta-stone.jpg",
  B: "mona_lisa.jpg",
  C: "starry-night.jpg",
  D: "tutankhamun-mask.jpg",
  E: "terracotta-army.jpg",
  F: "parthenon-marbles.jpg",
  G: "dead-sea-scrolls.jpg",
  H: "crown-jewels.jpg",
  I: "venus-de-milo.jpg",
};
