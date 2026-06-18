package main

import (
	"fmt"
	"net/http"
)

func render(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "index.html")
}

func main() {
	var texto string

	fmt.Print("Escreva algo: ")
	fmt.Scan(&texto)
	fmt.Print("Você escrecveu: ", texto)
}
