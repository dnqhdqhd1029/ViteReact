import { Component } from 'react';
import { makeObservable, observable, action } from 'mobx';
import API from '@/API';

class TestStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      decrement: action,
      increment: action,
      reset: action,
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

  reset = () => {
    this.count = 0;

    console.log('count reset');
  };

  fetcha = () => {
    API.get('http://localhost:4000/dev/v1/mhub/e/user').then((res) => {
      console.log('res', res);
    });
  };

  fetchb = () => {
    API.get('http://localhost:4000/dev/v1/mhub/e/user', {
      headers: {
        'x-api-key': '1234',
      },
    }).then((res) => {
      console.log('res', res);
    });
  };
}

export default new TestStore();
