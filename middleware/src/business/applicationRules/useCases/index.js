import makeSetAllItemsStructure from "@useCases/setAllItemsStructure";
import makeSetOneItemStructure from "@useCases/setOneItemStructure";
import { formatListSctructure, formatItemDetail } from "@helpers";

const setAllItemsStructure = makeSetAllItemsStructure({
  formatListSctructure,
});

const setOneItemStructure = makeSetOneItemStructure({ formatItemDetail });

export { setAllItemsStructure, setOneItemStructure };
