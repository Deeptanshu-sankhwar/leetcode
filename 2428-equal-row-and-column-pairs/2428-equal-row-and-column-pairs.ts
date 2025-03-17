function equalPairs(grid: number[][]): number {
    // rowHashMap -> [str, freq]

    let rowHashMap = new Map<string, number>();
    let colHashMap = new Map<string, number>();

    let gridLength: number = grid[0].length;

    for (let i = 0; i < gridLength; i++)    {
        let rowStr: string = grid[i].join(",");
        rowHashMap.set(rowStr, (rowHashMap.get(rowStr) || 0) + 1);
    }

    let result: number = 0;

    for (let j = 0; j < gridLength; j++)    {
        let colArr: number[] = [];
        for (let i = 0; i < gridLength; i++)    {
            colArr.push(grid[i][j]);
        }

        let colStr: string = colArr.join(",");

        if (rowHashMap.has(colStr)) {
            result += rowHashMap.get(colStr);
        }
    }

    return result;
};