
document.addEventListener("DOMContentLoaded", function () {
    // Simulated data (replace this with API calls if needed)
    let steps = 0;
    let calories = 0;
    let sleep = 0;
    let goal = 0; // User's goal ;for steps
    const jan = {
        steps: 7000,
        calories: 240,
        sleep: 6,
        goal: 10000
    }

    const feb = {
        steps: 7400,
        calories: 250,
        sleep: 7,
        goal: 11000
    }

    const mar = {
        steps: 8000,
        calories: 270,
        sleep: 6.5,
        goal: 12000
    }

    const apr = {
        steps: 6000,
        calories: 202,
        sleep: 6,
        goal: 13000
    }

    const may = {
        steps: 9000,
        calories: 304,
        sleep: 7.5,
        goal: 14000
    }

    const jun = {
        steps: 11000,
        calories: 372,
        sleep: 7,
        goal: 15000
    }

    const jul = {
        steps: 6800,
        calories: 320,
        sleep: 7,
        goal: 15000
    }

    const aug = {
        steps: 8500,
        calories: 287,
        sleep: 7.4,
        goal: 17000
    }

    const sep = {
        steps: 14000,
        calories: 473,
        sleep: 7.6,
        goal: 18000
    }
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
            case "Feb":
                steps = feb.steps;
                calories = feb.calories;
                sleep = feb.sleep;
                goal = feb.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "Mar":
                steps = mar.steps;
                calories = mar.calories;
                sleep = mar.sleep;
                goal = mar.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "Apr":
                steps = apr.steps;
                calories = apr.calories;
                sleep = apr.sleep;
                goal = apr.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "May":
                steps = may.steps;
                calories = may.calories;
                sleep = may.sleep;
                goal = may.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "Jun":
                steps = jun.steps;
                calories = jun.calories;
                sleep = jun.sleep;
                goal = jun.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "Jul":
                steps = jul.steps;
                calories = jul.calories;
                sleep = jul.sleep;
                goal = jul.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "Aug":
                steps = aug.steps;
                calories = aug.calories;
                sleep = aug.sleep;
                goal = aug.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
            case "Sep":
                steps = sep.steps;
                calories = sep.calories;
                sleep = sep.sleep;
                goal = sep.goal;
                console.log("Updated values:", steps, calories, sleep, goal);
                break;
        }

        document.getElementById("calories-count").innerHTML = calories;
        document.getElementById("goal-progress").innerHTML = Math.min((steps / goal) * 100, 100).toFixed(1) + '%';
        document.getElementById("sleep-hours").innerHTML = sleep + ' hours';
        document.getElementById("steps-count").innerHTML = steps;

    })


    document.getElementById('steps-count').innerText = steps;
    document.getElementById('calories-count').innerText = calories;
    document.getElementById('sleep-hours').innerText = sleep + ' hours';


    const progress = Math.min((steps / goal) * 100, 100).toFixed(1);
    document.getElementById('goal-progress').innerText = progress + '%';



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
                borderWidth: 2,  // Thicker line for more visual appeal
                tension: 0.4,  // Smoother curve
                pointBackgroundColor: 'white', // White points for better contrast
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 5, // Larger points
                pointHoverRadius: 8, // Larger points on hover
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)' // Lighter grid lines for better appearance
                    },
                    ticks: {
                        color: '#333', // Darker tick labels
                        font: {
                            size: 12, // Larger font for better readability
                        }
                    }
                },
                x: {
                    grid: {
                        display: false // Hides vertical grid lines
                    },
                    ticks: {
                        color: '#333', // Darker tick labels
                        font: {
                            size: 14, // Larger font for readability
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333', // Darker legend labels
                        font: {
                            size: 14, // Consistent font size for legend
                            family: "'Helvetica', 'Arial', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips
                    bodyColor: '#fff', // White text inside tooltips
                    bodyFont: {
                        size: 14, // Tooltip text size
                    }
                }
            }
        }
    });
    setInterval(function () {
        if (steps < goal) {
            alert("You haven't reached your step goal yet. Keep going!");
        }
    }, 300000); // Notifies  every 5 minute                                                                                               y every hour
});

