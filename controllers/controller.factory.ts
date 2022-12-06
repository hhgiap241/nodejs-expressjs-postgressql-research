interface Service<T> {
  // getItem(id: string): Promise<T>,

  listItem(): Promise<T[]>,
  insertItem(item: T): Promise<T>,
}

interface Controller<T> {
  // getItem(id: string): Promise<T>,

  listItem(): Promise<T[]>,
  insertItem(item: T): Promise<T>,
}

const makeController = <T>(service: Service<T>): Controller<T> => {
  return {
    // getItem: async (id: string): Promise<T> => {
    //   return await service.getItem(id);
    // },
    listItem: async (): Promise<T[]> => {
      return await service.listItem();
    },
    insertItem: async (item: T): Promise<T> => {
      return await service.insertItem(item);
    }
  }
}

export {
  makeController,
  Controller,
  Service
}