const _0x1a2b = "R09MRA==";
const _0x3c4d = "IWdhbGZfdGVyY2VzX3NpX3NpaFR7TUhU";

function checkPasscode() {
    const userInput = document.getElementById("passcode-input").value.trim();
    const errorMsg = document.getElementById("error-msg");
    const lockScreen = document.getElementById("lock-screen");
    const secretContent = document.getElementById("secret-content");
    const flagDisplay = document.getElementById("flag-display");

    if (btoa(userInput) === _0x1a2b) {
        errorMsg.textContent = "";
        lockScreen.classList.add("hidden");
        secretContent.classList.remove("hidden");
        
        const decodedFlag = atob(_0x3c4d).split("").reverse().join("");
        flagDisplay.textContent = decodedFlag;
    } else {
        errorMsg.textContent = "❌ Incorrect Passcode! Access Denied.";
        document.getElementById("passcode-input").value = "";
    }
}

function lockVault() {
    document.getElementById("passcode-input").value = "";
    document.getElementById("flag-display").textContent = "";
    document.getElementById("secret-content").classList.add("hidden");
    document.getElementById("lock-screen").classList.remove("hidden");
}

document.getElementById("passcode-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPasscode();
    }
});
