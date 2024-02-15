const gallery = [
  {
    id: 1,
    title: "html-profileCard-Example",
    category: "HTML",
    img: "./assets/portfolio-profileCard-html.png",
    link: "#",
  },

  {
    id: 2,
    title: "Css-bg-position-Example",
    category: "CSS",
    img: "./assets/portfolio-Css-bg-position.png",
    link: "#",
  },

  {
    id: 3,
    title: "Css-grid-Example",
    category: "CSS",
    img: "./assets/portfolio-Css-grid.png",
    link: "#",
  },

  {
    id: 4,
    title: "Css-transition-animation-responsive-Example",
    category: "CSS",
    img: "./assets/portfolio-Css-transition-animation-responsive.png",
    link: "#",
  },

  {
    id: 5,
    title: "Sass-Example",
    category: "CSS",
    img: "./assets/portfolio-Sass-example.png",
    link: "#",
  },

  {
    id: 6,
    title: "JS-BMI Calculator-Example",
    category: "JAVA SCRIPT",
    img: "./assets/portfolio-BMI Calculator-js-git.png",
    link: "https://github.com/smarefat/BMI-Calculator",
  },
];

const addGalleryList = (itemList = []) => {
  document.getElementById("gallery-list").innerHTML = itemList
    .map(
      (pic) => ` <figure class="pic-item">
        <img src="${pic.img}" alt="${pic.title}"/>
        <figcaption><a href="${pic.link}" class="pic-link">${pic.title}</a></figcaption>
    </figure> `
    )
    .join(" ");
};

const setActiveClass = (button) => {
  if (button) {
    document.querySelectorAll(".btn-category").forEach((b) => {
      b.classList.remove("active-btn");
    });

    button.classList.add("active-btn");
  }
};

const addCategoryBottons = () => {
  const categoryList = gallery.reduce(
    (categories, item) => {
      if (item && item.category && !categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["All"]
  );

  const buttons = categoryList.map(
    (cat) =>
      `<button class="btn btn-category ${
        cat === "All" ? "active-btn" : ""
      }" category-id="${cat}">${cat}</button>`
  );

  if (buttons.length > 0) {
    document.getElementById("gallery-categoreis").innerHTML = buttons.join(" ");
  }

  document.querySelectorAll(".btn-category").forEach((item) => {
    const categoryType = item.getAttribute("category-id");

    item.addEventListener("click", function () {
      setActiveClass(item);
      item.classList.add("active-btn");
      if (categoryType === "All") {
        addGalleryList(gallery);
        return;
      }

      const filteredCategory = gallery.filter(
        (item) => item.category === categoryType
      );
      addGalleryList(filteredCategory);
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  addCategoryBottons();
  addGalleryList(gallery);
});
