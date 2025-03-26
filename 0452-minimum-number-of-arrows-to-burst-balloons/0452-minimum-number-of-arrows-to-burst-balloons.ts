function findMinArrowShots(points: number[][]): number {
    // sort the points in the ascending order of x_end
    let size: number = points.length;

    if (size === 0) {
        return 0;
    }

    if (size === 1) {
        return 1;
    }

    // sort - O(nlong(n)) - Timsort
    points.sort((a, b) => a[1] - b[1]);

    let counter: number = 0;

    let shootAt: number = 0;

    // shoot at the end of each if it isn't covered in other intervals
    for (let i = 0; i < size; i++) {
        if (points[i][0] <= shootAt && points[i][1] >= shootAt) {
            // do nothing
        } else {
            shootAt = points[i][1];
            counter++;
        }

        if (shootAt === 0) {
            shootAt = points[i][1];
            counter++;
        }
    }

    return counter;
};