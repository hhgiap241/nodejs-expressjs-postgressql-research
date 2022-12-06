import db from '../utils/db/db.ts';

export default function (tableName, idField) {
  return {
    findAll() {
      return db(tableName);
    },

    add(entity) {
      return db(tableName).insert(entity);
    }
  }
}