#!/bin/bash
echo "I am loading example files"
INPUT_LIST="data/in/*.txt";
for f in $INPUT_LIST; do
#for f in data/in/*.txt; do
  FILE=${f%%.*};
  echo $FILE;

  FILENAME="$(basename "$FILE")";
  echo $FILENAME;

  #INPUT="data/in/${FILENAME}.txt";
  INPUT=$f;
  echo $INPUT;

  while IFS= read -r line || [[ -n "$line" ]]; do
        #echo "-- $line --";
        # Read the filename without extension by using ‘basname’ and `sed` command
        PROJECT="$(basename "$line" | sed 's/\(.*\)\..*/\1/')";
        echo $PROJECT;
  done < "$INPUT";

done;