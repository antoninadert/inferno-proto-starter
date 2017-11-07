
Popup({
    share: 'popupstate',
    styles: NoStyles,
    autorun() {
        if (Meteor.isClient) {
            if (this.opened()) {
                this.styles(PopStyles)
                document.body.style.overflow = "hidden";
            }
            else {
                this.styles(NoStyles)
                document.body.style.overflow = "auto";
            }
        }
    },
    render() {
        <div id='container-popup' >
            <div b="style: styles.backdrop, click: opened(false)" id='bg-drop'></div>
            <div b="style: styles.content" id='popup-content'></div>
            <div id='base-app'>
                {this.props.children}
            </div>

        </div>
    }
});

const PopStyles = {
    backdrop: {
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'width': '100%',
        'min-width': '500px',
        'height': '1000000px',
        'z-index': '9998',
        'background': 'rgba(0, 0, 0, 0.3)'
    },
    content: {
        'width':'500px',
        'height':'500px',
        'margin':'0 auto',
        'background':'#f7f7f7',
        'position':'fixed',
        'left':'50%',
        'top':'50%',
        'margin-left':'-250px',
        'margin-top':'-250px',
        'z-index':'9999'
    }
}
const NoStyles = {
    backdrop: {
        'display':'none'
    }
}