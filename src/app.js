import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template',
    data: {
        red: 0.45,
        green: 0.61,
        blue: 0.2
    }
});

ractive.set('red', 1);