import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template',
    data: {
        user: {
            name: 'Joe'
        }
    }
});

ractive.on('activate', function(ctx, user) {
    alert(`Activating ${user.name}!`);
});