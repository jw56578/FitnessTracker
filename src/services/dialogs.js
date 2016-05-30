function confirm(msg,onConfirm){ 
    navigator.notification && navigator.notification.confirm(msg, onConfirm, 'Reset', 'No,OK');
}
export {confirm};