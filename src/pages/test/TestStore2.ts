import { Component, useEffect } from 'react';
import { makeObservable, observable, action } from 'mobx';
import API from '@/API';

class TestStore2 {
  count = 0;
  json: any = [];

  constructor() {
    makeObservable(this, {
      count: observable,
      json: observable,
      decrement: action,
      increment: action,
      changeJson: action,
      reset: action,
      fetcha: action,
      fetchb: action,
      fetchd: action,
    });

    console.log('TestStore2 constructor');
  }

  increment = () => {
    this.count++;
    console.log('count incremented', this.count);
  };

  decrement = () => {
    this.count--;
    console.log('count decremented', this.count);
  };

  changeJson = () => {
    this.json = {
      a: 4,
      b: 5,
      c: 6,
    };
  };

  reset = () => {
    this.count = 0;

    console.log('count reset');
  };

  fetcha = async () => {
    const res = await API.get('/v1/users');
    this.json = res.data;
  };

  fetchb = async () => {
    const res = await API.post(
      '/v1/users',
      {
        name: 'Alice',
        email: 'alice@example.com',
      },
      {
        headers: {
          'x-api-key': '1234',
        },
      }
    );
    this.json = [...this.json, res.data];
  };

  fetchc = async () => {
    const res = await API.delete(`/v1/users/1`);
    this.json = [...this.json.slice(1)];
  };

  fetchd = async () => {
    const res = await API.delete(`/v1/users/${this.json[0].id}`);
    this.json = [...this.json.slice(1)];
  };
}

let testStore2 = new TestStore2();
export const useTestStore2 = () => {
  useEffect(() => {
    return () => {
      testStore2 = new TestStore2();
    };
  }, []);

  return {
    testStore2,
  };
};

export default TestStore2;
