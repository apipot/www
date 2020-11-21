#!/bin/bash
echo "I am preparing some example data for tests"
# loop
# create folder for groups and repositories by file list in data folder
for f in data/out/*.txt; do \
  SAMPLE=`basename ${f%%.*}`; \
  if [ ! -f data/in/${SAMPLE}.txt ]; then \
     echo "processing sample ${SAMPLE}"; \
     # do something \
  fi; \
done