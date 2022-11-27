let store = {
  _subscriber() {
    console.log('no subscribers (observer)');
  },

  _state: {
    firstName: 'it-incubator.by',
    lastName: 'it-kamasutra.com'
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  setFirstName(value) {
    this._state.firstName = value;
    this._subscriber();
  }

}

let state = store.getState();
store.setFirstName('SamuraiJS');
state = store.getState();

store.subscribe(() => {
  let state = store.getState();
  renderPage(state);
});

//37 video 16.09
