document.querySelectorAll(".heart-btn").forEach((heartBtn) => {
	heartBtn.addEventListener("click", () => {
		const heartCount = document.getElementById("heart-count");
		heartCount.innerText = +heartCount.innerText + 1;
	});
});

document.querySelectorAll(".call-btn").forEach((callBtn) => {
	callBtn.addEventListener("click", (e) => {
		const cardShortNameId = e.target.parentElement.id;

		const cardFullName = document.getElementById(
			`${cardShortNameId}-title`
		)?.innerText;

		const cardNum = document.getElementById(
			`${cardShortNameId}-number`
		)?.innerText;

		const coinCountElem = document.getElementById("coin-count");
		if (cardFullName && cardNum && +coinCountElem.innerText >= 20) {
			const callAlert = `📞 ${cardFullName} ${cardNum} ...`;
			alert(callAlert);
			coinCountElem.innerText = +coinCountElem.innerText - 20;
			const callHistoryContainer = document.getElementById(
				"call-history-container"
			);
			const callHistoryItem = document.createElement("div");
			callHistoryItem.innerHTML = `
            <div class="flex justify-between items-center mb-4">
               <div class="w-2/3">
                  <h5 class="font-bold">${cardFullName}</h5>
                  <p>${cardNum}</p>
               </div>
               <p>${new Date().toLocaleTimeString()}</p>
            </div>
         `;
			callHistoryContainer.appendChild(callHistoryItem);
		} else if (+coinCountElem.innerText < 20) {
			alert("You don't have enough coins");
		}
	});
});

document.getElementById("clear-history-btn").addEventListener("click", (e) => {
	document.getElementById("call-history-container").innerHTML = "";
});

document.querySelectorAll(".copy-btn").forEach((copyBtn) => {
	copyBtn.addEventListener("click", (e) => {
		const cardShortNameId = e.currentTarget.parentElement.id;
		const cardNum = document.getElementById(
			`${cardShortNameId}-number`
		)?.innerText;

		if (!cardNum) {
			console.log("no text found to copy");
			return;
		}
		//: show alert and increase copy count
		alert(`${cardNum} copied to clipboard`);
		const copyCountElem = document.getElementById("copy-count");
		copyCountElem.innerText = +copyCountElem.innerText + 1;

		//: copy hotline number
		try {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard
					.writeText(cardNum)
					.then(() => console.log("copied using navigator.clipboard.writeText"))
					.catch((error) => console.log("Failed to copy text: ", error));
			} else {
				// Fallback for browsers that do not support the Clipboard API
				const textArea = document.createElement("textarea");
				textArea.value = cardNum;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand("copy");
				document.body.removeChild(textArea);
			}
		} catch (error) {
			console.log("Failed to copy text: ", error);
		}
	});
});
