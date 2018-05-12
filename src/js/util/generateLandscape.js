import { TerrainTypes } from '../constants/enums'

export const generateLandscape = (
  height = 7, width = 12, baseTerrain = TerrainTypes.GRASSLAND,
  altTerrainOne = TerrainTypes.GRASSLAND,
  altTerrainTwo = TerrainTypes.GRASSLAND) => {
  const terrainMap = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const res = (i * width) + j;
      if (res % 7 === 0) {
        row.push(altTerrainOne);
      } else if (res % 13 === 0) {
        row.push(altTerrainTwo);
      } else {
        row.push(baseTerrain);
      }
    }
    terrainMap.push(row);
  }
  return terrainMap;
};
