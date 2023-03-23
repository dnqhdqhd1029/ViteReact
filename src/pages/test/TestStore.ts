import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class TestStore {
  count = 1;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      fetcha: action,
      fetchb: action,
    });
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };

  fetcha = () => {
    axios.get('http://localhost:4000/dev/v1/mhub/e/user').then((res) => {
      console.log('res', res);
    });
  };

  fetchb = () => {
    axios
      .get('http://localhost:4000/dev/v1/mhub/e/user', {
        headers: {
          'x-api-key': '1234',
        },
      })
      .then((res) => {
        console.log('res', res);
      });
  };
}
export default new TestStore();
