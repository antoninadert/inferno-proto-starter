if(Meteor.isClient) {
    import './popup.css'
}


Popup({
    share: 'popupstate',
    styles: NoStyles,
    popupTitle:'My popup title',
    popupSection: <PopSection />,
    popupFooter: <PopFooter />,
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
            <div b="style: styles.content" id='popup-content'>
                <header b="style: styles.header">
                    <h1 class="popup-h1-title">{this.popupTitle()}</h1>
                    <button b="click: opened(false)" class="popup-close-button" title="close">X</button>
                </header>
                {this.popupSection()}
                {this.popupFooter()}
            </div>
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
        'min-width': '320px',
        'height': '1000000px',
        'z-index': '9998',
        'background': 'rgba(0, 0, 0, 0.3)'
    },
    content: {
        'width':'86vw',
        'height':'500px',
        'margin':'0 auto',
        'background':'#f7f7f7',
        'position':'fixed',
        'left':'50%',
        'top':'50%',
        'margin-left':'-43vw',
        'margin-top':'-250px',
        'z-index':'9999',
    },
    header: {
        'overflow': 'hidden',
        'width': '100%',
        'height': '14vh',
        'max-height': '90px',
    },

}
const NoStyles = {
    backdrop: {
        'display':'none'
    },
    content: {
        'display':'none'
    }
}