function applyProtectionStyles() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
        }
        
        ::selection {
            background: transparent !important;
        }
        
        ::-moz-selection {
            background: transparent !important;
        }
    `;
    document.head.appendChild(style);
}

function protect(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function protectFromKeyboard(e) {
    if (e.ctrlKey && ['a','A','c','C','v','V','x','X'].includes(e.key)) {
        e.preventDefault();
        return false;
    }
}

function protectFromContext(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function protectFromDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function init() {
    applyProtectionStyles();
    
    document.addEventListener('selectstart', protect);
    document.addEventListener('contextmenu', protect);
    document.addEventListener('dragstart', protect);
    document.addEventListener('keydown', protectFromKeyboard);
    document.addEventListener('copy', protect);
    document.addEventListener('cut', protect);
    document.addEventListener('paste', protect);
}

document.addEventListener('DOMContentLoaded', init); 