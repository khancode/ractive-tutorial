import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template'
});

ractive.on('activate', function ( context ) {
    // `this` is the ractive instance
    // `context` is a context object
    // any additional event arguments would follow `context`, if supplied
    alert( 'Activating!' );
});