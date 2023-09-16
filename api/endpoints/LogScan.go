package endpoints

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"reflect"

	"github.com/gin-gonic/gin"
)

func storeData(filename string, data string) {
	file, err := os.OpenFile(filename, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0660)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	_, err = file.WriteString(fmt.Sprintln(data))
	if err != nil {
		panic(err)
	}

}

func LogScan() gin.HandlerFunc {
	return func(c *gin.Context) {
		var scanData map[string]interface{}
		c.BindJSON(&scanData)

		jsArr, err := json.Marshal(scanData)
		if err != nil {
			panic(err)
		}

		if reflect.TypeOf(scanData["queueId"]) == reflect.TypeOf("") {
			fmt.Printf("Id: %s/n", scanData["queueId"])
			storeData(fmt.Sprintf("../data/%s-json-queue.ndjson", scanData["queueId"].(string)), string(jsArr[:]))

		} else {
			fmt.Print("No id present/n")
			storeData("./uncatagorized-json-queue.ndjson", string(jsArr[:]))
		}
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	}
}
