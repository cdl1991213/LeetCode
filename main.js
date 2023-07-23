import { HillSort } from "./Sort/HillSort.js";
import { BubblingSort } from "./Sort/BubblingSort.js";
import { InsertionSort } from "./Sort/InsertionSort.js";
import { SelectionSort } from "./Sort/SelectionSort.js";
import { MergeSort, reverseSequencePairByViolence, reverseSequencePairByMergeSort } from "./Sort/MergeSort.js";

import { ComparisionOperatorWithInputArrayChangeArrayInPlace, ComparisionOperatorWithInputArrayOutputNum, randomTestWithInputArray } from "./ComparisonOperator.js";

// ComparisionOperatorWithInputArrayChangeArrayInPlace(MergeSort)

// randomTestWithInputArray(MergeSort)

ComparisionOperatorWithInputArrayOutputNum(reverseSequencePairByMergeSort, reverseSequencePairByViolence, 1, 7, 10)