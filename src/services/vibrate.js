function vibrate(duration){
    console.log('vibrating');
    navigator.notification && navigator.notification && navigator.notification.vibrate(duration);
}
export {vibrate};