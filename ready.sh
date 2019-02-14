#!/bin/bash
TD=trace_data
DIR=$TD/$(ls -al $TD | tail -1 | awk '{print $NF}')

printf 'const classLog = ' > class.js
cat $DIR/class.data >> class.js

echo 'const traceLog =`' > trace.js
cat $DIR/trace.data >> trace.js
echo '`' >> trace.js
