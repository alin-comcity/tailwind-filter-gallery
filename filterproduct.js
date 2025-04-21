document.addEventListener('DOMContentLoaded', function() {
  
  const filterButtons = document.querySelectorAll(".filter-btn");
      const galleryItems = document.querySelectorAll(".gallery-item");

      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          
          const filter = btn.getAttribute("data-filter");

          // Update button styles
          filterButtons.forEach((b) => {
            b.classList.remove("bg-[#ff5d1d]");
            b.classList.add("bg-black");
          });
          btn.classList.add("bg-[#ff5d1d]");
          btn.classList.remove("bg-black");

          // Filter items
          galleryItems.forEach((item) => {
            if (filter === "all" || item.classList.contains(filter)) {
              item.classList.remove("hidden");
            } else {
              item.classList.add("hidden");
            }
          });
        });
      });
  
});


document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    categories: [],
    galleryItems: [],
      async readData() {
          this.categories = await getCategories();
          this.galleryItems = await getGalleryItems();
      }
  }))      
});

let categories = [
  {"id":1, "name":"All", "data-filter":"all"},
  {"id":1, "name":"Web Design" , "data-filter":"web-design"},
  {"id":1, "name":"App Development" , "data-filter":"app-development"},
  {"id":1, "name":"Branding", "data-filter":"branding"}
];

let galleryItems = [
  {"id":1, "name":"web-design", "data-filter":"all", "url":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":1, "name":"web-design", "data-filter":"web-design", "url":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":1, "name":"app-development", "data-filter":"app-development", "url":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":1, "name":"branding", "data-filter":"branding", "url":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":1, "name":"web-design", "data-filter":"web-design", "url":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=400&h=300&auto=format&fit=crop"},
];

async function getCategories() {
  return categories;
}

async function getGalleryItems() {
  return galleryItems;
}