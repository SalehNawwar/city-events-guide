document.addEventListener("DOMContentLoaded", () => {
  const eventsData = [
    {
      id: "e1",
      title: "ليالي حلب الثقافية",
      date: "2025-11-15",
      time: "19:00",
      location: "دار رجب باشا التاريخية",
      description:
        "مهرجان ثقافي يُعيد إحياء التراث الفني والحرفي الحلبي: معارض حرف يدوية، لوحات تشكيلية، خط عربي، أمسيات شعرية، عروض موسيقية قدود وموشحات، عروض مسرحية مثل “ذاكرة اعتقال”. ",
      image: "assets/img/1.jpg",
      category: "ثقافي",
      featured: false,
    },
    {
      id: "e2",
      title: "حفل ليالي النغم",
      date: "2025-11-20",
      time: "10:00",
      location: "نقابة الفنانيين",
      description:
        "سهرة موسيقية طربية تضم فنانين محليين، أداء موسيقي تقليدي من القدود والموشحات الحلبيّة، مع مشاركة فنية مميزة",
      image: "assets/img/2.jpg",
      category: "موسيقي",
      featured: true,
    },
    {
      id: "e3",
      title: "فعاليات رمضان “رمضان الخير”",
      date: "2025-12-02",
      time: "20:00",
      location: "حلب (أحياء متعددة)",
      description:
        "فعاليات رمضانية مستمرة، نشاطات اجتماعية وثقافية خلال شهر رمضان، غالبًا تشمل أنشطة للأطفال، الأسواق، المائدة المشتركة، فعاليات مجتمعية في الأحياء",
      image: "assets/img/3.jpg",
      category: "ديني",
      featured: true,
    },
    {
      id: "e4",
      title: "معرض الكتاب في حلب",
      date: "2025-12-01",
      time: "14:00",
      location: "منتدى حلب عاصمة الثقافة، شارع القوتلي",
      description:
        "معرض يضم آلاف العناوين من مختلف المجالات (أدبية، علمية، دينية، للأطفال)، مع توقيع كتب، ورش ومحاولات لتوفير كتب بأسعار مخفّضة ",
      image: "assets/img/4.jpg",
      category: "ثقافي",
      featured: false,
    },
    {
      id: "e5",
      title: "جسور: الفنون الثقافية",
      date: "2025-12-05",
      time: "11:00",
      location: "ساحة سعد الله الجابري",
      description:
        "فعالية تهدف لتعزيز الحوار والتماسك المجتمعي بعد سنوات الحرب، بمشاركة عروض مسرحية وفلكلور، معارض تراثية تمثل مختلف المكونات السورية (عربي، سرياني، كردي، أرمني، شركسي، إلخ)",
      image: "assets/img/5.jpg",

      category: "ثقافي",
      featured: false,
    },

    {
      id: "e6",
      title: "ماراثون «أبطال حلب 2025» للجري والمسارات الحرة",
      date: "2025-12-01",
      time: "09:00",
      location: "الحديقة العامة",
      description:
        "معرض يضم آلاف العناوين من مختلف المجالات (أدبية، علمية، دينية، للأطفال)، مع توقيع كتب، ورش ومحاولات لتوفير كتب بأسعار مخفّضة ",
      image: "assets/img/running.jfif",
      category: "رياضي",
      featured: false,
    },
    {
      id: "e7",
      title: "حفل أوركسترا كوميتاس في حلب",
      date: "2025-12-05",
      time: "20:30",
      location: "مركز كالوس غولبنكيان الثقافي _ حي العزيزية",
      description:
        "حفل أوركسترا كاميتاس في حلب — تحت إشراف د. سركيس إيسينيان، و بمشاركة البارِتون أرَم خاشاتوريان. فعالية احتفالية بمناسبة الذكرى العشرون للجنة الموسيقية (AGBU-AYA) في حلب.",
      image: "assets/img/6.jpg",
      category: "موسيقي",
      featured: false,
    },
  ];

  // Function to load featured events on index.html
  function loadFeaturedEvents() {
    const featuredSliderInner = document.querySelector(
      "#featured-slider .carousel-inner"
    );
    if (!featuredSliderInner) return;

    const featuredEvents = eventsData.filter((event) => event.featured);
    featuredSliderInner.innerHTML = featuredEvents
      .map(
        (event, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${event.image}" class="d-block w-100" alt="${
          event.title
        }">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${event.title}</h5>
                    <p>${event.description.substring(0, 100)}...</p>
                    <a href="event.html?id=${
                      event.id
                    }" class="btn custom-btn"> عرض التفاصيل</a>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Function to load categories on index.html
  function loadCategories() {
    const categoriesSection = document.querySelector("#categories");
    if (!categoriesSection) return;

    const uniqueCategories = [
      ...new Set(eventsData.map((event) => event.category)),
    ];

    const categoryIcons = {
      موسيقي: { icon: "bi-stars", color: "#D97706" },
      ديني: { icon: "bi-flower1", color: "#22C55E" },
      رياضي: { icon: "bi-flag", color: "#0c849fff" },
      ثقافي: { icon: "bi-globe", color: "#EC4899" },
    };

    categoriesSection.innerHTML += `
    <div class="row justify-content-center g-3">
      ${uniqueCategories
        .map((category) => {
          const { icon, color } = categoryIcons[category] || {
            icon: "bi-tag",
            color: "#6B7280",
          };
          return `
            <div class="col-6 col-md-4 col-lg-2">
              <a href="events.html"><div class=" text-center border-0 shadow-md py-4 category-card" >
                <i class="bi ${icon}" style="font-size: 2rem; color: ${color};"></i>
                <h6 class="mt-3 fw-bold ">${category}</h6>
              </div>
              </a>
            </div>

          `;
        })
        .join("")}
    </div>
  `;
  }

  // Function to load latest events on index.html
  function loadLatestEvents() {
    const latestEventsGrid = document.getElementById("latest-events-grid");
    if (!latestEventsGrid) return;

    const latestEvents = eventsData.slice(0, 6); // Display up to 6 latest events
    latestEventsGrid.innerHTML = latestEvents
      .map(
        (event) => `
            <div class="col">
                <div class="card h-100 event-card">
                    <img src="${event.image}" class="card-img-top" alt="${
          event.title
        }">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text"><small class="text-muted ">${
                          event.date
                        } | ${event.location}</small></p>
                        <p class="card-details">${event.description.substring(
                          0,
                          90
                        )}...</p>
                        <a href="event.html?id=${
                          event.id
                        }" class="btn card-btn">تفاصيل</a>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Function to load all events on events.html
  function loadAllEvents(filter = "", category = "كل التصنيفات") {
    const eventsList = document.getElementById("events-list");
    if (!eventsList) return;
    console.log(filter);
    console.log(category);
    let filteredEvents = eventsData;

    if (filter) {
      filteredEvents = eventsData.filter(
        (event) =>
          event.title.toLowerCase().includes(filter.toLowerCase()) ||
          event.description.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (category !== "كل التصنيفات") {
      filteredEvents = eventsData.filter(
        (event) => event.category === category
      );
    }

    if (filteredEvents.length === 0) {
      eventsList.innerHTML =
        '<p class="text-center col-12">لا توجد فعاليات مطابقة.</p>';
      return;
    }

    eventsList.innerHTML = filteredEvents
      .map(
        (event) => `
            <div class="col">
                <div class="card h-100 event-card">
                    <img src="${event.image}" class="card-img-top" alt="${
          event.title
        }">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text"><small class="text-muted">${
                          event.date
                        } | ${event.location}</small></p>
                        <p class="card-text">${event.description.substring(
                          0,
                          90
                        )}...</p>
                        <a href="event.html?id=${
                          event.id
                        }" class="btn card-btn">تفاصيل</a>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Function to load single event details on event.html
  function loadEventDetails() {
    const eventDetailsSection = document.getElementById("event-details");
    if (!eventDetailsSection) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
    const event = eventsData.find((e) => e.id === eventId);

    if (event) {
      eventDetailsSection.innerHTML = `
               <div class="card my-5  rounded-4 overflow-hidden event-card">
  <div class="card-body p-2">
    <h2 class=" text-center mb-4 display-3 title">${event.title}</h2>
    <div class="row align-items-center">
      <div class="col-md-6 mt-0 mt-md-0">
        <img src="${event.image}" class="img-fluid rounded-4 mb-3" alt="${event.title}">
         </div>
        <div class="col-md-6 mt-0 mt-md-0">
        <div class="map-placeholder bg-light rounded-4 shadow-sm overflow-hidden" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3232618.5117319757!2d-125.396142875!3d37.69962736894925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1760904378151!5m2!1sar!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

        <p class="event-card-text text-secondary">${event.description}</p>
        <p class="event-card-text mb-1"><i class="bi bi-calendar-event m-2 text-primary"></i><small class="text-muted">التاريخ: ${event.date} | الوقت: ${event.time}</small></p>
        <p class="event-card-text"><i class="bi bi-geo-alt m-2 text-danger"></i><small class="text-muted">المكان: ${event.location}</small></p>
       
        <div class="d-flex justify-content-center mt-4 gap-3">
        
          <button class="btn btn-custom-blue px-4" id="add-to-calendar-btn">
            <i class="bi bi-calendar-plus mx-2"></i>أضف للتقويم
          </button>
          <button class="btn btn-outline-secondary px-4" id="share-btn">
            <i class="bi bi-share mx-2"></i>شارك
          </button>
        </div>
    </div>
  </div>
</div>

            `;
      loadRelatedEvents(event.category, event.id);
    } else {
      eventDetailsSection.innerHTML =
        '<p class="text-center">الفعالية المطلوبة غير موجودة.</p>';
    }
  }

  // Function to load related events on event.html
  function loadRelatedEvents(category, currentEventId) {
    const relatedEventsSection = document.getElementById("related-events");
    if (!relatedEventsSection) return;

    const relatedEvents = eventsData
      .filter(
        (event) => event.category === category && event.id !== currentEventId
      )
      .slice(0, 3);
    if (relatedEvents.length > 0) {
      relatedEventsSection.querySelector(".row").innerHTML = relatedEvents
        .map(
          (event) => `
                <div class="col-md-4">
                    <div class="card h-100 event-card">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body ">
                            <h5 class="card-title">${event.title}</h5>
                            <p class="card-text"><small class="text-muted">${event.date} | ${event.location}</small></p>
                            <a href="event.html?id=${event.id}" class="btn card-btn">تفاصيل</a>
                        </div>
                    </div>
                </div>
            `
        )
        .join("");
    } else {
      relatedEventsSection.style.display = "none";
    }
  }

  // Function to handle contact form submission
  function handleContactForm() {
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic email validation
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
          formResponse.innerHTML =
            '<div class="alert alert-danger">الرجاء إدخال بريد إلكتروني صحيح.</div>';
          return;
        }

        // Simulate form submission
        setTimeout(() => {
          formResponse.innerHTML =
            '<div class="alert alert-success">تم استلام رسالتك بنجاح!</div>';
          contactForm.reset();
        }, 1000);
      });
    }
  }

  // Initialize functions based on the current page
  const path = window.location.pathname;
  if (path.includes("index.html") || path === "/") {
    document.body.classList.add("home-page");
    loadFeaturedEvents();
    loadCategories();
    loadLatestEvents();
  } else if (path.includes("events.html")) {
    document.body.classList.add("events-page");
    loadAllEvents();
    document.getElementById("search-button").addEventListener("click", () => {
      const filter = document.getElementById("event-search").value;
      const category = document.getElementById("event-category-filter").value;
      loadAllEvents(filter, category);
    });
    document
      .getElementById("event-category-filter")
      .addEventListener("change", (e) => {
        const filter = document.getElementById("event-search").value;
        loadAllEvents(filter, e.target.value);
      });
  } else if (path.includes("event.html")) {
    document.body.classList.add("event-detail-page");
    loadEventDetails();
  } else if (path.includes("contact.html")) {
    document.body.classList.add("contact-page");
    handleContactForm();
  }
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// ⬆️ عند الضغط، نرجع للأعلى بسلاسة
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
