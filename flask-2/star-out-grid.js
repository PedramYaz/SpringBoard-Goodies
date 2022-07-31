function starOutGrid(grid) {
  for (let x = 0; x < grid.length; x++) {
    const rowArray = grid[x];
    console.log(rowArray);
    for (let y = 0; y < rowArray.lenght; y++) {
      const colArray = grid.map((c) => c[y]);
      if (colArray[y].includes("*")) {
        return colArrayArray.replace(/[A-z]/g, "*");
      }
      console.log(colArray);
    }
  }
}
