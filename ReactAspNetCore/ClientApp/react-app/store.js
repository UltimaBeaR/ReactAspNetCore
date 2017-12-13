import { observable } from 'mobx';

class Store {
    @observable
    words = []
}

const store = new Store();

export default store;