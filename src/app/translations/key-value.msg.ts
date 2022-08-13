import { translate } from 'typed-intl';
 
export default translate({
    key: 'Key',
    value: 'Value',
    add: 'Add',
    stop: 'stop',
    start: 'start',
    kill: 'kill',
    reload: 'reload',
    remove: 'remove',
    ok: 'OK',
    cancel: 'Cancel',
    welcome: 'Welcome',           
}).supporting('de', {
    key: 'Key',
    value: 'Value',
    add: 'Add',
    stop: 'Stop',
    start: 'Start',
    kill: 'Kill',
    reload: 'Neuladen',
    remove: 'Löschen',
    ok: 'OK',
    cancel: 'Abbrechen',
    welcome: 'Willkommen',
}).partiallySupporting('de-CH', { // 3.
    welcome: 'Grüezi'  
})
