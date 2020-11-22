#!/bin/bash
echo "I am loading example files"
#config
REPO="repo"
ENV="env"
# show files /in
ls data/in/
# loop
# create folder for groups and repositories by file list in data folder
for f in data/in/*.txt; do
  SAMPLE=`basename ${f%%.*}`;
  OUTPUT="data/out/${SAMPLE}.txt";
  #echo $SAMPLE;
  if [ ! -f OUTPUT ]; then
     echo ":: processing: ${SAMPLE}";
     #cat `data/in/${SAMPLE}.txt` | while read LINE; do echo "--${LINE}--"; done
     #same loop over files, but using a pipe (reading from standard input), and a while-loop
     #ls `data/in/${SAMPLE}.txt` | while read LINE; do echo "--${LINE}--"; done;
    # Set the filename with path
    INPUT="data/in/${SAMPLE}.txt";
    # check if is existing
    if [ -f INPUT ]; then \
      while IFS= read -r line || [[ -n "$line" ]]; do \
        #echo "-- $line --";
        # Read the filename without extension by using ‘basname’ and `sed` command
        FILE="$(basename "$line" | sed 's/\(.*\)\..*/\1/')"; \
        PATH="${REPO}/${ENV}/${SAMPLE}/${FILE}"; \
        git clone $line $REPO; \
      done < "$INPUT";

     #mv data/in/${SAMPLE}.txt data/out/${SAMPLE}.txt;
  fi;
done;

# file line reader:
# https://stackoverflow.com/questions/10929453/read-a-file-line-by-line-assigning-the-value-to-a-variable
## This is the standard form for reading lines from a file in a loop. Explanation:
## IFS= (or IFS='') prevents leading/trailing whitespace from being trimmed.
## -r prevents backslash escapes from being interpreted.
# Here, || [[ -n $line ]] prevents the last line from being ignored if it doesn't end with a \n (since read returns a non-zero exit code when it encounters EOF).