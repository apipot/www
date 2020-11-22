#!/bin/bash
echo "I am loading example files"
INPUT_LIST="data/in/*.txt";
for f in $INPUT_LIST; do
#for f in data/in/*.txt; do
  FILE=${f%%.*};
  echo $FILE;

  FILENAME="$(basename "$FILE")";
  echo $FILENAME;
done;