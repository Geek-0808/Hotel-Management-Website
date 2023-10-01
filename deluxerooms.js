document.addEventListener("DOMContentLoaded", function () {
    const roomList = document.getElementById("roomList");
    const deluxeButton = document.getElementById("deluxeButton");

    deluxeButton.addEventListener("click", function () {
        roomList.innerHTML = ""; // Clear existing room buttons
        for (let i = 201; i <= 212; i++) {
            const roomButton = document.createElement("button");
            roomButton.classList.add("room-button");
            roomButton.textContent = i;
            roomList.appendChild(roomButton);
        }
    });
});
