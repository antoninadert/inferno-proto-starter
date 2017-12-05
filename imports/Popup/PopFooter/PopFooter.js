
PopFooter({
    share: 'popupstate',
    styles: PopStyles,
    render() {
        <footer b="style: styles.footer">
            <button b="click: opened(false)" title="close">Close this modal</button>
        </footer>
    }
});


const PopStyles = {
    footer: {
        'position': 'absolute',
        'bottom': '0',
        'width': '100%',
        'height': '3em',
    }
}