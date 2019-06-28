const configureCallToActionButton = button => {
    button.id = 'adopt-button'
    button.innerHTML = "Adopt here!";
    button.type = "button";
    button.setAttribute('onclick', "window.location.href = 'https://adoptapet.com';");
}

export default configureCallToActionButton;