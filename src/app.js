import Ractive from 'ractive';

const ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: {
        colors: [ 'red', 'green', 'blue' ],
        color: 'green'
	}
});
