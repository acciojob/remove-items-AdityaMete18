//your JS code here. If required.
function removeItem(){
   let colorSelect = document.getElementById("colorSelect");
   let selectedItem = colorSelect.options[colorSelect.selectedIndex];

   selectedItem.remove();
}