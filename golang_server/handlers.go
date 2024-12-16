package main

import (
	"encoding/json"
	"net/http"

	"github.com/google/uuid"
)

var items = []Item{}

func getItems(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(items)
}

func createItem(w http.ResponseWriter, r *http.Request) {
	var item Item
	json.NewDecoder(r.Body).Decode(&item)
	item.ID = uuid.New().String()
	items = append(items, item)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(item)
}

func updateItem(w http.ResponseWriter, r *http.Request) {
	// Реализация обновления элемента
}

func deleteItem(w http.ResponseWriter, r *http.Request) {
	// Реализация удаления элемента
}
