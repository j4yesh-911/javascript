const items = [
  {
    id: 1,
    name: "Hundru Falls",
    description: "Spectacular waterfall cascading from 98 meters",
    image: "/beautiful-waterfall-in-forest.jpg",
    tags: ["Waterfall", "Nature", "Adventure", "Photography"],
    category: "Waterfalls",
    rating: 4.5,
    location: "Ranchi",
    price: "₹20",
  },
  {
    id: 2,
    name: "Baidyanath Temple",
    description: "Sacred Jyotirlinga temple in Deoghar",
    image: "/ancient-hindu-temple-with-devotees.jpg",
    tags: ["Temple", "Spiritual", "Heritage", "Architecture"],
    category: "Temples",
    rating: 4.8,
    location: "Deoghar",
    price: "Free",
  },
  {
    id: 3,
    name: "Tribal Dance Festival",
    description: "Experience authentic Jharkhand culture",
    image: "/tribal-dancers-in-colorful-traditional-costumes.jpg",
    tags: ["Culture", "Festival", "Traditional", "Music"],
    category: "Culture",
    rating: 4.6,
    location: "Various",
    price: "₹100",
  },
  {
    id: 4,
    name: "Litti Chokha",
    description: "Traditional Jharkhand delicacy",
    image: "/traditional-indian-food-litti-chokha.jpg",
    tags: ["Food", "Traditional", "Local", "Authentic"],
    category: "Food",
    rating: 4.3,
    location: "Ranchi",
    price: "₹50",
  },
  {
    id: 5,
    name: "Jonha Falls",
    description: "Beautiful waterfall surrounded by dense forests",
    image: "/waterfall-rocks.jpg",
    tags: ["Waterfall", "Nature", "Trekking", "Photography"],
    category: "Waterfalls",
    rating: 4.4,
    location: "Ranchi",
    price: "₹15",
  },
  {
    id: 6,
    name: "Jagannath Temple",
    description: "Ancient temple with stunning architecture",
    image: "/temple-architecture.jpg",
    tags: ["Temple", "Heritage", "Architecture", "Spiritual"],
    category: "Temples",
    rating: 4.7,
    location: "Ranchi",
    price: "Free",
  },
]
const table = document.createElement('table');
   table.style.borderCollapse = 'collapse';
       table.style.width = '100%';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

    Object.keys(items[0]).forEach(key => {
  const th = document.createElement('th');
        th.textContent = key;
       th.style.border = '1px solid black';
    th.style.padding = '8px';
    th.style.backgroundColor = '#1b778bff';
     headerRow.appendChild(th);
        });
thead.appendChild(headerRow);
    table.appendChild(thead);


    const tbody = document.createElement('tbody');

items.forEach(item => {
  const tr = document.createElement('tr');
       Object.values(item).forEach(value => {
    const td = document.createElement('td');
      td.textContent = value;
      td.style.border = '1px solid black';
      td.style.padding = '8px';
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

table.appendChild(tbody);

document.body.appendChild(table);