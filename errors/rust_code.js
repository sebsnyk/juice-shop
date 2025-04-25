// This is Rust code, not JavaScript.
use std::thread;
use std::time::Duration;

#[derive(Debug, Clone, Copy)]
struct Point {
    x: f64,
    y: f64,
}

impl Point {
    fn distance_from_origin(&self) -> f64 {
        // Calculate distance using sqrt(x^2 + y^2)
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

fn main() {
    let p1 = Point { x: 3.0, y: 4.0 };
    let p2 = Point { x: 5.0, y: 12.0 };

    println!("Point 1: {:?}, Distance: {:.2}", p1, p1.distance_from_origin());

    // Example of spawning a thread
    let handle = thread::spawn(move || {
        println!("Thread spawned with point: {:?}", p2);
        thread::sleep(Duration::from_millis(50));
        p2.distance_from_origin() // Return value from thread
    });

    match handle.join() {
        Ok(distance) => println!("Thread finished, calculated distance: {:.2}", distance),
        Err(_) => eprintln!("Thread panicked!"),
    }
     println!("Rust example complete.");
}
