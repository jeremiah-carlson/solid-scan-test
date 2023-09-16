package main

import (
	"api/endpoints"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:*", "https://jeremiah-carlson.github.io", "https://salmon-rock-0523f670f.3.azurestaticapps.net"},
		AllowMethods:     []string{"POST", "OPTIONS"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowWildcard:    true,
	}))

	r.POST("/qrscan", endpoints.LogScan())

	r.Run("0.0.0.0.:8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
