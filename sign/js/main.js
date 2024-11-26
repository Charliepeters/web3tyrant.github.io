const tabitems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();

    // Add border to current tab
    this.classList.add('tab-border');

    // Grab content item from the DOM
    const tabContentitem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentitem.classList.add('show');
}

function removeBorder() {
    tabitems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabcontentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabitems.forEach(item => item.addEventListener('click', selectItem));
