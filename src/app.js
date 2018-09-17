import Ractive from 'ractive';

const ractive = new Ractive({
    target: '#target',
    template: '#template'
});

ractive.toggle('checked');

// Equivalent to:
//   var checked = ractive.get( 'checked' );
//   ractive.set( 'checked', !checked );