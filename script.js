document.addEventListener('DOMContentLoaded', function() {
  
  const filterButtons = document.querySelectorAll(".filter-btn");
      const galleryItems = document.querySelectorAll(".gallery-item");

      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {

          
          const filter = btn.getAttribute("data-filter");
          console.log(filter)

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
  {"id":1, "name":"All", "dataFilter":"all"},
  {"id":2, "name":"Web Design" , "dataFilter":"web-design"},
  {"id":3, "name":"App Development" , "dataFilter":"app-development"},
  {"id":4, "name":"Branding", "dataFilter":"branding"}
];

let galleryItems = [
  {"id":1, "name":"all", "url":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":2, "name":"web-design", "url":"https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":3, "name":"app-development", "url":"https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?q=80&w=1024&auto=format&fit=crop", "thumb":"https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":4, "name":"branding", "url":"https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1024&auto=format&fit=crop", "thumb":"https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=400&h=300&auto=format&fit=crop"},
  {"id":5, "name":"web-design", "url":"https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=1024&auto=format&fit=crop", "thumb":"https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=400&h=300&auto=format&fit=crop"},
];

async function getCategories() {
  return categories;
}

async function getGalleryItems() {
  return galleryItems;
}