#!/bin/bash
echo "I am loading example files"
#config
REPO="repo"
ENV="static"
#ENV="php"
#ENV="nodejs"
# show files /in
#ls data/in/
# loop
# create folder for groups and repositories by file list in data folder
INPUT_LIST="data/in/*.txt";
for INPUT in $INPUT_LIST; do

  echo $INPUT;

  FILE=${INPUT%%.*};
  echo $FILE;

  FILENAME="$(basename "$FILE")";
  echo $FILENAME;

  # Set the OUTPUT filename with path
  OUTPUT="data/out/${FILENAME}.txt";
  echo $OUTPUT;

  if [ ! -f "$OUTPUT" ]; then
     echo ":: processing: ${FILENAME}"; \
     #cat `data/in/${FILENAME}.txt` | while read LINE; do echo "--${LINE}--"; done
     #same loop over files, but using a pipe (reading from standard input), and a while-loop
     #ls `data/in/${FILENAME}.txt` | while read LINE; do echo "--${LINE}--"; done;

    # check if is existing
    #if [ -f "$INPUT" ]; then
#        while IFS= read -r line || [[ -n "$line" ]]; do \
        while IFS= read -r line; do \
          #echo "-- $line --";
          # Read the filename without extension by using ‘basname’ and `sed` command
          PROJECT="$(basename "$line" | sed 's/\(.*\)\..*/\1/')"; \
          echo $PROJECT; \
          mkdir -p "${REPO}/${ENV}/${FILENAME}"; \
          PATH="${REPO}/${ENV}/${FILENAME}/${PROJECT}"; \
          echo $PATH; \
          git clone $line $PATH; \
        done < "$INPUT"; \

    #else
    #  echo "FILE: ${INPUT} NOT EXIST!"
    #fi;

     #mv data/in/${FILENAME}.txt data/out/${FILENAME}.txt;
  fi;
done;

# file line reader:
# https://stackoverflow.com/questions/10929453/read-a-file-line-by-line-assigning-the-value-to-a-variable
## This is the standard form for reading lines from a file in a loop. Explanation:
## IFS= (or IFS='') prevents leading/trailing whitespace from being trimmed.
## -r prevents backslash escapes from being interpreted.
# Here, || [[ -n $line ]] prevents the last line from being ignored if it doesn't end with a \n (since read returns a non-zero exit code when it encounters EOF).