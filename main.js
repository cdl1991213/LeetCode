import { HillSort } from "./Sort/HillSort.js";
import { BubblingSort } from "./Sort/BubblingSort.js";
import { InsertionSort } from "./Sort/InsertionSort.js";
import { SelectionSort } from "./Sort/SelectionSort.js";
import { MergeSort, reverseSequencePairByViolence, reverseSequencePairByMergeSort } from "./Sort/MergeSort.js";
import { QuickSort } from "./Sort/QuickSort.js";

import { ComparisionOperatorWithInputArrayChangeArrayInPlace, ComparisionOperatorWithInputArrayOutputNum, randomTestWithInputArray } from "./ComparisonOperator.js";

ComparisionOperatorWithInputArrayChangeArrayInPlace(QuickSort)

// randomTestWithInputArray(MergeSort)

// ComparisionOperatorWithInputArrayOutputNum(reverseSequencePairByMergeSort, reverseSequencePairByViolence)