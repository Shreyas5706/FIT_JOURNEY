// Simulated data (replace this with API calls if needed)
let steps = 0;
let calories = 0;
let sleep = 0;
let goal = 0; // User's goal for steps

const jan = {
    steps: 7000,
    calories: 240,
    sleep: 6,
    goal: 10000
}

const feb = {
    // ...
}

// ...

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("month").addEventListener("change", () => {
        let month = document.getElementById("month").value;
        console.log("Selected month:", month);

        switch (month) {
            case "Jan":
                steps = jan.steps;
                calories = jan.calories;
                sleep = jan.sleep;
                goal = jan.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            // ...
        }

        document.getElementById("calories-count").innerHTML = calories;
        document.getElementById("goal-progress").innerHTML = Math.min((steps / goal) * 100, 100).toFixed(1) + '%';
        document.getElementById("sleep-hours").innerHTML = sleep + ' hours';
        document.getElementById("steps-count").innerHTML = steps;

        const ctx = document.getElementById('stepsChart').getContext('2d');
        const stepsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Steps',
                    data: [jan.steps, feb.steps, mar.steps, apr.steps, may.steps, jun.steps, jul.steps, aug.steps, sep.steps],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,  // Th
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});