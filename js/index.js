document.querySelectorAll(".heart-btn").forEach((heartBtn) => {
	heartBtn.addEventListener("click", () => {
		const heartCount = document.getElementById("heart-count");
		heartCount.innerText = +heartCount.innerText + 1;
	});
});
