var messageBox = document.querySelectorAll("[contenteditable='true']")[1];

function getMessage() {
    let status = document.querySelectorAll("[title='çevrimiçi']")[0].title;
    if (status === "çevrimiçi") {
        event = new UIEvent("input", { "bubbles": true, "cancelable": true })

        messageBox.innerHTML = "deneme "

        messageBox.dispatchEvent(event);

        document.querySelector('span[data-icon="send"]').click()
    }

}
var myVar = setInterval(getMessage, 2000)

//clearInterval(myVar)