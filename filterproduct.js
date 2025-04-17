document.addEventListener('DOMContentLoaded', function() { 
  // before click on any category 
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    const span = item.querySelector('span').textContent.toLowerCase();
    if(span == 'web design') {
      item.classList.remove('hidden');   
    }else {
      item.classList.add('hidden');   
    }
  });


  // get the filter buttons properties
  const filterButtons = document.querySelectorAll('.filter-button');

  // when click any single filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // get and store the clicked filter button properties
      const filterValue = button.textContent.toLowerCase();
      
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      
      portfolioItems.forEach(item => {
        const itemCategories = item.querySelector('span').textContent.toLowerCase();
  
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});