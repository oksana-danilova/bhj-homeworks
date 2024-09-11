document.addEventListener("DOMContentLoaded", function() {
	const dropdownValue = document.querySelector('.dropdown__value');
	const dropdownList = document.querySelector('.dropdown__list');
	const dropdownItems = document.querySelectorAll('.dropdown__item');
	const dropdownLink = document.querySelectorAll('.dropdown__link')
	const dropdownLinks = document.querySelectorAll('.dropdown__link');

	dropdownLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
		});
	});

	dropdownValue.onclick = () => {

		dropdownList.classList.add('dropdown__list_active');

	}

	dropdownItems.forEach(function(dropdownItem) {
		dropdownItem.onclick = () => {
			dropdownList.classList.remove('dropdown__list_active');
			dropdownValue.textContent = dropdownItem.textContent;

		}

	})

});