"use client";

import { useState } from "react";

export default function CrudList() {
  const [listData, setListData] = useState([]);
  const [listMode, setListMode] = useState({ text: "None", id: 0 });

  return (
    <>
      <ul className="mb-2 p-4 flex flex-col gap-2 bg-gray-100 rounded-sm dark:bg-gray-900">
        {listData.map((element, index) => (
          <div
            key={index}
            className="p-2 flex flex-col rounded-md border-2 border-primary-900 dark:border-primary-75"
          >
            <h3 className="font-semibold md:text-2xl">{element.text}</h3>
            <div className="flex-row justify-between">
              <button
                className="mx-2 px-4 py-2 bg-primary-300 text-white rounded hover:bg-primary-400 dark:bg-primary-200 dark:hover:bg-primary-100"
                onClick={() => {
                  if (listMode == element.text) {
                    setListMode({ text: "None", id: 0 });
                  } else {
                    setListMode(element);
                  }
                }}
              >
                Edit
              </button>
              <button
                className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:hover:bg-red-400"
                onClick={() => {
                  setListData(listData.filter((item) => item !== element));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {listData.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No Items Found
          </p>
        )}
      </ul>
      <div className="mb-2 p-4 flex flex-col bg-gray-100 rounded-sm dark:bg-gray-900">
        {listMode.text == "None" ? (
          <h2 className="font-semibold text-lg md:text-2xl">Create</h2>
        ) : (
          <h2 className="font-semibold text-lg md:text-2xl">
            Edit {listMode.text}
          </h2>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newItem = e.target.elements.newItem.value.trim();
            if (newItem && listMode.text == "None") {
              setListData([...listData, { text: newItem, id: Date.now() }]);
              e.target.reset();
            } else if (newItem) {
              setListData(
                listData.map((item) =>
                  item.id === listMode.id
                    ? { text: newItem, id: item.id }
                    : item
                )
              );
              setListMode({ text: "None", id: 0 });
              e.target.reset();
            }
          }}
        >
          <input
            type="text"
            name="newItem"
            placeholder="Enter new item"
            className="mb-2 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary-300 text-white rounded hover:bg-primary-400 dark:bg-primary-200 dark:hover:bg-primary-100"
          >
            {listMode.text == "None" ? "Add" : "Edit"}
          </button>
        </form>
      </div>
    </>
  );
}
