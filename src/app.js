import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template'
});

ractive.on({
    activate: function () {
        alert( 'Activating!' );
    },
    deactivate: function () {
        alert( 'Deactivating!' );
    }
});