// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_array_contains_filter]
import { query, where } from "firebase/firestore";  
const q = query(citiesRef, where("regions", "array-contains", "west_coast"));
// [END modular_array_contains_filter]