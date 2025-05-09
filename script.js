document.addEventListener('DOMContentLoaded', function() {
  
  const filterButtons = document.querySelectorAll(".filter-btn");  

      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {

          
          const filter = btn.getAttribute("data-filter");
          console.log(filter)

          const galleryItems = document.querySelectorAll(".gallery-item");

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
