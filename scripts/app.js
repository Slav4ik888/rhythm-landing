const getId = (id) => document.getElementById(id);

// ----------------
// --  WHAT IS
// ----------------------------------------------------------------------------------
const
  $WhatIsBtnTable                  = getId("what-is-btn-table"),
  $WhatIsBtnDashboard              = getId("what-is-btn-dashboard"),
  $WhatIsBtnTableIconActive        = getId("what-is-btn-table-icon-active"),
  $WhatIsBtnTableIconNotActive     = getId("what-is-btn-table-icon-not-active"),
  $WhatIsBtnDashbordIconActive     = getId("what-is-btn-dashboard-icon-active"),
  $WhatIsBtnDashbordIconNotActive  = getId("what-is-btn-dashboard-icon-not-active"),
  $WhatIsTopRowBox                 = getId("what-is-top-row-box"),
  $WhatIsTopRowBoxTable            = getId("what-is-top-row-box-table"),
  $WhatIsTopRowBoxDashboard        = getId("what-is-top-row-box-dashboard"),
  $WhatIsBottomRowTable            = getId("what-is-bottom-row-table"),
  $WhatIsBottomRowDashboard        = getId("what-is-bottom-row-dashboard");


$WhatIsBtnTable.addEventListener("click", () => {
  if ($WhatIsBtnTable.classList.contains("active")) return;

  $WhatIsBtnDashboard.classList.remove("active");
  $WhatIsBtnTableIconActive.classList.remove("not-visible");
  $WhatIsBtnDashbordIconActive.classList.remove("not-visible");

  $WhatIsBtnTable.classList.add("active");
  $WhatIsBtnTableIconNotActive.classList.add("not-visible");
  $WhatIsBtnDashbordIconNotActive.classList.add("not-visible");

  $WhatIsTopRowBox.classList.remove("ml-210"); // Unshift image from right
  $WhatIsTopRowBoxTable.classList.remove("not-visible");
  $WhatIsTopRowBoxDashboard.classList.add("not-visible");

  $WhatIsBottomRowTable.classList.remove("not-visible"); // Bottom row show/hidden
  $WhatIsBottomRowDashboard.classList.add("not-visible");
});


$WhatIsBtnDashboard.addEventListener("click", () => {
  if ($WhatIsBtnDashboard.classList.contains("active")) return;

  $WhatIsBtnTable.classList.remove("active");
  $WhatIsBtnTableIconNotActive.classList.remove("not-visible");
  $WhatIsBtnDashbordIconNotActive.classList.remove("not-visible");

  $WhatIsBtnDashboard.classList.add("active");
  $WhatIsBtnTableIconActive.classList.add("not-visible");
  $WhatIsBtnDashbordIconActive.classList.add("not-visible");

  $WhatIsTopRowBox.classList.add("ml-210"); // Shift image to the right
  $WhatIsTopRowBoxTable.classList.add("not-visible");
  $WhatIsTopRowBoxDashboard.classList.remove("not-visible");

  $WhatIsBottomRowTable.classList.add("not-visible"); // Bottom row show/hidden
  $WhatIsBottomRowDashboard.classList.remove("not-visible");
});

// ----------------
// --  VIDEO PRESENTATION
// ----------------------------------------------------------------------------------

const
  $VideoPresentationVideoPreview = getId("video-presentation-video-preview"),
  $VideoPresentationPlayBox      = getId("video-presentation-play-box");

$VideoPresentationVideoPreview.addEventListener("mouseover", () => {
  $VideoPresentationPlayBox.classList.add("hover");
});

$VideoPresentationVideoPreview.addEventListener("mouseout", () => {
  $VideoPresentationPlayBox.classList.remove("hover");
});

// ----------------
// --  DEV-TIMELINE
// ----------------------------------------------------------------------------------

const $DevTimelineSnoska = getId("dev-timeline-snoska");

$DevTimelineSnoska.addEventListener("mouseover", () => {
  
});

// ----------------
// --  ПЛАВНАЯ ПРОКРУТКА
// ----------------------------------------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  });
});

// Превентивные меры - предупреждающие, предохранительные действия. Это меры предупредительного характера в ситуациях, когда необходимо снизить риски возникновения нежелательных событий.
