const VMstyles = {
    div: {
        'background-color': 'aqua'
    }
}
const Nostyles = {
}
Popup({
    styles: Nostyles,
    autorun() {
        if (Meteor.isClient) {
            if (this.opened()) {
                this.styles(VMstyles)
            }
            else {
                this.styles(Nostyles)
            }
        }
    },
    render() {
        <div b="style: styles.div" >{this.props.children}</div>
    }
});