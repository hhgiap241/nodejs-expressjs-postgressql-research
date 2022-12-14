import db from '../utils/db/db.js';

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