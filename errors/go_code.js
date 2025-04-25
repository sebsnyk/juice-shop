// This is Go code, not JavaScript.
package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Result struct {
	WorkerID int
	Value    int
	Err      error
}

// Simulate work function
func simulateWork(id int, results chan<- Result) {
	fmt.Printf("Worker %d starting\n", id)
	defer fmt.Printf("Worker %d finished\n", id)

	time.Sleep(time.Duration(rand.Intn(100)) * time.Millisecond)
	if rand.Intn(10) < 2 { // Simulate an error
		results <- Result{WorkerID: id, Err: fmt.Errorf("simulated error from worker %d", id)}
		return
	}
	results <- Result{WorkerID: id, Value: rand.Intn(1000)}
}

func main() {
	rand.Seed(time.Now().UnixNano()) // Deprecated but simple for example
	resultsChan := make(chan Result, 3)

	for i := 0; i < 3; i++ {
		go simulateWork(i+1, resultsChan)
	}

	// Collect results
	for i := 0; i < 3; i++ {
		res := <-resultsChan
		if res.Err != nil {
			fmt.Printf("Error from worker %d: %v\n", res.WorkerID, res.Err)
		} else {
			fmt.Printf("Result from worker %d: %d\n", res.WorkerID, res.Value)
		}
	}
	close(resultsChan)
	fmt.Println("Go example complete.")
}
