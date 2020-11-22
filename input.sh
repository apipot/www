#!/bin/bash
echo "I am loading example files"
for f in data/in/*.txt do
  FILE=${f%%.*};
  echo $FILE;

  FILENAME="$(basename ${f%%.*})";
  echo $FILENAME;
done;