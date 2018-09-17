import Ractive from 'ractive';

const ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: {
		colors: [ 'red', 'green', 'blue', 'purple' ],
		meta: /Mac/.test(navigator.appVersion) ? 'Cmd' : 'Ctrl'
	}
});

ractive.set( 'selectedColors', [ 'green', 'purple' ]);