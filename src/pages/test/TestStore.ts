import { Component, useEffect } from 'react';
import { makeObservable, observable, action } from 'mobx';
import API from '@/API';

const getTest = async (params: any) => {
  const res = await API.get(`/v1/users`, params);
  return res.data;
};

const postTest = async (params: any) => {
  const res = await API.post(`/v1/users`, params);
  return res.data;
};

const putTest = async (params: any) => {
  const res = await API.put(`/v1/users/${params.id}`, params);
  return res.data;
};

const deleteTest = async (params: any) => {
  const res = await API.delete(`/v1/users/${params.id}`);
  return res.data;
};

class TestStore {
  json: any = [];

  constructor() {
    makeObservable(this, {
      json: observable,
      reset: action,
      getTest: action,
      postTest: action,
      putTest: action,
      deleteTest: action,
    });

    console.log('TestStore2 constructor');
  }

  setJson = (json: any) => {
    this.json = json;
  }

  addJson = (json: any) => {
    this.json = [...this.json, json];
  }

  changeJson = (id: number, json: any) => {
    const index = this.json.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.json[index] = { ...json };
    }
  }

  removeJson = (id: number) => {
    this.json = [...this.json.filter((item: any) => item.id !== id)];
  }

  reset = () => {
    this.json = [];

    console.log('count reset');
  }

  getTest = async (params: any = {}) => {
    const data = await getTest(params);
    this.setJson(data);
  }

  postTest = async (params: any) => {
    const data = await postTest(params);
    this.addJson(data);
  }

  putTest = async (params: any) => {
    const data = await putTest(params);
    this.changeJson(data.id, data);
  }

  deleteTest = async (params: any) => {
    await deleteTest(params);
    this.removeJson(params.id);
  }
}

let testStore2 = new TestStore();
export const useTestStore = () => {
  useEffect(() => {
    return () => {
      testStore2 = new TestStore();
    };
  }, []);

  return {
    testStore2,
  };
};

export default new TestStore();
