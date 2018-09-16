import Ractive from 'ractive';

const ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: {
        signedIn: false
    },
    signIn: function () {
        const name = prompt('Enter your username to sign in', 'ractive_fan');

        ractive.set({
            username: name,
            signedIn: true
        });
    }
});
