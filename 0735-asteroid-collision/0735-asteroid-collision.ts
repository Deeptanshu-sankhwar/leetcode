function asteroidCollision(asteroids: number[]): number[] {
    let stack: number[] = [];

    for (let asteroid of asteroids) {
        let destroyed = false; // Flag to check if asteroid is destroyed

        while (
            stack.length > 0 &&
            asteroid < 0 && // Current asteroid moving left
            stack[stack.length - 1] > 0 // Stack top asteroid moving right
        ) {
            let top = stack.pop()!; // Remove last asteroid

            if (Math.abs(top) > Math.abs(asteroid)) {
                stack.push(top); // Top asteroid survives
                destroyed = true; // Mark current asteroid as destroyed
                break; // Exit loop since asteroid is destroyed
            } else if (Math.abs(top) === Math.abs(asteroid)) {
                destroyed = true; // Both asteroids destroy each other
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid); // Only push surviving asteroids
        }
    }

    return stack;
}
