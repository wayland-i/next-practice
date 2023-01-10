migrate((db) => {
  const collection = new Collection({
    "id": "pyj28gvxsnw8z5r",
    "created": "2023-01-10 21:22:11.256Z",
    "updated": "2023-01-10 21:22:11.256Z",
    "name": "ian_ian",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xvf00kua",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pyj28gvxsnw8z5r");

  return dao.deleteCollection(collection);
})
