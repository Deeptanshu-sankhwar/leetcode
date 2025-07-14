function reorderLogFiles(logs: string[]): string[] {
    const isDigitLog = (log: string): boolean => {
        const content = log.split(" ")[1];
        return /^\d+$/.test(content);
    };

    const letterLogs: string[] = [];
    const digitLogs: string[] = [];

    for (const log of logs) {
        if (isDigitLog(log)) {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    }

    letterLogs.sort((a, b) => {
        const [idA, ...contentA] = a.split(" ");
        const [idB, ...contentB] = b.split(" ");
        const bodyA = contentA.join(" ");
        const bodyB = contentB.join(" ");

        if (bodyA === bodyB) {
            return idA.localeCompare(idB);
        }
        return bodyA.localeCompare(bodyB);
    });

    return [...letterLogs, ...digitLogs];
}
