import Ractive from 'ractive';

const ractive = new Ractive({
    el: '#target',
    template: '#template',
    data: {
        number: 0
    }
});